import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ticket: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginRight: 15,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    color: '#666',
    fontSize: 14,
    marginVertical: 5,
  },
  scoreCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4caf50', // Customize color based on score
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
