const express = require('express');
const router = express.Router();
const blog = require('../Models/Schemas/blog');

router.get('/tech', async (req, res) => {
    try {
        const blogs = await blog.find({ category:"Tech" });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

router.get('/programming', async (req, res) => {
    try {
        const blogs = await blog.find({ category: "Programing" });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

router.get('/ai', async (req, res) => {
    try {
        const blogs = await blog.find({ category: "AI" });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

router.get('/machinelearning', async (req, res) => {
    try {
        const blogs = await blog.find({ category: "Maching Learning" });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

router.get('/blockchain', async (req, res) => {
    try {
        const blogs = await blog.find({ category: "Blockchain" });
        res.status(200).json(blogs);
    } catch (err) {
        res.status(500).json({
            error : err.message
        });
    }
})

module.exports = router;