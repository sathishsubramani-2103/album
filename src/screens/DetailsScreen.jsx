import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const DetailsScreen = ({ route }) => {
  const { album } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: album.artworkUrl100 }} style={styles.image} />
      <Text style={styles.title}>{album.collectionName}</Text>
      <Text>{album.artistName}</Text>
      <Text>Release Date: {new Date(album.releaseDate).toDateString()}</Text>
      <Text>Track Count: {album.trackCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', justifyContent: 'center' },
  image: { width: 350, height: 350 },
  title: { fontSize: 20, fontWeght: 'bold', marginVertical: 10 }
});

