import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  }
})

const styles2 = StyleSheet.create({
  right: {
    alignItems: 'flex-end'
  }
})

const Greeting = (props) => {
  return (
    <View style={styles2.right}>
      <Text>Hello {props.name} I {props.fell} u!</Text>
    </View>
  );
}

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name='Rexxar' />
      <Greeting name='Jaina' />
      <Greeting name='Mawmaw' fell='love' />
    </View>
  );
}

export default LotsOfGreetings;
