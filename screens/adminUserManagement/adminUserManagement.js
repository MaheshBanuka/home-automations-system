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
import { ModalPicker } from '../../components/ModalPicker'
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/adminUserManagement.jpg';
const adminUserManagement = () => {
    
    const [lightState, setLightState] = useState(0);
  const [gateNo, setGateNo] = useState(0);

    
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
                        {/* <Icon name="arrow-back" size={28} style={{ paddingTop: 0, marginLeft: 5, color: 'white' }} /> */}
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 0 }}>Back</Text>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>Admin</Text>
                        {/* <Icon name="person" size={35} style={{ paddingTop: 0, color: 'white' }} /> */}
                    </View>
                    <Hedding style={{ color: 'orange', fontWeight: 'bold', fontSize: 40, padding: 30 }}>User Management</Hedding>
                    {/*sub heading and desc*/}
                    
                    
                    
{/*
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, marginBottom: 10, textAlign: 'left' }}>Add Feature 01 Name here :</Text>

                */}                          
                    
                    {/*
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 30, paddingLeft: 20, textAlign: 'left' }}>Feature 1 :</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <TextInput
                                style={styles.input}
                                placeholder='eg. som' />
                        </View>
                    </View>
                    */}
                    {/* table header */}
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -30, textAlign: 'center' }}>List of Users</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -40, textAlign: 'center' }}>Actions</Text>
                        </View>
                       
                        
                        
                        
                        
                    </View>
                   
                   {/* table header ends */}

                    {/* table body */}
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>1.Saman</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.textButtonbanned}>
                                   Banned 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textButtonactive}>
                                   Active 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textButtondelete}>
                                   Delete 
                            </Text>
                        </TouchableOpacity>
                        
                    
                    </View>
                   {/* table body ends */}

                   
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
    

    textButtoncheckout: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 275,
        width: 107,
        fontSize: 20,
        
    },
    textButtonbanned: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        margin: 7,  
        fontSize: 15,
       
    },
    textButtonactive: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 15,
        color: 'white',
        margin: 7,   
        fontWeight: 'bold',
        justifyContent: 'center',
    
        fontSize: 15,
    },

    textButtondelete: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        color: 'white',
        margin: 7,   
        fontWeight: 'bold',
        justifyContent: 'center',
        
        fontSize: 15,
    },

});
export default adminUserManagement;





