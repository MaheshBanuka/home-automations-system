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
                        <Text style={{ fontSize: 20 }}>Slider Value = {gateNo}</Text>

                        <View>
                            <Slider
                                step={1}
                                minimumValue={0}
                                maximumValue={100}
                                minimumTrackTintColor="#009688"
                                onValueChange={(ChangedValue) => setGateNo(ChangedValue)}
                                style={{ width: '100%' }}
                            />

                        </View>
                        <TouchableOpacity
                            onPress={() => setLightState('Open')}
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
                            onPress={() => setLightState('Close')}
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
