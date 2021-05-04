import mongoose from "mongoose"

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    orderItems: [
        {
            name: { type: String, required: true},
            qty: { type: Number, required: true},
            image: { type: String, required: true},
            price: { type: Number, required: true},
            product: { 
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: "Product"
            }
        }
    ],
    shippingAddress: {
        address: { type: String, required: true},
        city: { type: String, required: true},
        postalCode: { type: String, required: true},
        country: { type: String, required: true}
    },
    paymentMethod: {
        type: String,
        required: true,
    }
},{
    timestamp: true
})

const User = mongoose.model("User", userSchema)

export default User