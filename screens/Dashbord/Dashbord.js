import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity,ScrollView } from 'react-native';
import { FlatList, StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import bgImage from '../../assets/img/bgi.jpg';
import Hedding from '../../components/Hedding';
const Home = props => {
    const { navigation, route } = props;
    const { name} = route.params;
    return (
        
        <View style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground style={{ flex: 1 }} source={bgImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: null, width: null, tintColor: 'cyan', }}>
                <SafeAreaView>
                    
                    <View style={{
                        paddingVertical: 20,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 2,
                    }}>
                        {/* <Icon name="arrow-back" size={28} style={{paddingTop: 30, marginLeft: 5, color: 'white'}} /> */}
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('login');
                        }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 30 }}>Back</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 150, color: 'white', paddingTop: 30 }}>{name}</Text>
                        {/* <Icon name="person" size={35} style={{paddingTop: 30, color: 'white'}} />   */}
                    </View>
                    <Hedding style={{ color: 'white', }}>Our Services</Hedding>
                </SafeAreaView>
                <ScrollView>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name});
                }}>
                    <Text style={styles.item}>Light On/Off</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.item}>Light Dimmer</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.item}>Fan Control</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.item}>Sensor</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.item}>Water Tank</Text>
                </TouchableOpacity>
                </ScrollView>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 65,
        paddingHorizontal: 20,
        marginVertical: -40,
    },
    item: {
        marginTop: 40,
        padding: 30,
        backgroundColor: '#ffffff',
        fontSize: 24,
        marginHorizontal: 10,
        marginVertical: 10,
        marginTop: 25,
        elevation: 15,
        borderRadius: 10,
        fontWeight: 'bold',
        fontSize: 19,
        paddingHorizontal: 10,
        justifyContent: 'center',
        width: 330,
        alignItems: 'center',
        opacity: 0.7,
        color: 'black',
    },
});


export default Home;





