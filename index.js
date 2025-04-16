const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Baby AI is running – by Nawaz Boss!");
});

// Add your /chat route here if not added already
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  // Respond from AI (placeholder)
  res.json({
    reply: `You said: ${userMessage}`,
  });
});

app.listen(PORT, () => {
  console.log(`Baby AI started by Nawaz Boss on port ${PORT}`);
});