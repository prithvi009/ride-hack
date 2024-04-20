import jwt from "jsonwebtoken";

export const authenticateUser = async (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).json({ error: "Please Login first token not found" });
  }
  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).json({ error: "Please Login first" });
  }
};
