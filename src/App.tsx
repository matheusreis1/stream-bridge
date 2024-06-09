import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Your scrollable content here */}
        <Text style={styles.contentText}>Scrollable Content</Text>
        <Text style={styles.contentText}>More Scrollable Content</Text>
        <Text style={styles.contentText}>Even More Scrollable Content</Text>
        <Text style={styles.contentText}>Keep Scrolling...</Text>
        <Text style={styles.contentText}>Almost There...</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
        <Text style={styles.contentText}>End of Content</Text>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>This is a fixed footer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  scrollContainer: {
    paddingBottom: 60, // Add padding to avoid content being hidden behind the footer
  },
  contentText: {
    margin: 20,
    fontSize: 18,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
