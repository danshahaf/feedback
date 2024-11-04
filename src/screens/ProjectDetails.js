// ProjectDetails.js

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/discover/styles_ProjectDetails';

const ProjectDetails = ({ project, onClose }) => (
  <View style={styles.projectDetailsContent}>
    <TouchableOpacity onPress={onClose}>
      <Text style={styles.closeButton}>Close</Text>
    </TouchableOpacity>
    <Image source={{ uri: project.logo }} style={styles.projectImage} />
    <Text style={styles.projectTitle}>{project.title}</Text>
    <Text style={styles.projectDescription}>{project.description}</Text>
    {project.investment && <Text style={styles.investmentAmount}>{project.investment}</Text>}
  </View>
);

export default ProjectDetails;
