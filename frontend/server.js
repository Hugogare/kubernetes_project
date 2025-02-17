const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://backend-service:8000/');
        res.send(`<h1>Frontend App</h1><p>${response.data.message}</p>`);
    } catch (error) {
        res.send('<h1>Error connecting to backend</h1>');
    }
});

app.listen(PORT, () => console.log(`Frontend running on port ${PORT}`));
