import axios from 'axios'
const apiKey = process.env.API_KEY
const baseURL = `https://pixabay.com/api/?key=${apiKey}`

export const getPictureData = async (category, page) => {
  const url = baseURL + `&q=${category}&page=${page}&per_page=9`

  try {
    const response = await axios.get(url)
    return response.data.hits
  } catch (error) {
    console.error('Error fetching data:', error)
    res.status(500).send({ message: 'Error fetching images' })
  }
}
