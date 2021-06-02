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
          <Hedding style={{fontSize: 30,}}>Reset Password</Hedding>
        </View>
        <View>
          <View style={{ marginBottom: 10 }}>
            <Text>Verification Code</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={tripId}
              onChangeText={value => setTripId(value)}
              style={{ paddingLeft: 20 }}
              placeholder={'Verification Code'}
            />
          </ViewTextInput>
          <View style={{ marginBottom: 10 }}>
            <Text>New Password</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={userId}
              onChangeText={value => setUserId(value)}
              style={{ paddingLeft: 20 }}
              secureTextEntry
              placeholder={'New Password'}
            />
          </ViewTextInput>
          <View style={{ marginBottom: 10 }}>
            <Text>Confirm Password</Text>
          </View>
          <ViewTextInput>
            <TextInput
              value={userId}
              onChangeText={value => setUserId(value)}
              style={{ paddingLeft: 20 }}
              secureTextEntry
              placeholder={'Confirm Password'}
            />
          </ViewTextInput>
          <Text style={{
            fontSize: 12,
            textAlign: 'center',
            padding: 10,
          }}>Didn't Recived The Code?<Text style={{ color: 'blue' }}
            onPress={() => Linking.openURL('http://google.com')}>
              Click here
        </Text>
        <Text>To Send Code Again</Text>
          </Text>
          <SubmitButton>Reset Password</SubmitButton>
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
