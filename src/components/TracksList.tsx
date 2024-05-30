import { FlatList } from "react-native"
import { TrackItem } from "./TrackItem"
import { ITrack } from "@/types/deezer"

export const TracksList = ({tracks}: {tracks: ITrack[]}) => {
  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => (
        <TrackItem item={item}/>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  )
}