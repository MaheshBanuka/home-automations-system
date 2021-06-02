import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  BackHandler,
  Dimensions,
} from 'react-native';

const Complete = props => {
  const {navigation} = props;
  const [tripId, setTripId] = useState('');
  const [userId, setUserId] = useState('');
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View
        style={{
          marginTop: 20,
          minHeight: Dimensions.get('window').height,
          marginHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <View style={{marginBottom: 50}}>
          <Image
            style={{width: 150, height: 100}}
            source={require('../assets/images/logo2.jpg')}
          />
        </View>
        <View style={{width: '100%', marginBottom: 40}}>
          <Text style={{fontSize: 40}}>Trip Completed..</Text>
        </View>
        <View>
          <View style={{width: '100%', marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => {
                console.log(tripId, userId);
                // navigation.navigate('Trip', {user: {tripId, userId}});
                navigation.reset({
                  index: 0,
                  routes: [
                    {
                      name: 'Home',
                    },
                  ],
                });
              }}
              style={{
                height: 40,
                borderRadius: 50,
                width: '100%',
                backgroundColor: '#dc4d4d',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 20}}>Start A New Trip.</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', marginBottom: 20}}>
            <TouchableOpacity
              onPress={() => BackHandler.exitApp()}
              style={{
                height: 40,
                borderRadius: 50,
                width: '100%',
                backgroundColor: '#dc4d4d',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
              }}>
              <Text style={{fontSize: 20}}>Finish</Text>
            </TouchableOpacity>
          </View>
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

export default Complete;
