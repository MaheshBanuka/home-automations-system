import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    Text,
    Slider
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/light.jpg';

const BrightnessControl = () => {

    const [lightState, setLightState] = useState('Open');
    const [gateNo, setGateNo] = useState(0);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);

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
                    <Hedding style={{ color: 'white', }}>Light Control</Hedding>
                    <View style={styles.extraText}>
                        <Text style={styles.extraTextTo}>────────────────────</Text>
                    </View>
                    {/*<Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, marginBottom: 10, textAlign: 'left' }}>Control your lights here</Text>
                    */}
                    <View>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>Brightness Level = {gateNo}</Text>
                        <Slider
                            step={1}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor="#009688"
                            onValueChange={(ChangedValue) => setGateNo(ChangedValue)}
                            style={styles.slider}
                        />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingBottom: 20, marginBottom: 10, textAlign: 'left' }}>On Off Lights</Text>
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

    slider: {

        width: 200,
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
});
export default BrightnessControl;





