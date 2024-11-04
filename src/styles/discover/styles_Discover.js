import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  feedWrapper: {
    width: '50%',
    alignItems: 'center',
  },
  feedWrapperShifted: {
    width: '50%',
    marginRight: '50%',
  },
  projectDetailsContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '50%',
    backgroundColor: '#ffffff',
    borderLeftWidth: 1,
    borderColor: '#ddd',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: -2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});
