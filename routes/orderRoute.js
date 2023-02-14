
const {createOrder, availableOrders, totalOrder, approveDeleteOrder} = require("../controllers/orderController");

const router = require("express").Router();

router.post("/createorder", createOrder);
router.get("/allorders", availableOrders);
router.get("/totalorders", totalOrder);
router.delete("/deleteorders/:id", approveDeleteOrder);


module.exports = router;
