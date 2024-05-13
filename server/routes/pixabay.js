import express from 'express';
import axios from 'axios';
const router = express.Router();
const apiKey = process.env.API_KEY;

// Get by category and page - main endpoint
router.get('/:category/:page', async (req, res) => {
    const { page, category } = req.params;

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${category}&page=${page}&per_page=9`;

    try {
        const response = await axios.get(url);
        res.status(200).send(response.data.hits);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({message: 'Error fetching images'});
    }
});

// Get with sorting
router.get('/:category/sort/:sortparam', async (req, res) => {
    const {category, sortParam} = req.params;

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${category}`;

    try {
        const response = await axios.get(url);
        let data = response.data.hits;

        // Sort data by sorting parameter (if exists)
        if (sortParam === 'date') {
            data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (sortParam) {
            data.sort((a, b) => a[sortParam] - b[sortParam]);
        }

        res.status(200).send(data);        
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({message: 'Error fetching images'});
    }
})

export default router;
