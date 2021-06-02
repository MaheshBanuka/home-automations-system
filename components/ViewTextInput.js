import React from 'react';
import {View, StyleSheet} from 'react-native';

const ViewTextInput = props => {
  return <View style={{...styles.ViewTextInput, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  ViewTextInput: {
    height: 40,
      elevation: 5,
      borderRadius: 50,
      width: '100%',
      backgroundColor: '#fff',
      marginBottom: 20,
  },
});

export default ViewTextInput;