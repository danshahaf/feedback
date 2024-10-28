import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  leftSection: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 10,
  },
  icon: {
    color: '#000', // Customize color if needed
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 10,
  },
  verticalSeparator: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 15,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  rightSection: {
    flex: 7,
    paddingLeft: 20,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    marginVertical: 10,
  },
});
