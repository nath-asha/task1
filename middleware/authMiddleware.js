const authMiddleware = (req, res, next) => {
  console.log('Auth Middleware');
  

  const authorToken = req.headers.authorization;
  

  if (authorToken === '12345') {
  
    console.log('Author is authenticated!');
    
    next();
  } else {
  
    console.log('Author is not authenticated!');
    
    res.status(401).send('Unauthorized');
  }
};

module.exports = authMiddleware;
