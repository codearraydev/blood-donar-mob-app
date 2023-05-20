import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, ActivityIndicator, TextInput, Image, Alert, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgMap, SvgNoData } from '../../components/svg';
import AppointmentCard from './AppointmentCard';
import { getUserAsyncData } from '../../shared/core/DataStore'
import UpComingEvents from './UpComingEvents';
import { useFocusEffect } from '@react-navigation/native';


const Events = ({ navigation }) => {
    const [loadEvent, setLoadEvent] = useState(false)
    const [eventList, setEventList] = useState()


    const loadMyEvents = () => {
        setLoadEvent(true)
        getUserAsyncData().then((res => {

            console.log("events reddddddddddddddd", res)

            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getMyEvents/" + res.organizationID + "/" + res.id, requestOptions)
                .then(result => result.json())
                .then(result => {
                    setLoadEvent(false)
                    console.log("events ", JSON.stringify(result))
                    if (result.status == 1) {
                        console.log("Successss")
                        setEventList(result.data.events)
                    }
                    else if (result.status == 0) {
                        console.log("status 0")
                        // Alert.alert("No appointment")
                    }

                })
                .catch(error => console.log('error', error));
        }))
    }
   

    useFocusEffect(
        React.useCallback(() => {
            loadMyEvents()
        }, [])
    );

    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                    <View style={styles.top}>
                        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                            <SvgBackArrow />
                        </TouchableOpacity>
                        <Text style={styles.headtxt}>Upcoming Events</Text>
                    </View>
                    {loadEvent && <ActivityIndicator color={'blue'} size={'large'} />}
                    <FlatList
                        style={{ width: '100%' }}
                        data={eventList}
                        renderItem={({ item }) =>
                            <UpComingEvents eventsDetails={item} navigation={navigation} />
                        }
                        keyExtractor={item => Math.random().toString()}
                    />



                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Events

const styles = StyleSheet.create({
    Mview:
    {
        flex: 1,
        backgroundColor: '#F3F3F3',
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
        marginLeft: 60
    },
    norecord: {
        alignItems: 'center',
        padding: 90
    },
    recordtxt: {
        fontSize: 20,
        color: "#363636",
    },
})