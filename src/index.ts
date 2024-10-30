import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3978;

// Set up CORS with explicit OPTIONS method handling
app.use(cors({
    origin: 'http://localhost:4200',            // Only allow requests from your Angular app
    methods: ['GET', 'POST', 'OPTIONS'],        // Ensure OPTIONS is included
    allowedHeaders: ['Content-Type'],           // Allow necessary headers
    credentials: true                           // Allow cookies if needed
}));

// Use body-parser to parse JSON request bodies
app.use(bodyParser.json());

// Ensure the server can respond to preflight OPTIONS requests
app.options('*', cors());

// Define the endpoint to handle bot messages
app.post('/api/messages', (req, res) => {
    const userMessage = req.body.text || req.body.message;
    res.json({ reply: `Echo: ${userMessage}` });
});

app.listen(PORT, () => {
    console.log(`Bot server running on http://localhost:${PORT}`);
});
