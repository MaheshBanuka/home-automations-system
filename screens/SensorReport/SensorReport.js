import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    Slider,
    Alert,
    Modal,
    FlatList
} from 'react-native';
import PayHere from '@payhere/payhere-mobilesdk-reactnative';
import { ModalPicker } from '../../components/ModalPicker'
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/img5.jpg';

const cart = props => {
    const { navigation, route } = props;
    const { name, feid } = route.params;
    const [time, setTime] = useState([]);
    const [date, setDate] = useState([]);
    let amount = 0;
    // const name = 'banuka';

    const reportdata = async () => {
        console.log(feid);
        var details = {
            'feid': feid
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
        fetch('http://192.168.8.100:8080/demo_war/viewsensor', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setTime(JSON.parse(data.senstimes));
                setDate(JSON.parse(data.sensdates));
                if (data.name === "banuka") {
                    console.log(data.name);
                }
            })
            .catch(e => console.log(e))
    }

    React.useEffect(() => {
        reportdata()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={bgImage} style={{ flex: 1, alignItems: 'center', tintColor: 'cyan', }}>
                <ScrollView >
                    <View style={styles.safecon}>
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
                        <Hedding style={{ color: 'orange', fontWeight: 'bold', fontSize: 40,paddingLeft:-15 }}>Sensor Report</Hedding>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 30, textAlign: 'center',paddingBottom:10 }}>Date</Text>
                            </View>
                            <View style={styles.inputWrap}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 30, textAlign: 'center',paddingBottom:10 }}>Time</Text>
                            </View>
                            
                        </View>
                        <View style={styles.row}>
                            <View style={styles.inputWrap}>
                                {date.map((item, index) => {
                                    // console.log(item, index)
                                    return (<Text key={index} style={{ fontSize: 20, color: 'white', marginLeft: 35, paddingTop: 10, paddingBottom: 5, paddingLeft: 60, textAlign: 'left' }}>{item}</Text>)
                                })}
                            </View>
                            <View style={styles.inputWrap}>
                                {time.map((item, index) => {
                                    // console.log(item, index)
                                    return (<Text key={index} style={{ fontSize: 20, color: 'white', marginLeft: 35, paddingTop: 10, paddingBottom: 5, paddingLeft: 70, textAlign: 'left' }}>{item}</Text>)
                                })}
                            </View>
                        </View>
                        <View style={styles.extraText}>
                            <Text style={styles.extraTextTotwo}>────────────────────</Text>
                        </View>
                        <View style={styles.containerButton}>
                            <TouchableOpacity onPress={() => reportdata()}>
                                <Text style={styles.textButtoncheckout}>
                                    Refresh
                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </ImageBackground>
        </SafeAreaView >
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
        marginLeft: -60,
    },
    inputWrapText: {
        paddingLeft: -15,
        padding: -8,
        marginLeft: -40,
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
        fontSize: 25,
        fontWeight: 'bold',
    },
    extraTextTotwo: {
        justifyContent: 'center',
        alignContent: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',


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

    },
    textButtonshop: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 200,
        width: 190,
        fontSize: 20,


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
    textButtonupdate: {
        padding: 10,
        backgroundColor: '#32CD32',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        margin: 10,
        fontSize: 15,
    },
    textButtonremove: {
        padding: 10,
        backgroundColor: '#FF0000',
        borderRadius: 15,
        color: 'white',
        margin: 10,
        marginLeft: 40,
        fontWeight: 'bold',
        justifyContent: 'center',


        fontSize: 15,
    },

});
export default cart;