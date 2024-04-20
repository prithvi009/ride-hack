import mongoose from "mongoose";

const UserInLiveSchema = new mongoose.Schema({
  livename: {
    type: String,
    require: true,
  },
  isinsidelive: {
    type: Boolean,
    require: true,
    default: false,
  },
  room: {
    type: Number,
    require: true,
  },
});

const UserInLive = mongoose.model("UserInLive", UserInLiveSchema);

export default UserInLive;
