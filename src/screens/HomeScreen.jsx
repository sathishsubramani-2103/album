import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { fetchAlbums } from '../services/fetch-albums';
import { saveAlbumsToCache, getCachedAlbums } from '../storage/cache';
import NetInfo from '@react-native-community/netinfo';

export const HomeScreen = ({ navigation }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadAlbums = async () => {
    setLoading(true);
    const netInfo = await NetInfo.fetch();
    const isOnline = netInfo.isConnected && netInfo.isInternetReachable;

    try {
      if (isOnline) {
        const data = await fetchAlbums();
        setAlbums(data);
        await saveAlbumsToCache(data);
      } else {
        const cached = await getCachedAlbums();
        setAlbums(cached);
      }
    } catch (error) {
      const cached = await getCachedAlbums();
      setAlbums(cached);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlbums();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { album: item })}>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Image source={{ uri: item.artworkUrl100 }} style={{ width: 50, height: 50 }} />
        <Text style={{ marginLeft: 10 }}>{item.collectionName}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View>
      <FlatList
        data={albums}
        keyExtractor={(item) => item.collectionId.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
