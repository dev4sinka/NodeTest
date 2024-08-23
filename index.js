const express = require('express');
const app = express();

// Middleware to log request info
app.use((req, res, next) => {
    console.log('Request Info:');
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
    console.log(`Body: ${JSON.stringify(req.body)}`);

    // Return the same info in the response
    res.json({
        method: req.method,
        url: req.url,
        headers: req.headers,
        body: req.body
    });
});

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
