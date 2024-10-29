import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import ProjectTicket from './ProjectTicket'; // assuming ProjectTicket is in the same directory
import styles from '../styles/styles_Discover';

const Discover = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discover</Text>
      <ScrollView contentContainerStyle={styles.feedContainer}>
        {/* Quick Post Section */}
        <View style={styles.feedItem}>
          <View style={styles.profileInfo}>
            <Image source={{ uri: 'https://example.com/profile.jpg' }} style={styles.profilePhoto} />
            <View>
              <Text style={styles.profileName}>Founder Name</Text>
              <Text style={styles.timestamp}>2h ago</Text>
            </View>
          </View>
          <Text style={styles.postText}>This is a quick post with text content like a tweet.</Text>
        </View>

        {/* Project Update Section */}
        <View style={styles.feedItem}>
          <View style={styles.profileInfo}>
            <Image source={{ uri: 'https://example.com/profile.jpg' }} style={styles.profilePhoto} />
            <View>
              <Text style={styles.profileName}>Founder Name</Text>
              <Text style={styles.timestamp}>5h ago</Text>
            </View>
          </View>
          <Text style={styles.postText}>This is an update for a project. Here are the latest details...</Text>
          <ProjectTicket
            logo="https://example.com/project-logo.jpg"
            title="Project Title"
            description="A brief description of the project"
            score="8.9"
          />
        </View>

        {/* Money Raised Section */}
        <View style={styles.feedItem}>
          <View style={styles.profileInfo}>
            <Image source={{ uri: 'https://example.com/profile.jpg' }} style={styles.profilePhoto} />
            <View>
              <Text style={styles.profileName}>Investor Name</Text>
              <Text style={styles.timestamp}>1d ago</Text>
            </View>
          </View>
          <Text style={styles.postText}>
            <Text style={styles.investmentAmount}>$500,000</Text> invested in this project.
          </Text>
          <ProjectTicket
            logo="https://example.com/project-logo.jpg"
            title="Project Title"
            description="A brief description of the project"
            score="9.2"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Discover;
