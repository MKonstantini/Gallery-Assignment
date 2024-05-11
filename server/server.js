// Express app setup
import express from 'express';
import axios from 'axios';
const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY;

const app = express();
app.listen(port, () => console.log(`Server running on: http://localhost:${port}`));

// Endpoints
app.get('/pixabay/:category/:page', (req, res) => {
    const page = req.params.page;
    const category = req.params.category;
    const encodedCategory = encodeURIComponent(category)
    
    const url = `https://pixabay.com/api/?key=${apiKey}}&q=${encodedCategory}&page=${page}&per_page=9`;

    axios.get(url)
        .then(response => {
            res.status(200).send(response.data);
        })
        .catch(error => {
            const msg = 'Error fetching data'
            console.error(msg, error);
            res.status(500).send({message: msg});
        })
});


