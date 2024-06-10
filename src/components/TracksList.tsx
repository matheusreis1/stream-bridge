import { FlatList } from "react-native"
import { TrackItem } from "./TrackItem"
import { useContext } from "react";
import { TracksToCreateContext } from "@/context/TracksToCreate";

export const TracksList = () => {
  const { tracks } = useContext(TracksToCreateContext);

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => (
        <TrackItem item={item}/>
      )}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      scrollEnabled={false}
      style={{width: '100%', padding: 10, height: '20%'}}
    />
  )
}