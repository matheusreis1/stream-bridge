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
    paddingBottom: 60,
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
  buttonDisabled:{
    backgroundColor: 'gray',
  },
  buttonPressed: {
    backgroundColor: 'gray',
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
