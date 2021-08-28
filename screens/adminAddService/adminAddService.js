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
    Alert,
    Modal
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/adminUserManagement.jpg';
const adminAddService  = props => {
    const { navigation, route } = props;
    const { name,servicename,serviceid,servicecost } = route.params;
    const [nameu, setNameu] = useState(servicename);
    const [cost, setCost] = useState(servicecost);

    const update = async () => {
        var details = {
            'id': serviceid,
            'name': nameu,
            'cost': cost
        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        let formBodydata = formBody.join("&");
        console.log("pressed");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: formBodydata
        };
        fetch('http://192.168.8.100:8080/demo_war/updateservice', requestOptions)
            // .then(response=>console.log(response._bodyBlob))
            .then(response => response.json())
            .then(data => {
                if (data.response === "Service Details Updated") {
                    Alert.alert(
                        "Message",
                        "Service Details Updated",
                        [
                          { text: "OK", onPress: () => navigation.navigate('adminServiceUpdate',{name: name}) }
                        ]
                      ); 
                }
            })
            .catch(e => console.log(e))
    }
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>{name}</Text>
                        {/* <Icon name="person" size={35} style={{ paddingTop: 0, color: 'white' }} /> */}
                    </View>
                    <Hedding style={{ color: 'orange', }}>Service Management</Hedding>
                    
                    <View style={styles.extraText}>
                        <Text style={styles.extraTextTo}>────────────────────</Text>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 30, paddingLeft: 30, textAlign: 'left' }}>Service ID :</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <TextInput
                                style={styles.input}value={''+serviceid}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 30, paddingLeft: 30, textAlign: 'left' }}>Service Name :</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <TextInput
                                style={styles.input}
                                placeholder={servicename}
                                value={nameu}
                                onChangeText={value => setNameu(value)}
                            />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 30, paddingLeft: 30, textAlign: 'left' }}>Cost  :</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Rs'+servicecost}
                                value={''+cost}
                                onChangeText={value => setCost(value)}
                                />
                        </View>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress = {() => {update() }}>
                            <Text style={styles.textButtonUpdate}>
                                Update Services
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
        fontSize: 25
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
    textButtonAdd: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        width: 200,
        paddingLeft: 80,
        fontSize: 20,
        marginLeft: 170,

    },
    containerButtonUpdate: {
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 160,


    },
    textButtonUpdate: {
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        width: 270,
        paddingLeft: 70,
        fontSize: 20,
        marginLeft: 100,

    }
});
export default adminAddService;





