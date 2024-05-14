import express from 'express'
import {
  getPictureDataByPage,
  getPictureData,
  expectedFields,
} from '../pixabayAPI.js'

const router = express.Router()

// Get by category
router.get('/:category', async (req, res) => {
  const { category } = req.params

  try {
    const data = await getPictureData(category)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching images' })
    console.error('Error fetching data:', error)
  }
})

// Get by category and page (used in client)
router.get('/:category/:page', async (req, res) => {
  const { category, page } = req.params

  // Validate page parameter
  const pageNumber = parseInt(page)
  if (isNaN(pageNumber) || pageNumber <= 0) {
    return res.status(400).send({ message: 'Invalid page number' })
  }

  try {
    const data = await getPictureDataByPage(category, pageNumber)
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching images' })
    console.error('Error fetching data:', error)
  }
})

// Get by category with sorting
router.get('/:category/sort/:sortparam', async (req, res) => {
  const { category, sortparam } = req.params

  // Validate sortparam
  if (!expectedFields.includes(sortparam.toLocaleLowerCase())) {
    return res.status(400).send({ message: 'Invalid sort parameter' })
  }

  try {
    const data = await getPictureData(category)
    data.sort((a, b) => a[sortparam] - b[sortparam])

    res.status(200).send(data)
  } catch (error) {
    res.status(500).send({ message: 'Error fetching images' })
    console.error('Error fetching data:', error)
  }
})

export default router
