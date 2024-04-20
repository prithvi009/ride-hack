import express from "express";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";

import AuthRoutes from "./routes/auth_routes.js";
import ProductRoutes from "./routes/product_routes.js";
import CartRoutes from "./routes/cart_routes.js";
import LiveStreamRoutes from "./routes/live_stream_routes.js";
import { connectDB } from "./ConnectDb/connect.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Upload/images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("./Upload/images"));

app.use("/", AuthRoutes);
app.use("/", ProductRoutes);
app.use("/", CartRoutes);
app.use("/", LiveStreamRoutes);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
