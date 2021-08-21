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
import { ModalPicker } from './../components/ModalPicker'
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/img5.jpg';
const DoorControl = props => {
    const { navigation, route } = props;
    const [lightState, setLightState] = useState(0);
    const [gateNo, setGateNo] = useState(0);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const { name, serviceqty, index } = route.params;
    console.log(serviceqty[index]);
    
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
        fetch('http://192.168.8.102:8080/demo_war/onoff', requestOptions)
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
        fetch('http://192.168.8.102:8080/demo_war/onoff', requestOptions)
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
                    <Hedding style={{ color: 'white', }}>Door Control</Hedding>
                    {/*sub heading and desc*/}
                    
                    <View style={styles.extraText}>
                        <Text style={styles.extraTextTo}>────────────────────</Text>
                    </View>

                    {/*<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, marginBottom: 10, textAlign: 'left' }}>Control your lights here</Text>
                    */}
                    <TouchableOpacity>
                            <Text style={styles.textButtonshop}>
                                   Edit Feature  
                            </Text>
                        </TouchableOpacity>
                           
                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', paddingTop: 10,paddingBottom: 20, marginBottom: 10, textAlign: 'left' }}>Room 1</Text>

                        <View style={{ flexDirection: 'row' }}>
                                <View
                                    style={{
                                    width: '100%',
                                    flex: 1,
                                    marginBottom: 20,
                                    marginRight: 5,
                                    }}>
                                    <TouchableOpacity
                                    onPress={() => lighton(5)}
                                    style={[
                                        styles.btn,
                                        lightState === 'Open' ? styles.btnActivate : null,
                                        
                                    ]}>
                                    <Text style={{ fontSize: 20 }}>Lock</Text>
                                    
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{ width: '100%', flex: 1, marginBottom: 20, marginLeft: 5 }}>
                                    <TouchableOpacity
                                    onPress={() => lightoff(5)}
                                    style={[
                                        styles.btn,
                                        lightState === 'Close' ? styles.btnActivate : null,
                                    ]}>
                                    <Text style={{ fontSize: 20 }}>Unlock</Text>
                                    </TouchableOpacity>
                                </View>
                        </View>
                    
                  

                    {/*}
                    <View style={styles.containerButton}>
                        <TouchableOpacity>
                            <Text style={styles.textButton}>
                                Add to cart
                    </Text>
                        </TouchableOpacity>
                    </View>
                                */}
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
        fontSize: 25
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
        alignItems: 'center',
    },
    textButton: {
        padding: 10,
        backgroundColor: '#FF8C00',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
    },

    slider:{

        width: '100%',
        color: 'white',
        paddingBottom: 30,
        paddingTop: 30
    },

    btnActivate: {
        backgroundColor: '#FF8C00',
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
  textButtonshop: {
    padding: 10,
    backgroundColor: 'orange',
    borderRadius: 15,
    color: 'white',
    fontWeight: 'bold',
    
    width: 130,
    fontSize: 20,
    margin: 20,
   
    
},
});
export default DoorControl;





