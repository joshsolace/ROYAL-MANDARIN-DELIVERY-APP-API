// import the order model
const order = require("../models/orderModels");

exports.createOrder=async(req, res)=>{
    try {
        const {Name, Address, Food, Number_of_plates}=req.body;
        const foodOrder = await order.create({
            Name, Address, Food, Number_of_plates
        })
        return res.status(201).json({
            message:"Order created succesfully",
            foodOrder,
        });
    } catch (error) {
        return res.status(500).json({
            error: error.message
        })
    }
}

exports.availableOrders= async (req, res)=>{
    try {
        const allOrders= await order.find();
        return res.status(200).json({
            allOrders,
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}

exports.totalOrder= async(req, res)=>{
    try {
        const totalAvailableOrder= await order.estimatedDocumentCount();
        return res.status(200).json({
            message: `The total orders are ${totalAvailableOrder}`
        })
    } catch (error) {
        return res.status(500).json({
            error:error.message
        })
    }
}



exports.approveDeleteOrder = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedOrder = await order.findByIdAndDelete(id);
      if (!deletedOrder) {
        return res.status(404).json({
          message: "Order not found",
        });
      }
      return res.status(200).json({
        message: "Order deleted succesfully",
        deletedOrder,
      });
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  };