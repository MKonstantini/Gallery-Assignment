import { getPictureDataByPage, getPictureData } from '../pixabayAPI.js'
import express from 'express'

const router = express.Router()

// Get by category
router.get('/:category', async (req, res) => {
  const { category } = req.params

  try {
    const data = await getPictureData(category)
    res.status(200).send(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send({ message: 'Error fetching images' })
  }
})

// Get by category and page (used in client)
router.get('/:category/:page', async (req, res) => {
  const { category, page } = req.params

  try {
    const data = await getPictureDataByPage(category, page)
    res.status(200).send(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send({ message: 'Error fetching images' })
  }
})

// Get by category with sorting
router.get('/:category/sort/:sortparam', async (req, res) => {
  const { category, sortparam } = req.params
  // Infer 'created' field when attempting sort by 'date'
  if (sortparam == 'date') sortparam = 'created'

  try {
    const data = await getPictureData(category)
    data.sort((a, b) => a[sortparam] - b[sortparam])

    res.status(200).send(data)
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send({ message: 'Error fetching images' })
  }
})

export default router
