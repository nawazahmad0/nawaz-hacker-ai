
# Baby AI API (Gemini-Powered)

### Features
- Multilingual Smart Replies (Hindi, English, Urdu)
- +baby on / +baby off toggle
- Auto language detection
- Gemini API based response

### Setup Guide (GitHub + Render)
1. Upload files to GitHub (create new repo)
2. Add `.env` file with your Gemini API key
3. Go to [https://render.com](https://render.com)
4. Click "New Web Service" → Connect your GitHub repo
5. Use these settings:
   - Environment: Node
   - Start command: `npm start`
   - Add environment variable: `GEMINI_API_KEY`

API is ready at: `https://your-app-name.onrender.com/baby`
Send POST request with `{ "message": "Hello", "sender": "User" }`