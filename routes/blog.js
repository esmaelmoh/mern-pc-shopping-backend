const Blog = require('../models/Blog')
const router = require('express').Router()

router.post('/',async(req,res)=>{
    try {
        const newBlog = new Blog({
          title: req.body.title,
          desc: req.body.desc,
        });
    
        const blog = await newBlog.save();
        res.status(200).json(blog);
      } catch (err) {
        res.status(500).json(err);
      }

})
router.delete('/:id',async(req,res)=>{
  try {
      const blog = await Blog.findById( req.params.id)

      await blog.delete()
      res.status(200).json('');
    } catch (err) {
      res.status(500).json(err);
    }

})
router.put('/:id',async(req,res)=>{
  try {
      const blogUpdated = await Blog.findByIdAndUpdate( req.params.id,{
        $set:req.body
      },
      {new:true}
      )
      res.status(200).json(blogUpdated)
    } catch (err) {
      res.status(500).json(err);
    }

})
router.get('/:id',async(req,res)=>{
  try {
      const blog = await Blog.findById(req.params.id)
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json(err);
    }

})
router.get('/',async(req,res)=>{
  try {
      const blogs = await Blog.find({}, { sort: 'created_at' })
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json(err);
    }

})
module.exports= router
