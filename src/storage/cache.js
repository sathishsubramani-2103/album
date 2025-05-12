import AsyncStorage from '@react-native-async-storage/async-storage';

const ALBUMS_KEY = 'cached_albums';

export const saveAlbumsToCache = async (albums) => {
  try {
    await AsyncStorage.setItem(ALBUMS_KEY, JSON.stringify(albums));
  } catch (error) {
    console.error('Error saving albums to cache:', error);
  }
};

export const getCachedAlbums = async () => {
  try {
    const data = await AsyncStorage.getItem(ALBUMS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error reading albums from cache:', error);
    return [];
  }
};