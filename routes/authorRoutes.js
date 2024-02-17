const express = require('express');
const router = express.Router();

const validationMiddleware = require('../middleware/validationMiddleware');

router.post('/login', validationMiddleware, (req, res) => {
  
  const { authorName, token } = req.body;

  if (!authorName || typeof authorName !== 'string' || !token || typeof token !== 'string') {
    
    return res.status(400).send('Invalid authorName or token');
  }


  if (token !== 'YOUR_HARD_CODED_TOKEN') {

    return res.status(401).send('Unauthorized');
  }

  
  res.send(`Login successful for author: ${authorName}`);
});

router.post('/register', validationMiddleware, (req, res) => {

  const { authorName, token } = req.body;

  
  if (!authorName || typeof authorName !== 'string' || !token || typeof token !== 'string') {
   
    return res.status(400).send('Invalid authorName or token');
  }

  
  if (token !== 'YOUR_HARD_CODED_TOKEN') {
    
    return res.status(401).send('Unauthorized');
  }

  res.send(`Registration successful for author: ${authorName}`);
});

module.exports = router;
