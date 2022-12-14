import mongoose from "mongoose";

const userSchema = mongoose.Schema({
      username: { type: String, required: true, unique: true },
      email: { type: String, required: true, unique: true  },
      password: { type: String, required: true },
      accountType: {
            type: String,
            default: "client"
      },
      admin: {
            type: Boolean,
            default: false
      },
      createdAt:{
            type: Date,
            default: new Date()
      }
})

export default mongoose.model("User", userSchema);