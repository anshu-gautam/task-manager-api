const express = require("express");
const cors = require("cors");

require("./db/mongoose");

const User = require("./models/user");
const Task = require("./models/task");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
// added for CORS
app.use(cors());
app.options("*", cors());

const port = process.env.PORT || 3000;

const multer = require("multer");

const upload = multer({
  dest: "images",
  limits: {
    fileSize: 1000000,
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error("please upload word document!"));
    }
    cb(undefined, true);
  },
});
app.post("/upload", upload.single("upload"), (req, res) => {
  res.send("uploaded");
});

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("server is running on port " + port);
});

// const jwt = require("jsonwebtoken");
// const token = jwt.sign({ _id: "qwer321" }, "thisisnewsecretcode");

// console.log(token);

// const data = jwt.verify(token, "thisisnewsecretcode");

// console.log(data);
