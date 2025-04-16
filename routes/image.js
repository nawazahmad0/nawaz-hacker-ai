// Image response logic
const express = require('express');
const router = express.Router();

router.post('/image', (req, res) => {
  const { imageType } = req.body;
  let reply = 'Hmm... nice image!';
  if (imageType === 'hot') reply = 'Oye oye oye... kya lag rahe ho!';
  else if (imageType === 'meme') reply = 'Hahahaha! Ye toh OP meme hai bhai!';
  else if (imageType === 'cute') reply = 'Awww... cuteness overload!';
  res.json({ reply });
});

module.exports = router;