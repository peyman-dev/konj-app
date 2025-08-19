import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    default: `کاربر ${crypto.randomUUID().slice(0, 6)}`,
  },
  phoneNumber: {
    type: String,
    required: true,
    minLength: 11,
    maxLength: 11,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: false,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  myLibrary: {
    type: mongoose.Types.ObjectId,
    ref: "Book",
    required: false,
    default: [],
  },
  //   wishList: {
  //     type: [String],

  //   }
});

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
