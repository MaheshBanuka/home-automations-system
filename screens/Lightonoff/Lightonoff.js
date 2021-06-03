import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const Trip = props => {
    const [lightState, setLightState] = useState('Open');

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
