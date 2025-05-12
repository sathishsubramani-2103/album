import AsyncStorage from '@react-native-async-storage/async-storage';
import { saveAlbumsToCache, getCachedAlbums } from './cache';

const mockAlbums = [{ collectionId: 1, collectionName: 'Test Album' }];

describe('cache', () => {
  beforeEach(() => AsyncStorage.clear());

  it('saves albums to AsyncStorage', async () => {
    await saveAlbumsToCache(mockAlbums);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith('cached_albums', JSON.stringify(mockAlbums));
  });

  it('retrieves albums from AsyncStorage', async () => {
    await AsyncStorage.setItem('cached_albums', JSON.stringify(mockAlbums));
    const result = await getCachedAlbums();
    expect(result).toEqual(mockAlbums);
  });
});
