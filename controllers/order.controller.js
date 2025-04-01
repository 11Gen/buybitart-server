const { order } = require("../models/order");

class OrderController {
  async getOrders(req, res, next) {
    try {
      const orders = await order
        .find({})
        .populate({
          path: "items.product",
          select: "title price images createdAt delivery hash",
        })
        .populate({
          path: "payer",
          select: "_id email name",
        })
        .sort({ createdAt: -1 })
        .lean();
  
      const transformedOrders = orders.map((order) => ({
        ...order,
        payer: {
          _id: order.payer._id,
          email: order.payer.email,
          name: order.payer.name || null,
        },
        items: order.items.map((item) => {
          const { product, productType, ...restItem } = item;
          return {
            ...restItem,
            productType,
            ...product,
            images: product?.images?.length > 0 ? [product.images[0]] : [],
          };
        }),
      }));
  
      res.send(transformedOrders);
    } catch (e) {
      console.error(e);
      res.status(400).send("Error occurred");
    }
  }
  
}

module.exports = new OrderController();
