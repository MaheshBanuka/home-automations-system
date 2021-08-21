import React, { useState, useEffect } from 'react';
import { View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList, StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import bgImage from './../assets/img/bgi.jpg';
import Hedding from './../components/Hedding';
const Home = props => {
    const { navigation, route } = props;
    // const [name,setName] = useState('Banuka');
    // const { name, servicenames, serviceqty } = route.params;
    // console.log(servicenames);


    const buttonset = () => {
    }

    // useEffect(() => {
    //     displayNumber(5)
    // })


    const displayNumber = (number) => {

        let tempList = []

        console.log("dffd");
        for (let i = 0; i < number; i++) {


            tempList.push(
                <TouchableOpacity onPress={() => console.log('pressed index--',i)}>
                <Text key={i} style={[{fontSize:30,color:'white'}]}>{i}</Text>
                </TouchableOpacity>
            )
        }


        return tempList;
    }
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
                        {/* <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 150, color: 'white', paddingTop: 30 }}>{name}</Text> */}
                        {/* <Icon name="person" size={35} style={{paddingTop: 30, color: 'white'}} />   */}
                    </View>
                    <Hedding style={{ color: 'white', }}>
                        Your Services</Hedding>
                        {displayNumber(6)}
                </SafeAreaView>
                {/* <ScrollView>
                    {servicenames.map((item, index) => {
                        return <TouchableOpacity key={index} onPress={() => {
                            if (item === "Light On/Off") {
                                navigation.navigate('BrightnessControl', { name: name, serviceqty: serviceqty, index: index });
                            }
                            else if (item === "Light Dimmer") {
                                navigation.navigate('LightBrightness', { name: name, serviceqty: serviceqty, index: index });
                            }
                            else if (item === "Fan Controll") {
                                navigation.navigate('FanControl', { name: name, serviceqty: serviceqty, index: index });
                            }
                            else if (item === "Door Lock/Unlock") {
                                navigation.navigate('DoorControl', { name: name, serviceqty: serviceqty, index: index });
                            }
                        }}>

                            <Text style={styles.item}>{item}</Text>
                        </TouchableOpacity>
                    })}
                </ScrollView> */}
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





