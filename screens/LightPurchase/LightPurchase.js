import React, { useState, useEffect } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    Modal
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from './../../assets/img/light.jpg';
import { Bluetooth } from '@material-ui/icons';
const LightPurchase = props => {
    const { navigation, route } = props;
    const { name, servicenum } = route.params;
    // const [name,setName] = useState('Banuka');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: '4', value: 4 },
        { label: '5', value: 5 },
        { label: '6', value: 6 },
        { label: '7', value: 7 },
        { label: '8', value: 8 },
        { label: '9', value: 9 },
        { label: '10', value: 10 },
        { label: 'Custom', value: 11 }
    ]);
    const data = [{
        title: 'Light On/Off',
        dis: 'Having an automatic home light control system will let you turn the lights on and off with just a tap of a button. Choose a quanitity and name the features according to your reference .'
    },
    {
        title: 'Light Dimmer',
        dis: 'Control your light"s brightness anytime and access variations of your home"s lightning . Control any number of lights you prefer through your fingertips.'
    },
    {
        title: 'Fan Control',
        dis: 'Feel the wind just the way you want it and access all your fans through fingertips'
    },
    {
        title: 'Sensor',
        dis: 'Feel afraid? Did anyone get in here? No. Not at all without you knowing. Sense every step within your area just through your fingertips.'
    },
    {
        title: 'Water Tank',
        dis: 'Don"t give command or be commanded to turn off and on the water tank and no wastage of water again. Control your water tank easily.'
    }]

    useEffect(() => {
        for (let index = 0; index < 4; index++) {
            <Hedding style={{ color: 'white', }}>{data[servicenum].title}</Hedding>
        console.log(data[index].dis)
        }
    }, [])
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
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Dashbord');
                        }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: -50, color: 'white', paddingTop: 0 }}>Back</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>{name}</Text>
                        {/* <Icon name="person" size={35} style={{ paddingTop: 0, color: 'white' }} /> */}
                    </View>
                    <Hedding style={{ color: 'white', }}>{data[servicenum].title}</Hedding>
                    <Text style={{ color: 'white', fontSize: 14, justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 10 }}>
                        {data[servicenum].dis}
                    </Text>
                    <View style={styles.extraText}>
                        <Text style={styles.extraTextTo}>────────────────────</Text>
                    </View>

                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 80, marginBottom: 10, textAlign: 'left' }}>Put Your Quanitity :</Text>

                    <View>
                        {/* <Text>Select your quantity = {value}</Text> */}
                        <DropDownPicker
                            open={open}
                            value={value}
                            items={items}
                            setOpen={setOpen}
                            setValue={setValue}
                            setItems={setItems}
                            style={styles.dp}
                        />
                    </View>
                    {/*      
                    
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 30, paddingLeft: 20, textAlign: 'left' }}>Feature 1 :</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <TextInput
                                style={styles.input}
                                placeholder='eg. som' />
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 20, textAlign: 'left' }}>Price</Text>
                        </View>
                        <View style={styles.inputWrapText}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -10, marginRight: 33 }}>48,000LKR</Text>
                        </View>
                    </View>*/}
                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('addFeature', { value: value,name:name });
                        }}>
                            <Text style={styles.textButton}>
                                Add to cart
            </Text>
                        </TouchableOpacity>
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
        paddingTop: 30,
        width: 200,
    },
    textButton: {
        padding: 10,
        backgroundColor: '#FF8C00',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',

        alignItems: 'center',
    },
    dp: {
        color: 'white',
        backgroundColor: '#00BFFF',
    }
});
export default LightPurchase;





