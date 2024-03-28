import {Button, StyleSheet, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';
import {useState} from 'react';

function HomeScreen({navigation}) {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = task => {
    setTasks([...tasks, task]);
  };

  return (
    <MainLayout>
      <View style={{flex: 1}}>
        <ToDoForm addTask={handleAddTask} />
        <ToDoList tasks={tasks} />
        <View style={styles.buttonContainer}>
          <Button
            title="Go to About Page"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </MainLayout>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    marginHorizontal: 'auto',
  },
});
