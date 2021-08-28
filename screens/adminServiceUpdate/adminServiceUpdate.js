import React, { useState } from 'react';
import {
    View,
    ImageBackground,
    TouchableOpacity,
    StatusBar,
    SafeAreaView,
    StyleSheet,
    Text
} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/adminUserManagement.jpg';
const adminServiceUpdate = props => {
    const { navigation,route } = props;
    const { name } = route.params;
    const [servicename, setServicename] = useState([])
    const [serviceid, setServieid] = useState([])
    const [servicecost, setServiecost] = useState([])
    
    const servicedata = async () => {
        var details = {

        };
        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        let formBodydata = formBody.join("&");
        console.log("done");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: formBodydata
        };
        fetch('http://192.168.8.100:8080/demo_war/viewservice', requestOptions)
            .then(response => response.json())
            .then(data => {
                setServicename(JSON.parse(data.servicenames));
                setServieid(JSON.parse(data.serviceid));
                setServiecost(JSON.parse(data.servicecost));
            })
            .catch(e => console.log(e))
    }
    React.useEffect(() => {
        servicedata()
    }, [])

    const displayNumber = () => {
        let tempList = []
        for (let i = 0; i < serviceid.length; i++) {
            tempList.push(
                <View key={i} style={styles.row}>
                    <View key={i+1} style={styles.inputWrap}>
                        <Text key={i+2} style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingRight: 0, textAlign: 'center',paddingLeft: 20 }}>{servicename[i]}</Text>
                    </View>
                    <TouchableOpacity key={i+3} onPress={() => { navigation.navigate('adminAddService',{name: name,servicename:servicename[i],serviceid:serviceid[i],servicecost:servicecost[i]}); }}>
                        <Text key={i+4} style={styles.textButtonupdate}>
                            Update
                        </Text>
                    </TouchableOpacity>
                </View>
            )
        }
        return tempList;
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>{name}</Text>
                        {/* <Icon name="person" size={35} style={{ paddingTop: 0, color: 'white' }} /> */}
                    </View>
                    <Hedding style={{ color: 'orange', fontWeight: 'bold', fontSize: 40, padding: 30 }}>Service Management</Hedding>

                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -30, textAlign: 'center' }}>Existing Services</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: 60, textAlign: 'center' }}>Actions</Text>
                        </View>
                    </View>
                    {displayNumber()}
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

    textButtonupdate: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        margin: 7,
        fontWeight: 'bold',
        justifyContent: 'center',
        marginLeft: 130,
        marginRight: 40,
        fontSize: 15,
    },
    containerButtonAdd: {
        marginTop: 10,
        alignItems: 'center',
        alignContent: 'center',

    },

    textButtonadd: {
        padding: 10,
        backgroundColor: '#1E90FF',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 240,
        width: 170,
        fontSize: 20,
        paddingLeft: 25,


    },


});
export default adminServiceUpdate;





