import { fetchAlbums } from './fetch-albums';
import axios from 'axios';

jest.mock('axios');

describe('fetchAlbums', () => {
  it('fetches albums from API', async () => {
    const mockData = { results: [{ collectionId: 1, collectionName: 'Mock Album' }] };
    axios.get.mockResolvedValue({ data: mockData });

    const result = await fetchAlbums();
    expect(axios.get).toHaveBeenCalledWith(
      'https://itunes.apple.com/search?term=jack+johnson&entity=album'
    );
    expect(result).toEqual(mockData.results);
  });
});
