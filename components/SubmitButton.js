import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const SubmitButton = props => {
    return(
    <View style={{ width: '100%', }}>
        <TouchableOpacity
            onPress={() =>props.onPress()
                
            }
            style={{
                height: 40,
                borderRadius: 50,
                width: '100%',
                backgroundColor: '#dc4d4d',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 10,
            }}>
            <Text style={{ fontSize: 20 }}>{props.children}</Text>
        </TouchableOpacity>
    </View>)
};

const styles = StyleSheet.create({
    SubmitButton: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
});
export default SubmitButton;