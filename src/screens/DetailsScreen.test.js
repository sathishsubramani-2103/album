import React from 'react';
import { render } from '@testing-library/react-native';
import {DetailsScreen} from './DetailsScreen';

const mockAlbum = {
  collectionName: 'Test Album',
  artistName: 'Test Artist',
  artworkUrl100: 'http://example.com/image.jpg',
  releaseDate: '2020-01-01T00:00:00Z',
  trackCount: 10,
};

describe('DetailsScreen', () => {
  it('renders album details', () => {
    const { getByText } = render(<DetailsScreen route={{ params: { album: mockAlbum } }} />);
    expect(getByText('Test Album')).toBeTruthy();
    expect(getByText('Test Artist')).toBeTruthy();
    expect(getByText('Release Date: Wed Jan 01 2020')).toBeTruthy();
    expect(getByText('Track Count: 10')).toBeTruthy();
  });
});
