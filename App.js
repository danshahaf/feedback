import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuBar from './src/components/MenuBar';
import Settings from './src/screens/Settings';
import Discover from './src/screens/Discover';
import Updates from './src/screens/Updates';
import Profile from './src/screens/Profile';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Updates" component={UpdatesWithMenu} />
          <Stack.Screen name="Settings" component={SettingsWithMenu} />
          <Stack.Screen name="Discover" component={DiscoverWithMenu} />
          <Stack.Screen name="Profile" component={ProfileWithMenu} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

// Higher-order components to include the MenuBar in each screen (except Login and SignUp)
const UpdatesWithMenu = () => (
  <View style={styles.screenContainer}>
    <MenuBar />
    <Updates />
  </View>
);

const SettingsWithMenu = () => (
  <View style={styles.screenContainer}>
    <MenuBar />
    <Settings />
  </View>
);

const DiscoverWithMenu = () => (
  <View style={styles.screenContainer}>
    <MenuBar />
    <Discover />
  </View>
);

const ProfileWithMenu = () => (
  <View style={styles.screenContainer}>
    <MenuBar />
    <Profile />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  screenContainer: {
    flex: 1,
  },
});
