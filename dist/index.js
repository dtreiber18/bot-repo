"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3978;
// Set up CORS with explicit OPTIONS method handling
app.use((0, cors_1.default)({
    origin: 'http://localhost:4200', // Only allow requests from your Angular app
    methods: ['GET', 'POST', 'OPTIONS'], // Ensure OPTIONS is included
    allowedHeaders: ['Content-Type'], // Allow necessary headers
    credentials: true // Allow cookies if needed
}));
// Use body-parser to parse JSON request bodies
app.use(body_parser_1.default.json());
// Ensure the server can respond to preflight OPTIONS requests
app.options('*', (0, cors_1.default)());
// Define the endpoint to handle bot messages
app.post('/api/messages', (req, res) => {
    const userMessage = req.body.text || req.body.message;
    res.json({ reply: `Echo: ${userMessage}` });
});
app.listen(PORT, () => {
    console.log(`Bot server running on http://localhost:${PORT}`);
});
