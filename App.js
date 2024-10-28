// App.js

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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <MenuBar />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Updates" component={Updates} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
