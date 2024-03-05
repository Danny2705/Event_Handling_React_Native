import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

export default function ToDoForm({addTask, text, setText}) {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add a new task..."
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button
        title="Add Task"
        onPress={() => {
          addTask(text);
          setText('');
        }}
        style={styles.btn}
      />
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
