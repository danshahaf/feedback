import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/styles_Login';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.replace('Discover');
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.header}>Login</Text>

        {/* Social Login Buttons */}
        <TouchableOpacity style={styles.socialButtonGoogle} onPress={() => console.log('Google Login')}>
          <Image source={require('../assets/google-logo.png')} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Login with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButtonLinkedIn} onPress={() => console.log('LinkedIn Login')}>
          <Image source={require('../assets/linkedin-logo.png')} style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Login with LinkedIn</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or login with email</Text>

        {/* Login Form */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpLink}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
