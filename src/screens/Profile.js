import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/styles_Profile';
import ProjectTicket from './ProjectTicket'; 

const Profile = () => (
  <View style={styles.container}>
    {/* Left Section */}
    <View style={styles.leftSection}>
      <Image 
        source={{ uri: 'https://example.com/your-profile-photo.jpg' }} 
        style={styles.profilePhoto} 
      />
      <View style={styles.socialLinks}>
        <TouchableOpacity>
          <FontAwesome name="github" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="twitter" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="linkedin" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.separator} />
      <Text style={styles.bioText}>
        Hi! I'm a passionate developer with a focus on mobile and web applications...
      </Text>
    </View>

    {/* Vertical Divider */}
    <View style={styles.verticalSeparator} />

    {/* Right Section */}
    <View style={styles.rightSection}>
      <Text style={styles.title}>Portfolio</Text>
      
      {/* Example Projects */}
      <Text style={styles.sectionTitle}>Founder</Text>
      <ProjectTicket
        logo="https://example.com/project-logo.jpg"
        title="Project One"
        description="A revolutionary app changing the way we connect."
        score="9.5"
      />
      <ProjectTicket
        logo="https://example.com/another-logo.jpg"
        title="Project Two"
        description="An innovative platform for collaboration."
        score="8.7"
      />

      <View style={styles.separator} />
        <Text style={styles.sectionTitle}>Contributor</Text>
        <View style={styles.separator} />
        <Text style={styles.sectionTitle}>Investor</Text>
      </View>

  </View>
);

export default Profile;
