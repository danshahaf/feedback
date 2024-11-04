import { StyleSheet } from 'react-native';

const MAIN_COLOR = '#0062ff';

export default StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  settingTicket: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    elevation: 2, // for shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  settingLabel: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: MAIN_COLOR,
    marginTop: 20,
    marginBottom: 10,
  },
  linkButton: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 5,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 16,
    color: MAIN_COLOR,
    fontWeight: '500',
  },
});
