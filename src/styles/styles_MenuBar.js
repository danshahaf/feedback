// src/styles/styles_MenuBar.js

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingHorizontal: 10,
    paddingVertical: 10, // Increased vertical padding
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
  },
  searchBarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  searchBar: {
    width: '40%',
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  profileIcon: {
    marginLeft: 10,
  },
});
