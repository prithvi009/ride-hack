import User from "../Model/User.js";

export const addToCart = async (req, res) => {
  const user = await User.find({ _id: req.user.id });
  let itemid = Number(req.body.id);
  user[0].cartdata[itemid] += 1;
  console.log(user);
  await UserLogin.findOneAndUpdate(
    { _id: req.user.id },
    { cartdata: user[0].cartdata },
  );
  res.status(200).json({ msg: "item  added to cart" });
};

export const deleteFromCart = async (req, res) => {
  const user = await User.find({ _id: req.user.id });
  let itemid = Number(req.body.id);
  user[0].cartdata[itemid] -= 1;
  console.log(user);
  await UserLogin.findOneAndUpdate(
    { _id: req.user.id },
    { cartdata: user[0].cartdata },
  );
  res.status(200).json({ msg: "item  deleted fromcart" });
};
