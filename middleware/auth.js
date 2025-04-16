// Middleware to check API Key
module.exports = (req, res, next) => {
  if (req.headers['api-key'] !== 'nawaz-hacker') {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  next();
};
