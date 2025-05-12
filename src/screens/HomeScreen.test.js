import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import {HomeScreen} from './HomeScreen';
import * as api from '../services/fetch-albums';
import * as cache from '../storage/cache';

const mockNavigation = { navigate: jest.fn() };

const mockAlbums = [
  {
    collectionId: 1,
    collectionName: 'Test Album',
    artworkUrl100: 'http://example.com/image.jpg',
  },
];

jest.spyOn(api, 'fetchAlbums').mockResolvedValue(mockAlbums);
jest.spyOn(cache, 'saveAlbumsToCache').mockResolvedValue();
jest.spyOn(cache, 'getCachedAlbums').mockResolvedValue(mockAlbums);

describe('HomeScreen', () => {
  it('renders album list from API', async () => {
    const { getByText, getByRole } = render(<HomeScreen navigation={mockNavigation} />);
    await waitFor(() => expect(getByText('Test Album')).toBeTruthy());
  });

  it('navigates to Details screen on album press', async () => {
    const { getByText } = render(<HomeScreen navigation={mockNavigation} />);
    await waitFor(() => getByText('Test Album'));
    fireEvent.press(getByText('Test Album'));
    expect(mockNavigation.navigate).toHaveBeenCalledWith('Details', { album: mockAlbums[0] });
  });
});
