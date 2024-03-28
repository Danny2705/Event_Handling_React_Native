import React from 'react';
import {Text, View, ScrollView, SafeAreaView} from 'react-native';

export default function ToDoList({tasks}) {
  return (
    <SafeAreaView>
      <ScrollView style={{paddingTop: 15}}>
        <View>
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
                  style={{
                    fontSize: 20,
                    textAlign: 'center',
                    paddingTop: 10,
                    paddingBottom: 25,
                  }}>
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
