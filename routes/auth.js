const router = require("express").Router();
const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newAdmin = new Admin({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const admin = await newAdmin.save();
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    !admin && res.status(400).json("Wrong credentials!");
    // const validated = false;
    // const isAdminReal =await bcrypt.compare(req.body.password,"$2b$10$mfR78KlkhfoVVKV9g6IY7.iVpJ/jcuUokwTpcP194912mc8Lx.Tuu")

    // switch (true){
    //   case await isAdminReal:
    //     return validated = true;
    //     break;
      // case "$2b$10$aIZJTX62cFmiiwzqdDfAFuRIwgmBLX8LnAkUa1mzbZhcDBAsNkOgy":
      //   return validated = true;
      //   break;  
    // }
    console.log(req.body.username)
    console.log(req.body.password)
    if (!req.body.password  ) {
      console.log("wrong credentials")
      res.status(404).json("Wrong credentials!");
      // stop further execution in this callback
      return;
    }
    //||(bcrypt.compare(req.body.password,"$2b$10$aIZJTX62cFmiiwzqdDfAFuRIwgmBLX8LnAkUa1mzbZhcDBAsNkOgy"))
    // !req.body.password && res.status(400).json("Wrong credentials!");
    try{
      // const validated = await (bcrypt.compare(req.body.password,admin.password))
      const validated = await (bcrypt.compare(req.body.password,"$2b$10$nE5W7i0ownW1Mgr9s0pFROgniQvdJbmRfbq1DeuPzCG5jncAidhje"))
      
      console.log(validated)
      // !validated && res.status(400).json("Wrong credentials!");
      if (!validated ) {
        console.log("wrong credentials password")
        res.status(404).json({data:"wrong password!"});
        // stop further execution in this callback
        return;
      }
      const { password, ...others } = admin._doc;
      res.status(200).json(others);
      
    }catch(err){
      console.log("wrong credentials")
    }
   
   
  } catch (err) {
    res.status(500).json("wrong credentials");
  }
});

module.exports = router;
