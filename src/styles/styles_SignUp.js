import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  signUpBox: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  signUpButton: {
    width: '100%',
    padding: 12,
    borderRadius: 5,
    backgroundColor: '#4285F4',
    alignItems: 'center',
    marginVertical: 10,
  },
  signUpButtonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  loginLink: {
    marginTop: 20,
    color: '#4285F4',
    fontWeight: '600',
  },
});
