import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function ToDoForm({addTask}) {
  const [input, setInput] = useState('');

  const handleChangeText = text => {
    setInput(text);
  };

  const handlePress = () => {
    addTask(input);
    setInput('');
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={handleChangeText}
        value={input}
      />
      <Button title="Add Task" onPress={handlePress} style={styles.btn} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#CDECFC',
    fontSize: 20,
    paddingLeft: 15,
  },
});
