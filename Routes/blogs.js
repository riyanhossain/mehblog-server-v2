const express = require('express');
const router = express.Router();
const blog = require('../Models/Schemas/blog');

router.post('/blogs', async () => {
    try {
        const blog = new blog(req.body);
        await blog.save();
        res.status(200).json({
            message: 'Blog added successfully',
        });
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

router.get('/blogs', async (req, res) => {
    try {
        const blogs = await blog.find();
        res.status(200).json(blogs);
        res.end();
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
        res.end();
    }
})

router.delete('/blogs/:id', async (req, res) => {
    try {
        await blog.deleteOne({_id : req.params.id});
        res.status(200).json({
            message: 'Blog deleted successfully',
        });

    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

router.get('/blogs/:id', async (req, res) => {
        try{
            const fblog = await blog.findOne({_id : req.params.id}).exec();
            res.status(200).json(fblog);
        }
        catch(err){
            res.status(500).json({
                error : err.message
            });
        }
        

})

module.exports = router;