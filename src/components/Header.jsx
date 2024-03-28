import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return <Text style={styles.header}>TO DO LIST</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 15,
  },
});
