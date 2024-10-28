// src/components/MenuBar.js

import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles_MenuBar';

const MenuBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.menuBar}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')} style={styles.iconButton}>
          <Ionicons name="settings-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Discover')} style={styles.leftOption}>
          <Ionicons name="compass-outline" size={20} color="black" style={styles.leftOptionIcon} />
          <Text style={styles.leftOptionText}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Updates')} style={styles.leftOption}>
          <Ionicons name="notifications-outline" size={20} color="black" style={styles.leftOptionIcon} />
          <Text style={styles.leftOptionText}>Updates</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Ionicons name="person-circle-outline" size={30} color="black" style={styles.profileIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default MenuBar;
