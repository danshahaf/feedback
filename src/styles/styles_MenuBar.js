import { StyleSheet } from 'react-native';

const MAIN_COLOR = '#82aaff';

export default StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: MAIN_COLOR,
    paddingHorizontal: 15,
    paddingVertical: 12,
    justifyContent: 'space-between',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginRight: 15,
  },
  leftOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  leftOptionIcon: {
    marginRight: 5,
  },
  leftOptionText: {
    fontSize: 16,
    color: 'black',
  },
  searchBarContainer: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -100 }], // Center the search bar by offsetting half its width
    width: 200, // Set a fixed width to keep it centered and not too long
  },
  searchBar: {
    height: 35,
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  profileIcon: {
    marginLeft: 10,
  },
  settingsIcon: {
    color: MAIN_COLOR,
  },
  button: {
    transition: 'color 0.5s, background-color 0.5s',
  },
  buttonHovered: {
    color: MAIN_COLOR,
  },
});
