import { ITrack } from "@/types/deezer"
import { Image, Text, View } from "react-native"

export const TrackItem = ({item}: {item: ITrack}) => {
  return (
    <View style={{borderWidth: 3, width: '50%', borderRadius: 6, margin: 2, padding: 2}}>
      <Text>Title: {item.title}</Text>
      <Text>Artist: {item.artist.name}</Text>
      <Image source={{ uri: item.album.cover_small }} style={{ width: 48, height: 48 }} />
    </View>
  )
}