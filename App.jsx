import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ToDoForm from './src/ToDoForm';

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const addTask = taskInput => {
    if (tasks.includes(taskInput)) {
      alert('Task already exists, please enter a new task.');
    } else {
      setTasks([...tasks, taskInput]);
      setText('');
    }
  };
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView style={{paddingTop: 15}}>
        <View>
          <Text style={styles.header}>TO DO LIST</Text>
          <ToDoForm addTask={addTask} text={text} setText={setText} />
          <View style={{padding: 15}}>
            {tasks.length !== 0 ? (
              tasks.map((task, index) => {
                return (
                  <View key={index}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                      {task}
                    </Text>
                  </View>
                );
              })
            ) : (
              <View>
                <Text
                  style={{fontSize: 25, textAlign: 'center', paddingTop: 60}}>
                  Enter a task to add to a To Do List
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
});

export default App;
