import React, { useState } from 'react';
import {
    View, 
    ImageBackground, 
    TouchableOpacity, 
    StatusBar, 
    SafeAreaView, 
    StyleSheet, 
    Text, 
    Alert
} from 'react-native';
import { ModalPicker } from '../../components/ModalPicker'
import DropDownPicker from 'react-native-dropdown-picker';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Hedding from '../../components/Hedding';
import bgImage from '../../assets/img/adminUserManagement.jpg';
const adminUserManagement = () => {
    const [username, setUsername] = useState([])
    const [userid, setUserid] = useState([])

    const userdata = async () => {
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
        fetch('http://192.168.8.100:8080/demo_war/viewuser', requestOptions)
            .then(response => response.json())
            .then(data => {
                setUsername(JSON.parse(data.usernames));
                setUserid(JSON.parse(data.userid));
            })
            .catch(e => console.log(e))
    }
    React.useEffect(() => {
        userdata()
    }, [])

    const displayNumber = () => {
        let tempList = []
        for (let i = 0; i < username.length; i++) {
            tempList.push(
                <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 18, color: 'white', paddingTop: 10, paddingLeft: 70, textAlign: 'auto' }}>{i+1}.{username[i]}</Text>
                        </View>
                        <TouchableOpacity onPress={() => { banneduser(userid[i]) }}>
                            <Text style={styles.textButtonbanned}>
                                   Banned 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { useractive(userid[i]) }}>
                            <Text style={styles.textButtonactive}>
                                   Active 
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { userdelete(userid[i]) }}>
                            <Text style={styles.textButtondelete}>
                                   Delete 
                            </Text>
                        </TouchableOpacity>                                            
                    </View>
            )
        }
        return tempList;
    }

    const banneduser = async (id) => {
        
        var details = {
            'userid':id
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
        fetch('http://192.168.8.100:8080/demo_war/userbanned', requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data.result)
                if(data.result == '"Banned Success"'){
                    Alert.alert(
                        "Message",
                        "User Banned Successfully",
                        [
                          { text: "OK" }
                        ]
                      );
                }
                else {
                    Alert.alert(
                        "Message",
                        "User Banned Failed",
                        [
                          { text: "OK" }
                        ]
                      );
                }
            })
            .catch(e => console.log(e))
    }

    const useractive = async (id) => {
        var details = {
            'userid':id
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
        fetch('http://192.168.8.100:8080/demo_war/useractive', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.result == '"active Success"'){
                    Alert.alert(
                        "Message",
                        "User Actived Successfully",
                        [
                          { text: "OK" }
                        ]
                      );
                }
                else {
                    Alert.alert(
                        "Message",
                        "User Actived Failed",
                        [
                          { text: "OK" }
                        ]
                      );
                }
            })
            .catch(e => console.log(e))
    }

    const userdelete = async (id) => {
        var details = {
            'userid':id
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
        fetch('http://192.168.8.100:8080/demo_war/userdelete', requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.result == '"Delete Success"'){
                    Alert.alert(
                        "Message",
                        "User Delete Successfully",
                        [
                          { text: "OK" }
                        ]
                      );
                }
                else {
                    Alert.alert(
                        "Message",
                        "User Delete Failed",
                        [
                          { text: "OK" }
                        ]
                      );
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
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 170, color: 'white', paddingTop: 0 }}>Admin</Text>
                        {/* <Icon name="person" size={35} style={{ paddingTop: 0, color: 'white' }} /> */}
                    </View>
                    <Hedding style={{ color: 'orange', fontWeight: 'bold', fontSize: 40, padding: 30 }}>User Management</Hedding>
                    <View style={styles.row}>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -30, textAlign: 'center' }}>List of Users</Text>
                        </View>
                        <View style={styles.inputWrap}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 10, paddingLeft: -40, textAlign: 'center' }}>Actions</Text>
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
        marginLeft: -70,
        justifyContent: 'center'
    },
    

    textButtoncheckout: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 275,
        width: 107,
        fontSize: 20,
        
    },
    textButtonbanned: {
        padding: 10,
        backgroundColor: 'orange',
        borderRadius: 15,
        color: 'white',
        fontWeight: 'bold',
        justifyContent: 'center',
        margin: 7,  
        fontSize: 15,
       
    },
    textButtonactive: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 15,
        color: 'white',
        margin: 7,   
        fontWeight: 'bold',
        justifyContent: 'center',
    
        fontSize: 15,
    },

    textButtondelete: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 15,
        color: 'white',
        margin: 7,   
        fontWeight: 'bold',
        justifyContent: 'center',
        
        fontSize: 15,
    },

});
export default adminUserManagement;





