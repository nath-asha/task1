const express = require('express');
const router = express.Router();

const validationMiddleware = require('../middleware/validationMiddleware');

let blogs = [];

router.get('/', (req, res) => {

  res.json(blogs);
});

router.post('/', validationMiddleware, (req, res) => {
  
  const { authorId, title, content } = req.body;

  if (!authorId || typeof authorId !== 'number' || !title || typeof title !== 'string' || !content || typeof content !== 'string') {
   
    return res.status(400).send('Invalid authorId, title, or content');
  }


  blogs.push({ id: blogs.length + 1, authorId, title, content });

  res.json(blogs);
});

router.get('/:authorId', (req, res) => {

  const authorId = parseInt(req.params.authorId);

 
  if (isNaN(authorId)) {
    
    return res.status(400).send('Invalid authorId');
  }

  const authorBlogs = blogs.filter(blog => blog.authorId === authorId);


  res.json(authorBlogs);
});

module.exports = router;
