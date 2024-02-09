import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {type: String, required: true},
  zipCode: {type: Number, required: true},
  city: {type: String, required: true},
  country: {type: String,required: true},
  phone: {type: String,required: true},
  isAdmin: {type: Boolean, default: false},
}, { timestamps: true });
const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User