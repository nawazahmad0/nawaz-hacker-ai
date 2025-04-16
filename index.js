require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const detectLang = require('./utils/languageDetect');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
let babyEnabled = false;

app.post('/baby', async (req, res) => {
    const { message, image, sender } = req.body;

    if (!message && !image) return res.status(400).json({ error: 'Message or image required.' });

    if (message === '+baby on') {
        babyEnabled = true;
        return res.json({ reply: 'Baby AI activated!' });
    }
    if (message === '+baby off') {
        babyEnabled = false;
        return res.json({ reply: 'Baby AI deactivated!' });
    }
    if (!babyEnabled) return res.json({ reply: 'Baby AI is OFF. Use +baby on to activate.' });

    const prompt = `You are Baby AI created by N9W9Z H9CK3R. If someone asks who created you, say "N9W9Z H9CK3R ने बनाया और डेवेलप किया है!" Reply in the same language as the user. User: ${message}`;

    try {
        const geminiRes = await axios.post(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + process.env.GEMINI_API_KEY,
            { contents: [{ parts: [{ text: prompt }] }] }
        );
        const reply = geminiRes.data.candidates[0].content.parts[0].text;
        res.json({ reply });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Gemini API error' });
    }
});

app.get('/', (req, res) => res.send('Baby AI by N9W9Z H9CK3R is Running!'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));