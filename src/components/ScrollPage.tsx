import { TracksToCreateProvider } from "@/context/TracksToCreate"
import { ScrollView, StyleSheet } from "react-native"

export const ScrollPage = ({ children }) => {
  return (
    <TracksToCreateProvider>
      <ScrollView contentContainerStyle={styles.container}>
        {children}
      </ScrollView>
    </TracksToCreateProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFullWidth: {
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
})
