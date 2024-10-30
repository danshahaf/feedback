import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/styles_ProjectTicket';

const ProjectTicket = ({ logo, title, description, score }) => (
  <View style={styles.ticket}>
    <Image source={{ uri: logo }} style={styles.logo} />
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <View style={styles.scoreCircle}>
      <Text style={styles.scoreText}>{score}</Text>
    </View>
  </View>
);

export default ProjectTicket;
