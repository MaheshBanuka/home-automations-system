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
import bgImage from '../../assets/img/img5.jpg';
const cart = props => {
    const { navigation, route } = props;
    // const { name } = route.params;
    const name = 'banuka';
    const [servicenametemp, setServicenametemp] = useState([])
    const [serviceqty, setserviceqty] = useState([])
    const [price, setprice] = useState([4000,2000,1000,5000])
    let tot = 0;
    // const [subtot, setsubtot] = useState()
    const cartdata = async () => {

        var details = {
            'name': name
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
        fetch('http://192.168.8.101:8080/demo_war/viewcart', requestOptions)
            // .then(response=>console.log(response._bodyBlob))
            .then(response => response.json())
            .then(data => {
                //  servicenametemp = JSON.parse(data.servicenames)
                setServicenametemp(JSON.parse(data.servicenames));
                // console.log(data.servicenametemp);
                setserviceqty(JSON.parse(data.serviceqty));
                if (data.name === "banuka") {
                    console.log(data.name);
                }
            })
            .catch(e => console.log(e))
            

    }
    React.useEffect(() => {
        cartdata()
    }, [])

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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>Username</Text>
                        {/* <Icon name="person" size={35} style={{ paddingTop: 0, color: 'white' }} /> */}
                    </View>
                    <Hedding style={{ color: 'orange', fontWeight: 'bold', fontSize: 40 }}>Cart</Hedding>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>Item</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>Quantity</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>Price</Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            {servicenametemp.map((item, index) => {
                                // console.log(item, index)
                                return (<Text key={index} style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>{item}</Text>)

                            })}
                        </View>
                        <View style={styles.inputWrap}>
                            {serviceqty.map((item, index) => {
                                // console.log(item, index)
                                // setsubtot(item*4000)
                                // console.log(subtot)
                                return (<Text key={index} style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>{item}</Text>)

                            })}
                        </View>
                        <View style={styles.inputWrap}>
                        {serviceqty.map((item, index) => {

                                // console.log(item, index)
                                // setsubtot(item*4000)
                                // console.log(subtot)
                                tot=tot+item*price[index]
                                return (<Text key={index} style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>{item*price[index]}</Text>)

                            })}
                            {/* <Text style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>88,000LKR</Text> */}
                            {/* <Text style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>88,000LKR</Text> */}
                        </View>


                    </View>
                    <View style={styles.row}>

                        <TouchableOpacity>
                            <Text style={styles.textButtonupdate}>
                                Update
                            </Text>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <Text style={styles.textButtonremove}>
                                Remove
                                </Text>
                        </TouchableOpacity>



                    </View>
                    {/* table body ends */}

                    <View style={styles.extraText}>
                        <Text style={styles.extraTextTotwo}>────────────────────</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 24, color: 'silver', fontWeight: 'bold', paddingTop: 10, paddingLeft: 20, textAlign: 'left' }}>Sub Total</Text>
                        </View>

                        <View style={styles.inputWrapText}>
                            <Text style={{ fontSize: 24, color: 'silver', fontWeight: 'bold', paddingTop: 10, marginRight: 20 }}>LKR{tot}</Text>
                        </View>
                    </View>

                    <View style={styles.containerButton}>
                        <TouchableOpacity>
                            <Text style={styles.textButtonshop}>
                                Continue shopping
                            </Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.containerButton}>
                        <TouchableOpacity>
                            <Text style={styles.textButtoncheckout}>
                                Checkout
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
        fontWeight: 'bold',
        justifyContent: 'center',


        fontSize: 15,
    },

});
export default cart;





