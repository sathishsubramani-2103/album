import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { HomeScreen } from './HomeScreen';
import * as api from '../services/fetch-albums';
import * as cache from '../storage/cache';
import NetInfo from '@react-native-community/netinfo';

const mockNavigation = { navigate: jest.fn() };

const mockAlbums = [
  {
    collectionId: 1,
    collectionName: 'Test Album',
    artworkUrl100: 'http://example.com/image.jpg',
  },
];

// Mock API and cache functions
jest.spyOn(api, 'fetchAlbums').mockResolvedValue(mockAlbums);
jest.spyOn(cache, 'saveAlbumsToCache').mockResolvedValue();
jest.spyOn(cache, 'getCachedAlbums').mockResolvedValue(mockAlbums);

// Mock NetInfo
jest.mock('@react-native-community/netinfo', () => ({
  fetch: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders album list from API when online', async () => {
    // Simulate online status
    NetInfo.fetch.mockResolvedValue({
      isConnected: true,
      isInternetReachable: true,
    });

    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    await waitFor(() => expect(getByText('Test Album')).toBeTruthy());

    // API should be called
    expect(api.fetchAlbums).toHaveBeenCalled();
    expect(cache.getCachedAlbums).not.toHaveBeenCalled();
  });

  it('renders album list from cache when offline', async () => {
    // Simulate offline status
    NetInfo.fetch.mockResolvedValue({
      isConnected: false,
      isInternetReachable: false,
    });

    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    await waitFor(() => expect(getByText('Test Album')).toBeTruthy());

    // API should not be called
    expect(api.fetchAlbums).not.toHaveBeenCalled();
    expect(cache.getCachedAlbums).toHaveBeenCalled();
  });

  it('navigates to Details screen on album press', async () => {
    NetInfo.fetch.mockResolvedValue({
      isConnected: true,
      isInternetReachable: true,
    });

    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    await waitFor(() => getByText('Test Album'));

    fireEvent.press(getByText('Test Album'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Details', { album: mockAlbums[0] });
  });
});
