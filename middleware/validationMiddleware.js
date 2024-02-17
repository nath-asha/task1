const validationMiddleware = (req, res, next) => {
  console.log('Validation Middleware');

  const authorName = req.body.authorName;
  if (!authorName || typeof authorName !== 'string') {

    return res.status(400).send('Invalid authorName');
  }

  
  const blogTitle = req.body.title;
  if (!blogTitle || typeof blogTitle !== 'string') {
  
    return res.status(400).send('Invalid blog title');
  }


  const blogContent = req.body.content;
  if (!blogContent || typeof blogContent !== 'string') {
  
    return res.status(400).send('Invalid blog content');
  }


  next();
};

module.exports = validationMiddleware;
