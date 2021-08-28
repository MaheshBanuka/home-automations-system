import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Dimensions,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';

import SubmitButton from '../../components/SubmitButton';
import Hedding from '../../components/Hedding';
import ViewTextInput from '../../components/ViewTextInput';
import ValidationComponent from 'react-native-form-validator';

const Signup = props => {
    const { navigation, route } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    var details = {
        'name': name,
        'email': email,
        'phone': phone,
        'address': address,
        'password': password
    };


    const emailRef = useRef();
    const phoneNUmberRef = useRef();
    const addressRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    let formBodydata = formBody.join("&");
    const loginHandler = async () => {
        // console.log("formState.email");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: formBodydata
        };
        fetch('http://192.168.8.100:8080/demo_war/user', requestOptions)
            // .then(response=>console.log(response._bodyBlob))
            .then(response => response.json())
            .then(data => {
                console.log(data.Response)
                if (data.Response === "testUser Registerd") {
                    Alert.alert(
                        "Message",
                        "User Registerd Successfully",
                        [
                            { text: "OK", onPress: () => navigation.navigate('login') }
                        ]
                    );
                }
                else {
                    Alert.alert(
                        "Message",
                        "User Registerd Failed",
                        [
                            { text: "OK" }
                        ]
                    );
                }
            })
            .catch(e => console.log(e))
    }

    const validateEmail = () => {

        // reg ex
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (reg.test(email.trim()) === true) {

            console.log(email, 'is a valid email')
        }
        else {

            alert(' not a valid email')
            setEmail('')
        }
    }

    const validatePhone = () => {

        // reg ex
        // const reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,10}$/;
        const reg = /^(?:7|0|(?:\+94))[0-9]{9,10}$/;

        if (reg.test(phone.trim()) === true) {

            console.log(phone, 'is a valid phone')
        }
        else {

            alert(' not a valid Phone Number')
            setPhone('')
        }
    }

    
    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
            {/* <KeyboardAvoidingView behavior={(Platform.OS === 'ios' ? "padding" : null)} enabled keyboardVerticalOffset={200}> */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                <ScrollView
                    style={{
                        marginTop: 20,
                        minHeight: Dimensions.get('window').height,
                        marginHorizontal: 10,
                        backgroundColor: 'white',
                    }}>
                    <View
                        style={{
                            marginTop: 20,
                            minHeight: Dimensions.get('window').height,
                            marginHorizontal: 10,
                            backgroundColor: 'white',
                        }}>
                        <View>
                            <Hedding style={{ fontSize: 30, }}>Create Your Account</Hedding>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <Text>User Name</Text>
                        </View>
                        <ViewTextInput >
                            <TextInput
                                value={name}
                                returnKeyType='next'
                                onChangeText={value => setName(value)}
                                onSubmitEditing={() => {
                                    emailRef.current.focus();

                                }}
                                style={{ paddingLeft: 20 }}
                                placeholder={'User Name'}
                            />
                        </ViewTextInput>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Email Address</Text>
                        </View>
                        <ViewTextInput >
                            <TextInput
                                value={email}
                                ref={emailRef}
                                keyboardType='email-address'
                                onChangeText={value => setEmail(value)}
                                style={{ paddingLeft: 20 }}
                                returnKeyType='next'
                                
                                onSubmitEditing={() => {
                                    validateEmail()
                                    phoneNUmberRef.current.focus();
                                }}
                                onEndEditing={() => {
                                    validateEmail()
                                }}
                                placeholder={'Email Address'}
                            />
                        </ViewTextInput>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Phone Number</Text>
                        </View>
                        <ViewTextInput >
                            <TextInput
                                value={phone}
                                onChangeText={value => setPhone(value)}
                                style={{ paddingLeft: 20 }}
                                placeholder={'Phone Number'}
                                ref={phoneNUmberRef}
                                keyboardType='phone-pad'
                                returnKeyType='next'
                                
                                onSubmitEditing={() => {
                                    validatePhone()
                                    addressRef.current.focus();
                                }}
                                onEndEditing={() => {
                                    validatePhone()
                                }}
                            />
                        </ViewTextInput>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Address</Text>
                        </View>
                        <ViewTextInput >
                            <TextInput
                                value={address}
                                onChangeText={value => setAddress(value)}
                                style={{ paddingLeft: 20 }}
                                placeholder={'Address'}
                                ref={addressRef}
                                keyboardType='default'
                                returnKeyType='next'
                                onSubmitEditing={() => {
                                    passwordRef.current.focus();

                                }}
                            />
                        </ViewTextInput>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Password</Text>
                        </View>
                        <ViewTextInput >
                            <TextInput
                                value={password}
                                onChangeText={value => setPassword(value)}
                                style={{ paddingLeft: 20 }}
                                placeholder={'Password'}
                                ref={passwordRef}
                                keyboardType='default'
                                returnKeyType='next'
                                onSubmitEditing={() => {
                                    confirmPasswordRef.current.focus();

                                }}
                            />
                        </ViewTextInput>
                        <View style={{ marginBottom: 10 }}>
                            <Text>Confirm Password</Text>
                        </View>
                        <ViewTextInput >
                            <TextInput
                                value={cpassword}
                                onChangeText={value => setCpassword(value)}
                                style={{ paddingLeft: 20 }}
                                placeholder={'Confirm Password'}
                                ref={confirmPasswordRef}
                                keyboardType='default'
                                returnKeyType='done'
                                onSubmitEditing={() => {
                                

                                }}
                            />
                        </ViewTextInput>
                        <SubmitButton
                            // onPress={() => {
                            //     console.log('asdasdasd');
                            //     navigation.navigate('Trip');
                            // navigation.reset({
                            //   index: 0,
                            //   routes: [
                            //     {
                            //       name: 'Trip',
                            //       params: { tripId, userId },
                            //     },
                            //   ],
                            // });
                            // }}
                            onPress={async () => {
                                await loginHandler();
                            }}
                        >Sign Up</SubmitButton>

                        <Text style={{
                            fontSize: 12,
                            textAlign: 'center',
                            padding: 10,
                        }}>Already Have Account?
                    <Text style={{ color: 'blue' }}
                                onPress={() => {
                                    navigation.navigate('login');
                                }}>
                                Login here
                </Text>
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 5,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
});

export default Signup;
