import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Hedding = props => {
  return <Text style={{ ...styles.Hedding, ...props.style }} >
    {props.children}
  </Text>;
};

const styles = StyleSheet.create({
  Hedding: {
    textAlign: 'center',
    padding: 10,
  },
});
export default Hedding;
