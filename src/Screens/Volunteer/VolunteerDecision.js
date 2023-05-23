import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import { SvgBackArrow } from '../../components/svg';
import { getUserAsyncData } from '../../shared/core/DataStore'

const VolunteerDecision = (props) => {

    const [ride, setRide] = useState()
    const [position, setPosition] = useState({
        latitude: 10,
        longitude: 10,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
    });
    // useEffect(()=>{
    //     setPosition({
    //         latitude: props.route.params.lat,
    //         longitude: props.route.params.lng,
    //         latitudeDelta: 0.001,
    //         longitudeDelta: 0.001,
    //     })
    // },[props.route.params])
    useEffect(() => {
        Geolocation.getCurrentPosition((pos) => {
            const crd = pos.coords;
            setPosition({
                latitude: crd.latitude,
                longitude: crd.longitude,
                latitudeDelta: 0.0421,
                longitudeDelta: 0.0421,
            });
        })
        // .catch((err) => {
        //   console.log(err);
        // });
    }, []);

    const RideDetail = (ridestatus) => {
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        getUserAsyncData().then((res => {
            var raw = JSON.stringify({
                "id": props.route.params.id,
                "volunteerID": res.id,

                "rideResponse": ridestatus? "accepted":"rejected"
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/rideResponse", requestOptions)
                .then(response => response.json())
                .then(result => {console.log(result)
                setRide(result)})
                .catch(error => console.log('error', error));
        }))
    }
    return (
        <View style={styles.Mview}>
            <View style={styles.top}>
                <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
                    <SvgBackArrow />
                </TouchableOpacity>
                <Text style={styles.headtxt}>Ride Detail</Text>
            </View>
            <MapView
                style={{ height: 200, width: 340, marginTop: 10 }}
                initialRegion={{
                    latitude: position.latitude,
                    longitude: position.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,

                }}

            >
                <Marker
                    title='Pickup location'
                    coordinate={{ latitude: position.latitude, longitude: position.longitude }}
                // image={{ uri: 'custom_pin' }}
                />
            </MapView>
            <View style={styles.dview}>
                <View style={styles.detail}>
                    <Text style={styles.txt1}>Name</Text>
                    <Text style={styles.txt}>{props.route.params.name}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.txt1}>Phone</Text>
                    <Text style={styles.txt}>{props.route.params.phone}</Text>
                </View>
            </View>
            <View style={styles.btnview}>
                
                {(ride?.status!=1)?<>
                <TouchableOpacity style={styles.continuebtn} onPress={() => RideDetail(true)}>
                    <Text style={styles.continuetxt}>Accept Request</Text>

                </TouchableOpacity>
                <TouchableOpacity style={styles.continuebtn} onPress={() => RideDetail(false)}>
                    <Text style={styles.continuetxt}>Reject Request</Text>

                </TouchableOpacity>
                </>:
                <Text>{ride?.message}</Text>}
            </View>

        </View>
    )
}

export default VolunteerDecision

const styles = StyleSheet.create({
    Mview: {
        alignItems: 'center',

    },
    top: {
        width: '90%',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headtxt: {
        color: '#363636',
        fontSize: 18,
        marginLeft: 80
    },
    continuebtn: {
        height: 38,
        borderRadius: 10,
        width: "47%",
        marginTop: 25,
        backgroundColor: '#FF478C',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,

    },
    continuetxt: {
        color: '#FFFFFF',
        fontSize: 18,
        //fontFamily: 'Nunito Sans',
        fontWeight: '700'
    },
    btnview: {
        flexDirection: 'row',
        width: '95%',
        justifyContent: 'space-between',

    },
    dview: {
        height: 100,
        width: '95%',
        backgroundColor: '#ffff',
        elevation: 5,
        borderRadius: 8,
        marginVertical: 20,
        alignItems: 'center',
        // justifyContent:'center'
    },
    detail: {
        flexDirection: 'row',
        width: '85%',
        marginTop: 18,
        alignItems: 'center'

    },
    txt: {
        marginLeft: 30,
        color: '#504F4F',
        fontSize: 12
    },
    txt1: {
        fontSize: 14,
        color: '#878787',
    },
})