import { StyleSheet } from 'react-native';

const MAIN_COLOR = '#0062ff';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 30,
    width: '100%',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: MAIN_COLOR,
    marginBottom: 20,
  },
  input: {
    width: '100%', // Set input width to 80% of modal width
    padding: 15,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  textArea: {
    height: 250,
    textAlignVertical: 'top',
    width: '100%', // Ensure text area also takes 80% of modal width
  },
  charCount: {
    alignSelf: 'flex-end',
    color: '#888',
    fontSize: 12,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: MAIN_COLOR,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
    width: '100%'
  },
  submitButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
});
