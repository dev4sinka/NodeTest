const express = require('express');
const app = express();
const port = 3000;

// Middleware to log and return the origin of the request
app.use((req, res, next) => {
    const origin = req.headers.origin || 'unknown';
    console.log(`Request Origin: ${origin}`);
    res.send(`Request Origin: ${origin}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
