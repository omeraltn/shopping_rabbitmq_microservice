const ShoppingService = require("../services/shopping-service");

// Diğer servislerden gelen haberleri yakalayıp evente göre gelen evente göre gerekli işlemi yap

module.exports = (app) => {
  app.use("/app-events", async (req, res) => {
    // customerServisndeki fonksiyonları kullanabilmek iin örnek al
    const service = new ShoppingService();

    // isteğin body içerisinde gelen payload verisine eriş
    const { payload } = req.body;

    // diğer servislerden gelen habere göre gerekli fonksiyonları çalıştır
    await service.SubscribeEvents(payload);

    console.log("====== Shopping servisine haber geldi ========");

    // haberi gönderen servise aldığımızı söyle
    res.status(200).json({ message: "Webhook mesajı alındı" });
  });
};
