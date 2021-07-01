import React, { useState } from 'react';
import {
    View, 
    ImageBackground, 
    TouchableOpacity, 
    StatusBar, 
    SafeAreaView, 
    StyleSheet, 
    Text
} from 'react-native';

import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/img4.jpg';
const getStarted = props => {
    const { navigation } = props;
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={{ flex: 1 }} source={bgImage} style={{ flex: 1, alignItems: 'center', height: null, width: null, tintColor: 'cyan', }}>
                <SafeAreaView style={styles.safecon}>
                    <Hedding style={{ color: 'orange',paddingTop:240 }}>Welcome!</Hedding>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, marginBottom: 10, textAlign: 'center' }}>
                        Get easy access to your home appliances and access them through your fingertips with more comfort.
                    </Text>
                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={() => {
              navigation.navigate('login');
            }}>
                            <Text style={styles.textButton}>
                                   Get Started
                            </Text>
                        </TouchableOpacity>         
                    </View>        
                </SafeAreaView>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    safecon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    touchableOpacity: {
        backgroundColor: '#1E90FF',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
        marginHorizontal: 15,
        borderRadius: 40,
        alignItems: 'center',
        height: 70,
        opacity: 0.9,
        height: 68,
    },
    textdrop: {
        marginVertical: 20,
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        height: 150
    },
    row: {
        flexDirection: 'row',
        paddingLeft: -15,
    },
    inputWrap: {
        flex: 1,
        paddingLeft: -15,
        padding: -8,
        marginLeft: -10
    },
    inputWrapText: {
        paddingLeft: -15,
        padding: -8,
        marginLeft: -40
    },
    input: {
        backgroundColor: 'white',
        padding: 8,
        margin: 22,
        width: 180,
        borderRadius: 20,
        alignItems: 'center',
        paddingLeft: 55,
    },
    extraText: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },
    extraTextTo: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 20
    },
    buttonAddToCart: {
        padding: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginVertical: 5,
        height: 50,
    },
    containerButton: {
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
       
       
    },
    textButton: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 45,
        color: 'white',
        fontWeight: 'bold',
        width: 200,
        height: 80,
        paddingLeft: 37,
        fontSize: 25,
        paddingTop: 20,
        
    },
    containerButtonLoginSign:{
       
        alignItems: 'center',
        alignContent: 'center',
    },
    textButtonLoginSign: {
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        width: 300,
        paddingLeft: 120,
        fontSize: 20,
    },
    extraTextToor: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 20,
        paddingBottom: 180,
        
    }
});
export default getStarted;





