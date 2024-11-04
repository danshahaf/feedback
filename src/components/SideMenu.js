// SideMenu.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MAIN_COLOR = '#0062ff';

const SideMenu = ({ onSelect, selectedScreen }) => (
  <View style={styles.sideMenu}>
    <TouchableOpacity style={[styles.menuItem, selectedScreen === 'Discover' && styles.selectedItem]} onPress={() => onSelect('Discover')}>
      <Ionicons name="compass-outline" size={20} color={MAIN_COLOR} style={styles.icon} />
      <Text style={styles.menuText}>Discover</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.menuItem, selectedScreen === 'Updates' && styles.selectedItem]} onPress={() => onSelect('Updates')}>
      <Ionicons name="notifications-outline" size={20} color={MAIN_COLOR} style={styles.icon} />
      <Text style={styles.menuText}>Updates</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.menuItem, selectedScreen === 'Profile' && styles.selectedItem]} onPress={() => onSelect('Profile')}>
      <Ionicons name="person-circle-outline" size={20} color={MAIN_COLOR} style={styles.icon} />
      <Text style={styles.menuText}>Profile</Text>
    </TouchableOpacity>
    <View style={styles.spacer} />
    <TouchableOpacity style={[styles.menuItem, selectedScreen === 'Settings' && styles.selectedItem]} onPress={() => onSelect('Settings')}>
      <Ionicons name="settings" size={20} color={MAIN_COLOR} style={styles.icon} />
      <Text style={styles.menuText}>Settings</Text>
    </TouchableOpacity>
  </View>
);

export default SideMenu;

const styles = StyleSheet.create({
  sideMenu: {
    width: '20%',
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingBottom: 20,
    borderRightWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'space-between',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  selectedItem: {
    backgroundColor: '#f0f8ff',
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: MAIN_COLOR,
  },
  spacer: {
    flex: 1,
  },
});
