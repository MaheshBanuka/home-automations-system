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
        <View style={{ marginBottom: 10 }}>
          <Image
            style={{
              width: 373,
              height: 280,
              borderRadius: 30,
              borderWidth: 10,
            }}
            source={require('../../assets/img/img.jpg')}
          />
        </View>
        <View>
          <Hedding style={{fontSize: 30,}}>Welcome!</Hedding>
        </View>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text>Email Address</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={tripId}
              onChangeText={value => setTripId(value)}
              style={{ paddingLeft: 20 }}
              placeholder={'Email Address'}
            />
          </ViewTextInput>
          <View style={{ marginBottom: 10 }}>
            <Text>Password</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={userId}
              onChangeText={value => setUserId(value)}
              style={{ paddingLeft: 20 }}
              secureTextEntry
              placeholder={'Password'}
            />
          </ViewTextInput>
          <Text style={{
            fontSize: 12,
            textAlign: 'center',
            padding: 10,
          }}>foget Password?<Text style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}>
              Click here
        </Text>
          </Text>
          <SubmitButton>Login</SubmitButton>
          <Text style={{
                fontSize: 12,
                textAlign: 'center',
                padding: 10,
              }}>────────  or  ────────</Text>
          <SubmitButton>Sign UP</SubmitButton>
        </View>
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
