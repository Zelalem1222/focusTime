import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/size'

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.inputText}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.buttonContainer}>
        <RoundedButton title='+' size={50} onPress={() => addSubject(subject)}/>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  inputText : {
   flex: 1,
   marginRight: spacing.sm
  },
  buttonContainer:{
   justifyContent: 'center'
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row'
  },
});
