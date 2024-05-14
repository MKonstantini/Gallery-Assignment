import axios from 'axios'

const apiKey = process.env.API_KEY
const baseURL = `https://pixabay.com/api/?key=${apiKey}`

// Fetch picture data
export const getPictureData = async (category) => {
  const url = `${baseURL}&q=${category}`

  const response = await axios.get(url)
  return response.data.hits
}

// Fetch picture data by page
export const getPictureDataByPage = async (category, page) => {
  const picturesPerPage = 9
  const url =
    baseURL + `&q=${category}&page=${page}&per_page=${picturesPerPage}`

  const response = await axios.get(url)
  return response.data.hits
}

// Exprected fields to return from an API call - used in sort route
export const expectedFields = [
  'id',
  'pageURL',
  'type',
  'tags',
  'previewURL',
  'previewWidth',
  'previewHeight',
  'webformatURL',
  'webformatWidth',
  'webformatHeight',
  'largeImageURL',
  'imageWidth',
  'imageHeight',
  'imageSize',
  'views',
  'downloads',
  'collections',
  'likes',
  'comments',
  'user_id',
  'user',
  'userImageURL',
]
