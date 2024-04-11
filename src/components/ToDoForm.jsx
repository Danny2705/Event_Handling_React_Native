import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import tasksData from '../data/tasks.json';

export default function ToDoForm({addTask}) {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.tasks);
  }, []);

  const handleChangeText = text => {
    setInput(text);
  };

  const handlePress = () => {
    addTask(input);
    setInput('');
  };

  const handleAddTask = () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    setInput(tasks[randomIndex]);
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
      <Button
        title="Generate Random Task"
        onPress={handleAddTask}
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
  taskList: {
    marginTop: 20,
  },
  textData: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingLeft: 15,
  },
});
