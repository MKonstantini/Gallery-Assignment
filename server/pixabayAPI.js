import axios from 'axios';

const apiKey = process.env.API_KEY;
const baseURL = `https://pixabay.com/api/?key=${apiKey}`;
const picturesPerPage = 9;

// Fetch picture data
export const getPictureData = async (category) => {
  const response = await axios.get(baseURL, { params: { q: category } });
  return response.data.hits;
};

// Fetch picture data by page
export const getPictureDataByPage = async (category, page) => {
  const response = await axios.get(baseURL, {
    params: { q: category, page, per_page: picturesPerPage },
  });
  return response.data.hits;
};

// Expected fields to return from an API call - used in sort route
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
];
