import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    TextInput,
    Linking,
    Dimensions,
} from 'react-native';

import SubmitButton from '../../components/SubmitButton';
import Hedding from '../../components/Hedding';
import ViewTextInput from '../../components/ViewTextInput';

const Home = props => {
    const { navigation } = props;
    const [tripId, setTripId] = useState('');
    const [userId, setUserId] = useState('');
    return (

        <SafeAreaView style={{ backgroundColor: 'white' }}>
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
                        value={tripId}
                        onChangeText={value => setTripId(value)}
                        style={{ paddingLeft: 20 }}
                        placeholder={'User Name'}
                    />
                </ViewTextInput>
                <View style={{ marginBottom: 10 }}>
                    <Text>Email Address</Text>
                </View>
                <ViewTextInput >
                    <TextInput
                        value={tripId}
                        onChangeText={value => setTripId(value)}
                        style={{ paddingLeft: 20 }}
                        placeholder={'Email Address'}
                    />
                </ViewTextInput>
                <View style={{ marginBottom: 10 }}>
                    <Text>Phone Number</Text>
                </View>
                <ViewTextInput >
                    <TextInput
                        value={tripId}
                        onChangeText={value => setTripId(value)}
                        style={{ paddingLeft: 20 }}
                        placeholder={'Phone Number'}
                    />
                </ViewTextInput>
                <View style={{ marginBottom: 10 }}>
                    <Text>Address</Text>
                </View>
                <ViewTextInput >
                    <TextInput
                        value={tripId}
                        onChangeText={value => setTripId(value)}
                        style={{ paddingLeft: 20 }}
                        placeholder={'Address'}
                    />
                </ViewTextInput>
                <View style={{ marginBottom: 10 }}>
                    <Text>Password</Text>
                </View>
                <ViewTextInput >
                    <TextInput
                        value={tripId}
                        onChangeText={value => setTripId(value)}
                        style={{ paddingLeft: 20 }}
                        placeholder={'Password'}
                    />
                </ViewTextInput>
                <View style={{ marginBottom: 10 }}>
                    <Text>Confirm Password</Text>
                </View>
                <ViewTextInput >
                    <TextInput
                        value={tripId}
                        onChangeText={value => setTripId(value)}
                        style={{ paddingLeft: 20 }}
                        placeholder={'Confirm Password'}
                    />
                </ViewTextInput>
                <SubmitButton
                    onPress={() => {
                        console.log('asdasdasd');
                        navigation.navigate('Trip');
                        // navigation.reset({
                        //   index: 0,
                        //   routes: [
                        //     {
                        //       name: 'Trip',
                        //       params: { tripId, userId },
                        //     },
                        //   ],
                        // });
                    }}

                >Sign Up</SubmitButton>
                
                <Text style={{
                    fontSize: 12,
                    textAlign: 'center',
                    padding: 10,
                }}>Already Have Account?
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL('http://google.com')}>
                        Login here
                </Text>
                </Text>
            </View>
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

export default Home;
