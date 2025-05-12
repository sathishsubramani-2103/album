import axios from 'axios';

export const fetchAlbums = async () => {
  const response = await axios.get('https://itunes.apple.com/search?term=jack+johnson&entity=album');
  return response.data.results;
};