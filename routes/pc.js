const mongoose = require('mongoose')
const Pc = require('../models/PC')
const router = require('express').Router()



router.post("/pc",async(req,res)=>{
    try{
        const newPc = new Pc(
            // pcModel:req.body.pcModel,
            // pcImage:req.body.pcImage,
            // price:req.body.price,
            // productCode:req.body.productCode,
            // quantity:req.body.quantity,
            // storage:req.body.storage,
            // ram:req.body.ram,
            req.body
        )
        const pc = await newPc.save()
        res.status(200).json(pc)

    }catch(err){
        res.status(500).json(err)
    }
})
//GET POST
router.get("/:id", async (req, res) => {
    try {
      const pc = await Pc.findById(req.params.id);
      // console.log(pc)
      res.status(200).json(pc);
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.put("/:id", async (req, res) => {
    try {
      const pc = await Pc.findByIdAndUpdate(req.params.id,{
        $set:req.body
      });
      // console.log(pc)
      res.status(200).json(pc);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const pc = await Pc.findById(req.params.id);
      await pc.delete()
      res.status(200).json('pc deleted succesfully');
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  router.get("/", async (req, res) => {
    console.log(req.query.core)
    console.log(req.query.condition)
    const core = req.query.core
    const condition = req.query.condition
    try {
       let posts;
       if(core){
        posts = await Pc.find({core})
       }else if(condition){
        posts = await Pc.find({condition:condition})
       }
       else{
        posts = await Pc.find()
       }
        // console.log(posts)
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
module.exports = router