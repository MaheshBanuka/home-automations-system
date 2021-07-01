import React, { useState } from 'react';
import {
    View, 
    ImageBackground, 
    TouchableOpacity, 
    StatusBar, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    TextInput, 
    Slider,
    Modal
} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/img4.jpg';
const getStarted = () => {
    
    return (
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={{ flex: 1 }} source={bgImage} style={{ flex: 1, alignItems: 'center', height: null, width: null, tintColor: 'cyan', }}>
                <SafeAreaView style={styles.safecon}>
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 2,
                    }}>
                        
                        {/* <Icon name="arrow-back" size={28} style={{ paddingTop: 0, marginLeft: 5, color: 'white' }} /> 
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 0 }}>Back</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>Username</Text>
                         */}
                    </View>
                    <Hedding style={{ color: 'orange',paddingTop:240 }}>Welcome!</Hedding>
                    {/*sub heading and desc
                    <Text style={{ color: 'white', fontSize: 16, justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 10 }}>
                        Once you add your feature, press the next button to add next feature as stepwise. Make sure to enter a clear feature name which is not complicated.
                    </Text>*/}
                    
                    

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, marginBottom: 10, textAlign: 'center' }}>
                        Get easy access to your home appliances and access them through your fingertips with more comfort.
                    </Text>

                   
                    
                    
                    
                    
                    {/*
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'left' }}>Price</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -10, marginRight: 33 }}>48,000LKR</Text>
                        </View>
                    </View>
                    */}
                    <View style={styles.containerButton}>
                        <TouchableOpacity>
                            <Text style={styles.textButton}>
                                   Get Started
                            </Text>
                        </TouchableOpacity>
                      {/*}  
                    </View>
                    <View style={styles.extraText}>
                        <Text style={styles.extraTextToor}>────────────────────────</Text>
                    </View>
                    <View style={styles.containerButtonLoginSign}>
                        <TouchableOpacity>
                            <Text style={styles.textButtonLoginSign}>
                                   Login
                            </Text>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.extraText}>
                        <Text style={styles.extraTextTo}>or</Text>
                    </View>
                    <View style={styles.containerButtonLoginSign}>
                        <TouchableOpacity>
                            <Text style={styles.textButtonLoginSign}>
                                   Signup
                            </Text>
                */}
                        
                        
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





