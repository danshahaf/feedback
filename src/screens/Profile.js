import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/styles_Profile';
import ProjectTicket from './ProjectTicket';

const Profile = () => (
  <View style={styles.container}>
    {/* Profile Info Section */}
    <View style={styles.profileInfo}>
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
    </View>

    {/* Bio Section */}
    <View style={styles.bioSection}>
      <Text style={styles.bioText}>
        Hi! I'm a passionate developer with a focus on mobile and web applications. Always excited to create and contribute to impactful projects!
      </Text>
    </View>

    <View style={styles.separator} />
    {/* Portfolio Section */}
    <View style={styles.portfolioSection}>
      {/* <Text style={styles.title}>Portfolio</Text> */}

      {/* Founder Projects */}
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

      {/* Contributor Projects */}
      <Text style={styles.sectionTitle}>Contributor</Text>
      <ProjectTicket
        logo="https://example.com/contributor-logo.jpg"
        title="Open Source Project"
        description="Contributed to an open-source project to enhance user experience."
        score="8.3"
      />

      <View style={styles.separator} />

      {/* Investor Projects */}
      <Text style={styles.sectionTitle}>Investor</Text>
      <ProjectTicket
        logo="https://example.com/investor-logo.jpg"
        title="Tech Start-Up"
        description="Invested in a tech start-up focused on AI solutions."
        score="9.0"
      />
    </View>
  </View>
);

export default Profile;
