import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles_MenuBar';

const MAIN_COLOR = '#82aaff';

const MenuBar = () => {
  const navigation = useNavigation();

  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <View style={styles.menuBar}>
      <View style={styles.leftSection}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Settings')}
          style={styles.iconButton}
          onMouseEnter={() => setHoveredButton('settings')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Ionicons
            name="settings"
            size={24}
            style={[styles.settingsIcon, hoveredButton === 'settings' && { color: MAIN_COLOR }]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Discover')}
          style={styles.leftOption}
          onMouseEnter={() => setHoveredButton('discover')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Ionicons
            name="compass-outline"
            size={20}
            color={hoveredButton === 'discover' ? MAIN_COLOR : 'black'}
            style={styles.leftOptionIcon}
          />
          <Text style={[styles.leftOptionText, hoveredButton === 'discover' && { color: MAIN_COLOR }]}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Updates')}
          style={styles.leftOption}
          onMouseEnter={() => setHoveredButton('updates')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          <Ionicons
            name="notifications-outline"
            size={20}
            color={hoveredButton === 'updates' ? MAIN_COLOR : 'black'}
            style={styles.leftOptionIcon}
          />
          <Text style={[styles.leftOptionText, hoveredButton === 'updates' && { color: MAIN_COLOR }]}>Updates</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchBarWrapper}>
          <TextInput style={styles.searchBar} placeholder="Search" />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Profile')}
        onMouseEnter={() => setHoveredButton('profile')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <Ionicons
          name="person-circle-outline"
          size={30}
          color={hoveredButton === 'profile' ? MAIN_COLOR : 'black'}
          style={styles.profileIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
