import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MAIN_COLOR = '#0062ff';

const TopBar = ({ onNewIdeaPress }) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.title}>FEEDBACK</Text>
      <View style={styles.rightSection}>
        {/* Search Bar with Icon */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={22} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor="#888"
            selectionColor="transparent"  // Disable input highlight color
          />
        </View>

        {/* Idea Button */}
        <TouchableOpacity style={styles.ideaButton} onPress={onNewIdeaPress}>
          <Text style={styles.ideaButtonText}>💡 I have an idea</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15, // Increased vertical padding for larger height
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 22, // Slightly larger font size for the title
    fontWeight: 'bold',
    color: MAIN_COLOR,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ideaButton: {
    marginLeft: 10,
    backgroundColor: MAIN_COLOR,
    paddingVertical: 12, // Increase padding for larger button height
    paddingHorizontal: 18,
    borderRadius: 5,
  },
  ideaButtonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16, // Slightly larger text size
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: MAIN_COLOR,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8, // Increase padding for larger search bar height
    backgroundColor: '#f9f9f9',
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16, // Slightly larger text size in input
    color: '#333',
  },
});
