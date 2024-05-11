const express = require('express');

const cors = require('cors');

const app = express();
const PORT = 5005;

//enable cors
app.use(cors());
// Define a GET route
app.get('/api/data', (req, res) => {
    // Simulate fetching data from a fake API
    const data = {
        message: 'Hello, world! this is from app.js file in server folder and also from the serve side.',
        timestamp: new Date().toISOString()
    };

    // Send the data as a response
    res.json(data);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
