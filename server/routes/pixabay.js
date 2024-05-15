import express from 'express';
import {
  getPictureDataByPage,
  getPictureData,
  expectedFields,
} from '../pixabayAPI.js';

const router = express.Router();

// Get by category with extension for page query
router.get('/:category', async (req, res) => {
  const { category } = req.params;
  const { page } = req.query;

  if (page) {
    // Check if page query parameter exists
    const pageNumber = parseInt(page);
    if (isNaN(pageNumber) || pageNumber <= 0) {
      return res.status(400).send({ message: 'Invalid page number' });
    }
    try {
      const data = await getPictureDataByPage(category, pageNumber);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching images' });
      console.error('Error fetching data:', error);
    }
  } else {
    try {
      const data = await getPictureData(category);
      res.status(200).send(data);
    } catch (error) {
      res.status(500).send({ message: 'Error fetching images' });
      console.error('Error fetching data:', error);
    }
  }
});

// Get with sorting
router.get('/sort/:category', async (req, res) => {
  const { category } = req.params;
  const { sortparam } = req.query;

  // Validate request
  if (
    !sortparam ||
    !expectedFields
      .map((field) => field.toLowerCase())
      .includes(sortparam.toLowerCase())
  ) {
    return res
      .status(400)
      .send({ message: 'Please enter a valid sort parameter' });
  }

  try {
    const data = await getPictureData(category);
    data.sort((a, b) => a[sortparam] - b[sortparam]);

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send({ message: 'Error fetching images' });
    console.error('Error fetching data:', error);
  }
});

export default router;
