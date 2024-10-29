import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import styles from '../styles/styles_Settings';

const Settings = () => {
  const [isProfilePublic, setIsProfilePublic] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Profile: {isProfilePublic ? 'Public' : 'Private'}</Text>
        <Switch
          value={isProfilePublic}
          onValueChange={() => setIsProfilePublic((prev) => !prev)}
        />
      </View>

      <View style={styles.settingTicket}>
        <Text style={styles.settingLabel}>Visibility: {isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode((prev) => !prev)}
        />
      </View>
    </View>
  );
};

export default Settings;
