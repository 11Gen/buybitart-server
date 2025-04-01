const router = require("express").Router();
const PaymentController = require("../controllers/payment.controller");

router.post("/create-invoice-btc", PaymentController.createInvoiceBTC);
router.post("/webhook", PaymentController.webhookStatus);

router.post("/create-payment-intent", PaymentController.createPaymentIntent);
router.post("/confirm-payment", PaymentController.confirmPayment);
router.post("/confirm-payment-auction", PaymentController.confirmPaymentAuction);

router.get("/status/:orderId", PaymentController.checkStatus);

module.exports = router;
