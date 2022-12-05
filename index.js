const express = require("express")
const mongoose = require("mongoose")
const authRoute = require('./routes/auth')
const blogRoute = require('./routes/blog')
const pcRoute = require('./routes/pc')
const cors = require('cors')
const path = require("path")
const app = express();
const multer = require("multer");
require("dotenv").config()
app.use(cors(
  { origin:["https://mern-pc-shopping.onrender.com/","http://localhost:3000/"]
  }
))
// app.use(cors()) "http://localhost:3000/"

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
//edited
// mongoose
//   .connect('mongodb://127.0.0.1:27017/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     // useCreateIndex: true,
//     // useFindAndModify:true
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));
  mongoose
  .connect("mongodb+srv://esmaelmoh:esmaelmoh0132@cluster0.achszuu.mongodb.net/?retryWrites=true&w=majority", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify:true
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
  app.get('/',(req,res)=>{
    // console.log(req)
    // console.log(req.query.core)
    res.json('server is here')
  })
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  
  const upload = multer({ storage: storage });
  app.post("/backend/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  app.use("/backend/auth", authRoute);
  app.use("/backend/blogs", blogRoute);
  app.use("/backend/pcs", pcRoute);

  app.listen(process.env.PORT || 5000,()=>{
    console.log("server is running")
  })