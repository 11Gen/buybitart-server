const { getMainSettings } = require("../services/settings.service");
const path = require("path");
const fs = require("fs");
const handlebars = require("handlebars");
const mailService = require("../services/mail.service");
const notificationService = require("../services/notification.service");

class NotificationController {
  async sendAuctionEndEmails(auc, winner) {
    try {
      const notificationSettings = await getMainSettings();
      const emailSettings = notificationSettings[0]?.emailNotifications || {};

      if (!emailSettings?.categories[2]?.checked) return;

      await this.sendEmail(
        '"BuyBitArt.com" <info@buybitart.com>',
        winner.user.email,
        "🎉 You Won the Auction! Time to Pay!",
        "Auction Win Notification",
        "email-template.html",
        {
          message: `
            <p>Congratulations! You won the auction <b>${
              auc.title
            }</b> with a bid of <b>${auc.currentPrice.toFixed(
            4
          )} BTC</b>. Please complete the payment within 24 hours to secure your item.</p>
            <a target="_blank" href='${
              process.env.CLIENT_URL
            }/payment/auction?${new URLSearchParams({
            id: auc.hash,
          })}' class="button">Pay Now</a>
          `,
        }
      );

      console.log(`Email sent to winner: ${winner.user.email}`);

      await this.sendEmail(
        '"BuyBitArt.com" <info@buybitart.com>',
        "info@buybitart.com",
        "Auction Ended - Admin Notification",
        "Auction Completed",
        "email-template.html",
        {
          message: `
            <p>The auction <b>${auc.title}</b> has ended.</br>
            Winner: <b>${winner.user.name} (${winner.user.email})</b></br>
            Final Price: <b>${auc.currentPrice.toFixed(4)} BTC</b></p>
          `,
        }
      );

      console.log(`Email sent to admin: info@buybitart.com`);
    } catch (error) {
      console.error("Error sending auction emails:", error);
    }
  }

  async sendOrderEmails(order, body, email, type) {
    try {
      const notificationSettings = await getMainSettings();
      const emailSettings = notificationSettings[0]?.emailNotifications || {};

      if (!emailSettings?.categories[0]?.checked) return;

      await this.sendEmail(
        '"BuyBitArt.com" <info@buybitart.com>',
        "info@buybitart.com",
        "🎉 New Order - Admin Notification",
        "New Order from website",
        "email-template.html",
        {
          message: `
            <p>Congratulations! You recived a new order${
              type === "auction" ? " (Auction)" : ""
            }.</br>
            <b>ItemsPurchased:</b></br>
            ${order.items
              .map((item) => `■ ${item.title} x${item.quantity}`)
              .join("</br>")}</p>

              <p>
                <b>Total Price:</b> ${order.totalPrice.toFixed(4)} BTC</br>
                <b>Order ID:</b> ${order.orderId}</br>
                <b>Status:</b> ${order.status}</br>
                <b>Payment Processor:</b> Stripe
              </p>

              <p>
                <b>Shipping Address:</b><br>
                ${body.country}, ${body.city}, ${body.street}, ${body.zip}
              </p>

              <p>
                <b>Buyer Details:</b><br>
                <b>Full Name:</b> ${body.firstname} ${body.lastname}<br>
                <b>Email:</b> ${email}<br>
                <b>Phone:</b> ${body.phone}
              </p>

              ${body.notes ? `<p><b>Notes:</b><br> ${body.notes}</p>` : ""}
          `,
        }
      );

      console.log(`Email sent to admin: info@buybitart.com`);
    } catch (error) {
      console.error("Error sending auction emails:", error);
    }
  }

  async sendBidEmails(auction, bid, user, auctionTimeLeft) {
    try {
      const notificationSettings = await getMainSettings();
      const emailSettings = notificationSettings[0]?.emailNotifications || {};

      if (!emailSettings?.categories[1]?.checked) return;

      await this.sendEmail(
        '"BuyBitArt.com" <info@buybitart.com>',
        "info@buybitart.com",
        "⚡️ New Bid - Admin Notification",
        "New Bid from website",
        "email-template.html",
        {
          message: `
            <p>A new auction bid has arrived!</br>
            <b>Auction: </b> ${auction.title}</p>

              <p>
                <b>Current price:</b> ${auction.currentPrice.toFixed(
                  4
                )} BTC</br>
                <b>Auction ID:</b> ${auction._id}</br>
                <b>Total bids:</b> ${auction.bids.length}</br>
                <b>Bid:</b> ${bid.amount.toFixed(4)} BTC
              </p>

              <p>
                <b>Bidder Details:</b><br>
                <b>Nickname:</b> ${bid.user.name}<br>
                <b>Email:</b> ${user.email}<br>
                <b>User ID:</b> ${user._id}
              </p>

              <p><b>⏳ Auction ends in ${auctionTimeLeft}</b></p>
          `,
        }
      );
    } catch (error) {
      console.error("Error sending auction emails:", error);
    }
  }

  async sendTelegramNotification(message, index) {
    try {
      const notificationSettings = await getMainSettings();
      const telegramEnabled =
        notificationSettings[0]?.telegramNotifications?.categories[index]
          ?.checked;

      if (!telegramEnabled) return;

      const telegramChatId = notificationSettings[0]?.telegramChatId;

      await notificationService.sendTelegram(message, telegramChatId);
    } catch (e) {
      console.error("Error sending tg notification:", error);
    }
  }

  async sendContactForm(name, email, message) {
    try {
      await this.sendEmail(
        '"BuyBitArt Contact Form" <info@buybitart.com>',
        "info@buybitart.com",
        `Message from ${name} - Contact Form`,
        "New message from contact form",
        "email-template.html",
        {
          message: `<p>${message}</p> <p><b>From: </b> ${name} (${email})</p>`
        }
      );
    } catch (error) {
      console.error("Error sending auction emails:", error);
    }
  }

  async sendEmail(from, to, subject, title, templateName, replacements) {
    const template = this.loadTemplate(templateName);
    if (!template) return;

    const htmlToSend = template(replacements);
    await mailService.sendMail(
      from,
      to,
      subject,
      title,
      htmlToSend
    );
  }

  loadTemplate(templateName) {
    const templatePath = path.join(__dirname, `../uploads/${templateName}`);
    if (!fs.existsSync(templatePath)) {
      console.error(`Email template not found: ${templatePath}`);
      return null;
    }
    return handlebars.compile(fs.readFileSync(templatePath, "utf-8"));
  }
}

module.exports = new NotificationController();
