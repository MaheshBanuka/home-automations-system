import React, { useState } from 'react';
import { View, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { FlatList, StatusBar, SafeAreaView, StyleSheet, Text } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import bgImage from '../../assets/img/adminUserManagement.jpg';
import Hedding from '../../components/Hedding';
const Home = props => {
    const { navigation, route } = props;
    const { name,servicenames,serviceqty} = route.params;
    // let name = "amali";
    const [servicename, setServicename] = useState([])
    const [serviceid, setServieid] = useState([])
    const [servicecost, setServiecost] = useState([])

    const servicedata = async () => {
        var details = {

        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        let formBodydata = formBody.join("&");
        console.log("done");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: formBodydata
        };
        fetch('http://192.168.8.100:8080/demo_war/viewservice', requestOptions)
            .then(response => response.json())
            .then(data => {
                setServicename(JSON.parse(data.servicenames));
                setServieid(JSON.parse(data.serviceid));
                setServiecost(JSON.parse(data.servicecost));
            })
            .catch(e => console.log(e))
    }
    React.useEffect(() => {
        servicedata()
    }, [])

    const displayNumber = () => {
        let tempList = []
        for (let i = 0; i < serviceid.length; i++) {
            tempList.push(
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', { name: name, servicenum: i });
                }}>
                    <Text style={styles.item}>{servicename[i]}</Text>
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
                            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 30 }}>LogOut</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 150, color: 'white', paddingTop: 30 }}>{name}</Text>
                        {/* <Icon name="person" size={35} style={{paddingTop: 30, color: 'white'}} />   */}
                    </View>
                    <Hedding style={{ color: 'white', }}>Our Services</Hedding>
                </SafeAreaView>
                <View style={styles.row}>
                    <View >
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('MyServices', { name: name });
                        }}>
                            <Text style={styles.myserv}>
                                My Services
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('cart', { name: name });
                        }}>
                            <Text style={styles.cart}>
                                Cart
                                </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                    {/* <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name,servicenum:0});
                }}>
                    <Text style={styles.item}>Light On/Off</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name,servicenum:1});
                }}>
                    <Text style={styles.item}>Light Dimmer</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name,servicenum:2});
                }}>
                    <Text style={styles.item}>Fan Control</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name,servicenum:3});
                }}>
                    <Text style={styles.item}>Sensor</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name,servicenum:4});
                }}>
                    <Text style={styles.item}>Water Tank</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('LightPurchase', {name: name,servicenum:5});
                }}>
                    <Text style={styles.item}>Door Lock/Unlock</Text>
                </TouchableOpacity> */}
                    {displayNumber()}
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
    containerButton: {
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',


    },
    myserv: {
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        margin: 10,
        fontSize: 20,
    },
    cart: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        margin: 10,
        fontWeight: 'bold',
        justifyContent: 'center',
        width: 110,
        paddingLeft: 35,
        fontSize: 20,
    },
    textButton: {
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        width: 200,
        paddingLeft: 45,
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        paddingLeft: -15,
    }
});


export default Home;





