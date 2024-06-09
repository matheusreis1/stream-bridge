import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  scrollContainer: {
    paddingBottom: 60, // Add padding to avoid content being hidden behind the footer
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    margin: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textPageTitle: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  textInput: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    margin: 10,
    width: '80%'
  },
  header: {
    backgroundColor: 'black',
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  fixedFooter: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  fixedFooterText: {
    color: 'white',
    fontSize: 16,
  },
});
