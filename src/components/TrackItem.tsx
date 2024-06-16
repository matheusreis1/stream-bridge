import { ITrack } from "@/types/deezer"
import { Image, StyleSheet, Text, View } from "react-native"

export const TrackItem = ({item}: {item: ITrack}) => {
  return (
    <View style={styles.card}>
      <Text>Title: {item.title}</Text>
      <Text>Artist: {item.artist.name}</Text>
      <Image source={{ uri: item.album.cover_small }} style={styles.coverImage} />
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 3,
    width: '50%',
    borderRadius: 6,
    margin: 2,
    padding: 2
  },
  coverImage: {
    width: 48,
    height: 48,
  }
});
