const express = require("express");
const app = express();
const cors = require("cors");
const multer = require("multer");

require("dotenv").config();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

//IMAGE STORAGE ENGINE
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

//if no url satisfied
// app.use(notfound);

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`server is listening at ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
