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
  Dimensions,
} from 'react-native';

const Trip = props => {
  const {navigation, route} = props;
  const {tripId, userId} = route.params;
  console.log(tripId, userId);
  const [gateNo, setGateNo] = useState(1);
  const [gateState, setGateState] = useState('Open');
  const [gateMan, setGateMan] = useState('Available');
  const [countDir, setCountDir] = useState(true);
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState('Next');

  const nextHandler = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'header eka daaana',
    );

    var formdata = new FormData();
    formdata.append('Trip_Id', tripId);
    formdata.append('User_Id', userId);
    formdata.append('Gate_No', gateNo);
    formdata.append('Gate', gateState);
    formdata.append('Gate_Man', gateMan);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'sheet url with key',
      requestOptions,
    )
      .then(response => {
        console.log(response.status);
        if (response.status === 200) {
          if (gateNo > 0 && gateNo <= 25 && countDir) {
            setGateNo(prev => prev + 1);
            if (gateNo === 25) {
              setCountDir(false);
            }
          } else if (gateNo > 0 && gateNo < 27 && !countDir) {
            if (gateNo === 1 && !countDir) {
              console.log('finish');
              navigation.navigate('Complete');
            } else {
              setGateNo(prev => prev - 1);
            }
          }
        }
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log('error', error);
      });
  };
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
        <View style={{marginBottom: 10}}>
          <Text style={{fontSize: 20}}>
            Please select whether GATE is OPEN or NOT and GATE Operator is
            AVAILABLE or NOT
          </Text>
        </View>
        <View style={{width: '100%'}}>
          <View style={{marginBottom: 20, width: '100%'}}>
            <Text style={{fontSize: 30, alignSelf: 'center'}}>
              GATE NO {gateNo}
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '100%',
                flex: 1,
                marginBottom: 20,
                marginRight: 5,
              }}>
              <TouchableOpacity
                onPress={() => setGateState('Open')}
                style={[
                  styles.btn,
                  gateState === 'Open' ? styles.btnActivate : null,
                ]}>
                <Text style={{fontSize: 20}}>Open</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{width: '100%', flex: 1, marginBottom: 20, marginLeft: 5}}>
              <TouchableOpacity
                onPress={() => setGateState('Close')}
                style={[
                  styles.btn,
                  gateState === 'Close' ? styles.btnActivate : null,
                ]}>
                <Text style={{fontSize: 20}}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{width: '100%'}}>
          <View style={{marginBottom: 20, width: '100%'}}>
            <Text style={{fontSize: 30, alignSelf: 'center'}}>GATE MAN</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: '100%',
                flex: 1,
                marginBottom: 20,
                marginRight: 5,
              }}>
              <TouchableOpacity
                onPress={() => setGateMan('Available')}
                style={[
                  styles.btn,
                  gateMan === 'Available' ? styles.btnActivate : null,
                ]}>
                <Text style={{fontSize: 20}}>Available</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{width: '100%', flex: 1, marginBottom: 20, marginLeft: 5}}>
              <TouchableOpacity
                onPress={() => setGateMan('Not Available')}
                style={[
                  styles.btn,
                  gateMan === 'Not Available' ? styles.btnActivate : null,
                ]}>
                <Text style={{fontSize: 20}}>Not Available</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{width: '100%', marginBottom: 20}}>
          <TouchableOpacity
            disabled={loading}
            onPress={nextHandler}
            // onPress={() => navigation.navigate('Complete')}
            style={{
              height: 40,
              borderRadius: 50,
              width: '100%',
              backgroundColor: '#dc4d4d',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <Text style={{fontSize: 20, color: 'white'}}>{btnText}</Text>
          </TouchableOpacity>
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
  btnActivate: {
    backgroundColor: 'green',
  },
  btnInactive: {},
  title: {
    fontSize: 20,
    marginVertical: 5,
  },
  btn: {
    height: 40,
    borderRadius: 50,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 3,
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

export default Trip;
