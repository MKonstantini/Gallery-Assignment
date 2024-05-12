import express from 'express';
import axios from 'axios';
const router = express.Router();
const apiKey = process.env.API_KEY

// Get by category and page
router.get('/:category/:page', async (req, res) => {
    const page = req.params.page;
    const category = req.params.category;
    const encodedCategory = encodeURIComponent(category);

    const url = `https://pixabay.com/api/?key=${apiKey}&q=${encodedCategory}&page=${page}&per_page=9`;

    try {
        const response = await axios.get(url);
        res.status(200).send(response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ message: 'Error fetching images' });
    }
});

export default router;
