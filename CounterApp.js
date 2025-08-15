import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CounterApp() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native</Text>
      <Text>CounterApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
