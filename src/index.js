"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var app = (0, express_1.default)();
var PORT = 3978;
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
app.post('/api/messages', function (req, res) {
    var userMessage = req.body.text || req.body.message;
    res.json({ reply: "Echo: ".concat(userMessage) });
});
app.listen(PORT, function () {
    console.log("Bot server running on http://localhost:".concat(PORT));
});
