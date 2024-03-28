import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({navigation}) {
  const [message, setMessage] = useState('');
  const [click, setClick] = useState(false);
  const currentDate = new Date().toLocaleDateString();

  const handleClick = () => {
    setMessage('Oops, you just clicked on my name!');
    setClick(!click);
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={handleClick}>
            <Text style={styles.text}>Name: Cao Dat Nguyen</Text>
          </TouchableOpacity>
          <Text style={styles.text}>Current Date: {currentDate}</Text>
          <View style={styles.message}>
            {click && (
              <Text style={{fontSize: 20, color: 'red', textAlign: 'center'}}>
                {message}
              </Text>
            )}
          </View>
        </View>
      </View>
    </MainLayout>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    display: 'flex',
    gap: 5,
  },
  text: {
    fontSize: 20,
  },
  message: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    height: '60%',
  },
});
