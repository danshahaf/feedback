import { StyleSheet } from 'react-native';

const MAIN_COLOR = '#0062ff';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: MAIN_COLOR,
  },
  socialLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    color: MAIN_COLOR,
    marginHorizontal: 8,
  },
  bioSection: {
    paddingHorizontal: 15,
    marginBottom: 25,
  },
  bioText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: '#333',
  },
  portfolioSection: {
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: MAIN_COLOR,
    marginBottom: 15,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: MAIN_COLOR,
    marginTop: 20,
    marginBottom: 10,
  },
  separator: {
    height: 1,
    backgroundColor: '#ddd',
    width: '100%',
    marginVertical: 15,
  },
});
