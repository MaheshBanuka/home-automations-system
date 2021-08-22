import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
} from 'react-native';

import SubmitButton from '../../components/SubmitButton';
import Hedding from '../../components/Hedding';
import ViewTextInput from '../../components/ViewTextInput';
import { async } from 'node-stream-zip';

const login = props => {
  
  const { navigation } = props;
  const [name, setName] = useState('');
  const [nameu, setNameu] = useState('');
  const [password, setPassword] = useState('');
  var details = {
    'name': name,
    'password': password
  };
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  let formBodydata = formBody.join("&");
  const loginHandler = async () => {
    // console.log("aasdasd")
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
      body: formBodydata
    };
    fetch('http://192.168.8.100:8080/demo_war/login', requestOptions)
      // .then(response=>console.log(response._bodyBlob))
      .then(response => response.json())
      .then(data => {
        
        setNameu(data.name)
        const servicenames=JSON.parse(data.servicenames)
        const serviceqty=JSON.parse(data.serviceqty)
        if (data.name === "banuka") {
          navigation.navigate('adminWelcome',{name: name});
          console.log(data.name);
          // navigation.navigate('Dashbord');
          
          // navigation.reset({
          //     index: 0,
          //     routes: [
          //       {
          //         name: 'Trip',
          //         params: { name },
          //       },
          //     ],
          //   });
        }
        else{
          navigation.navigate('Dashbord', {name: name,servicenames:servicenames,serviceqty:serviceqty});
        }
      })
      .catch(e => console.log(e))
  }
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
          <Hedding style={{ fontSize: 30, }}>Welcome!</Hedding>
        </View>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text>Email Address</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={name}
              onChangeText={value => setName(value)}
              style={{ paddingLeft: 20 }}
              placeholder={'Email Address'}
            />
          </ViewTextInput>
          <View style={{ marginBottom: 10 }}>
            <Text>Password</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={password}
              onChangeText={value => setPassword(value)}
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
            onPress={() => {
              navigation.navigate('ResetPassword');
            }}>
              Click here
        </Text>
          </Text>
          <SubmitButton onPress={async () => {
            await loginHandler();
            // navigation.navigate('Dashbord');
            // navigation.navigate('Dashbord', {name: name});
          }}>Login</SubmitButton>
          <Text style={{
            fontSize: 12,
            textAlign: 'center',
            padding: 10,
          }}>────────  or  ────────</Text>
          <SubmitButton onPress={() => {
            navigation.navigate('Signup');
          }}>Sign UP</SubmitButton>
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

export default login;
