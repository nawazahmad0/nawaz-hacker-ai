// Chat route connected to GPT4Free
const express = require('express');
const router = express.Router();

router.post('/chat', (req, res) => {
  const { message } = req.body;
  // Dummy AI response
  res.json({ reply: `Baby AI (by Nawaz Boss) says: ${message}` });
});

module.exports = router;
