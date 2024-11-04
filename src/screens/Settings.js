import React, { useState } from 'react';
import { View, Text, Switch, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/styles_Settings';

const Settings = () => {
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [hideSensitiveContent, setHideSensitiveContent] = useState(false);
  const [autoPlayVideos, setAutoPlayVideos] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Settings */}
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Profile Visibility: {isProfilePublic ? 'Public' : 'Private'}</Text>
        <Switch
          value={isProfilePublic}
          onValueChange={() => setIsProfilePublic((prev) => !prev)}
        />
      </View>

      {/* Appearance */}
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Appearance: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
        />
      </View>

      {/* Notifications */}
      <Text style={styles.sectionHeader}>Notifications</Text>
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Email Notifications</Text>
        <Switch
          value={emailNotifications}
          onValueChange={() => setEmailNotifications((prev) => !prev)}
        />
      </View>
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Push Notifications</Text>
        <Switch
          value={pushNotifications}
          onValueChange={() => setPushNotifications((prev) => !prev)}
        />
      </View>

      {/* Content Preferences */}
      <Text style={styles.sectionHeader}>Content Preferences</Text>
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Hide Sensitive Content</Text>
        <Switch
          value={hideSensitiveContent}
          onValueChange={() => setHideSensitiveContent((prev) => !prev)}
        />
      </View>
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Auto-Play Videos</Text>
        <Switch
          value={autoPlayVideos}
          onValueChange={() => setAutoPlayVideos((prev) => !prev)}
        />
      </View>

      {/* Legal & Privacy */}
      <Text style={styles.sectionHeader}>Legal & Privacy</Text>
      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.linkButton}>
        <Text style={styles.linkText}>Terms of Service</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Settings;
