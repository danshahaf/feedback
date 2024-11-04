// Discover.js

import React, { useState } from 'react';
import { View, Text, Animated } from 'react-native';
import FeedList from './FeedList';
import ProjectDetails from './ProjectDetails';
import styles from '../styles/discover/styles_Discover';

const Discover = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const slideAnim = useState(new Animated.Value(0))[0];

  const openProjectDetails = (project) => {
    setSelectedProject(project);
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeProjectDetails = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setSelectedProject(null));
  };

  const slideInPosition = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['100%', '50%'],
  });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.header}>Discover</Text> */}
      <View style={[styles.feedWrapper, selectedProject && styles.feedWrapperShifted]}>
        <FeedList onProjectPress={openProjectDetails} />
      </View>

      {selectedProject && (
        <Animated.View style={[styles.projectDetailsContainer, { transform: [{ translateX: slideInPosition }] }]}>
          <ProjectDetails project={selectedProject} onClose={closeProjectDetails} />
        </Animated.View>
      )}
    </View>
  );
};

export default Discover;
