import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles_NewIdea';

const NewIdea = ({ onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const maxDescriptionLength = 500;

  const handleDescriptionChange = (text) => {
    if (text.length <= maxDescriptionLength) {
      setDescription(text);
    }
  };

  const handleSubmit = () => {
    console.log('Idea submitted:', { name, description });
    onClose(); // Close modal after submit
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>I have an idea</Text>

      <TextInput
        style={styles.input}
        placeholder="Name it!"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Describe It"
        value={description}
        onChangeText={handleDescriptionChange}
        multiline
      />
      <Text style={styles.charCount}>
        {maxDescriptionLength - description.length} characters left
      </Text>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewIdea;
