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
    Modal
} from 'react-native';
import PayHere from '@payhere/payhere-mobilesdk-reactnative';
import { ModalPicker } from '../../components/ModalPicker'
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/img5.jpg';

const cart = props => {
    const { navigation, route } = props;
    const { name } = route.params;
    let amount = 0;
    // const name = 'banuka';
    const paymentObject = {
        sandbox: true, // true if using Sandbox Merchant ID
        merchant_id: '1218364', // Replace your Merchant ID
        merchant_secret: '4ZHlDcUSTKL4jljWTEmYlw8X6Aea8GwNz4OUg7bx2i7H', // See step 4e
        notify_url: 'http://sample.com/notify',
        order_id: 'ItemNo12345',
        items: 'Hello from React Native!',
        amount: '4500',
        currency: 'LKR',
        first_name: name,
        last_name: 'Perera',
        email: 'samanp@gmail.com',
        phone: '0771234567',
        address: 'No.1, Galle Road',
        city: 'Colombo',
        country: 'Sri Lanka',
        delivery_address: 'No. 46, Galle road, Kalutara South',
        delivery_city: 'Kalutara',
        delivery_country: 'Sri Lanka',
        custom_1: '',
        custom_2: '',
      };
    
      const payBtn = () => {
        PayHere.startPayment(
          paymentObject,
          paymentId => {
            console.log('Payment Completed', paymentId);
            cartcom()
          },
          errorData => {
            Alert.alert('PayHere Error', errorData);
          },
          () => {
            console.log('Payment Dismissed');
          },
        );
      };

    const [servicenametemp, setServicenametemp] = useState([])
    const [serviceqty, setserviceqty] = useState([])
    const [price, setprice] = useState([4000,2000,1000,5000])
    let tot = 0;
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
            .then(response => response.json())
            .then(data => {
                setServicenametemp(JSON.parse(data.servicenames));
                setserviceqty(JSON.parse(data.serviceqty));
                if (data.name === "banuka") {
                    console.log(data.name);
                }
            })
            .catch(e => console.log(e))
    }

    const cartcom = async () => {
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
        fetch('http://192.168.8.101:8080/demo_war/compay', requestOptions)
            .then(response => response.json())
            .then(data => {
                // setServicenametemp(JSON.parse(data.servicenames));
                // setserviceqty(JSON.parse(data.serviceqty));
                // if (data.name === "banuka") {
                //     console.log(data.name);
                // }
            })
            .catch(e => console.log(e))
    }

    React.useEffect(() => {
        cartdata()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
            <ImageBackground source={bgImage} style={{ flex: 1, alignItems: 'center',  tintColor: 'cyan', }}>
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
                                return (<Text key={index} style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>{item}</Text>)

                            })}
                        </View>
                        <View style={styles.inputWrap}>
                        {serviceqty.map((item, index) => {
                                tot=tot+item*price[index]
                                amount=tot
                                return (<Text key={index} style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'center' }}>{item*price[index]}</Text>)
                            })}
                        </View>
                    </View>
                    <View style={styles.row}>
                        {/* <TouchableOpacity>
                            <Text style={styles.textButtonupdate}>
                                Update
                            </Text>
                        </TouchableOpacity>
 */}
                        <TouchableOpacity>
                            <Text style={styles.textButtonremove}>
                                Remove
                                </Text>
                        </TouchableOpacity>
                    </View>
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
                        <TouchableOpacity onPress={()=>payBtn()}>
                            <Text style={styles.textButtoncheckout}>
                                Checkout
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </ImageBackground>
        </SafeAreaView>
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





