const mongoose=require("mongoose");

const orderSchema = new mongoose.Schema(
    {
        Name: {
            type:String,
            required:[true, "name is required"]
        },
        Address:{
            type:String,
            required:[true, "Address is required"]
        },
        Food:{
            type:String,
            required:[true, "Food is required"],
            enum:["Rice", "Beans"],
        },
        Number_of_plates:{
            type:Number,
            require:[true, "Number of plates required"],
            min: 1,
        },
    },
    {
        timestamps:true,
    }
)

const order = mongoose.model("order", orderSchema);

module.exports=order;