import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Modal, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopBar from './src/components/TopBar';
import SideMenu from './src/components/SideMenu';
import Discover from './src/screens/Discover';
import Updates from './src/screens/Updates';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import ProjectDetails from './src/screens/ProjectDetails';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import NewIdea from './src/screens/NewIdea';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState('Discover');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false); // Modal state

  const handleScreenChange = (screen) => {
    setSelectedScreen(screen);
    setSelectedProject(null); // Close project details when switching screens
  };

  // Auth Stack for Login and SignUp
  const AuthStackScreen = () => (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login">
        {(props) => <Login {...props} onLogin={() => setIsAuthenticated(true)} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="SignUp">
        {(props) => <SignUp {...props} onSignUp={() => setIsAuthenticated(true)} />}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );

  // Main App Layout
  const MainAppScreen = () => (
    <View style={styles.container}>
      <TopBar onNewIdeaPress={() => setModalVisible(true)} /> {/* Open modal */}
      <View style={styles.contentContainer}>
        <SideMenu onSelect={handleScreenChange} selectedScreen={selectedScreen} />
        <View style={styles.centerContent}>{renderSelectedScreen()}</View>
        {selectedProject && (
          <View style={styles.projectDetailsContainer}>
            <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />
          </View>
        )}
      </View>

      {/* Modal for New Idea Form */}
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // Close modal on request
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <NewIdea onClose={() => setModalVisible(false)} /> {/* New Idea form in the modal */}
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );

  const renderSelectedScreen = () => {
    switch (selectedScreen) {
      case 'Discover':
        return <Discover onProjectSelect={setSelectedProject} />;
      case 'Updates':
        return <Updates />;
      case 'Profile':
        return <Profile />;
      case 'Settings':
        return <Settings />;
      default:
        return <Discover onProjectSelect={setSelectedProject} />;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isAuthenticated ? (
          <Stack.Screen name="Auth" component={AuthStackScreen} />
        ) : (
          <Stack.Screen name="MainApp" component={MainAppScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  centerContent: {
    flex: 1,
    padding: 20,
  },
  projectDetailsContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    borderLeftWidth: 1,
    borderColor: '#ddd',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: '40%', // Set modal width to 40% for a narrower look
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
});
