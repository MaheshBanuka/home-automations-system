import React, { useState, Component } from 'react';
import {
    Slider,
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
// import Seeker from './../screens/Seeker';

const Trip = props => {
    const [lightState, setLightState] = useState(0);
    const [gateNo, setGateNo] = useState(0);
      const lighton = async (id) => {
        var details = {
            'id': id,
            'value': "On_D"
          };
          var formBody = [];
          for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          let formBodydata = formBody.join("&");
          console.log("pressed");
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
          body: formBodydata
        };
        fetch('http://192.168.8.101:8080/demo_war/onoff', requestOptions)
        // .then(response=>console.log(response._bodyBlob))
        .then(response => response.json())
        .then(data => {
          if (data.name === "banuka") {
            console.log(data.name);
          }
        })
        .catch(e => console.log(e))
      }

      const lightoff = async (id) => {
        var details = {
            'id': id,
            'value': "Off_D"
          };
          var formBody = [];
          for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
          }
          let formBodydata = formBody.join("&");
          console.log("pressed");
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
          body: formBodydata
        };
        fetch('http://192.168.8.101:8080/demo_war/onoff', requestOptions)
        // .then(response=>console.log(response._bodyBlob))
        .then(response => response.json())
        .then(data => {
          if (data.name === "banuka") {
            console.log(data.name);
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
                <View style={{ flexDirection: 'row' }}>
                
                    <View
                        style={{
                            width: '100%',
                            flex: 1,
                            marginBottom: 20,
                            marginRight: 5,
                        }}>
                        <TouchableOpacity
                            onPress={() => lighton(1)}
                            style={[
                                styles.btn,
                                lightState === 'Close' ? styles.btnActivate : null,
                            ]}>
                            <Text style={{ fontSize: 20 }}>ON</Text>
                        </TouchableOpacity>
                        
                        {/* <Text style={{ fontSize: 20 }}>Slider Value = {gateNo}</Text> */}

                        {/* <View>
                            <Slider
                                step={1}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#009688"
                                onValueChange={(ChangedValue) => setGateNo(ChangedValue)}
                                style={{ width: '100%' }}
                            />

                        </View> */}
                        <TouchableOpacity
                            onPress={() => lighton(2)}
                            style={[
                                styles.btn,
                                lightState === 'Open' ? styles.btnActivate : null,
                            ]}>
                            <Text style={{ fontSize: 20 }}>ON</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{ width: '100%', flex: 1, marginBottom: 20, marginLeft: 5 }}>
                        <TouchableOpacity
                            onPress={() => lightoff(1)}
                            style={[
                                styles.btn,
                                lightState === 'Close' ? styles.btnActivate : null,
                            ]}>
                            <Text style={{ fontSize: 20 }}>OFF</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => lightoff(2)}
                            style={[
                                styles.btn,
                                lightState === 'Close' ? styles.btnActivate : null,
                            ]}>
                            <Text style={{ fontSize: 20 }}>OFF</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
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
});

export default Trip;
