import { StyleSheet, Text, View, TouchableOpacity, Image, Alert,ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment'
import { SvgMap, SvgPicker, SvgTick, SvgTime } from '../../components/svg'
import { getUserAsyncData } from '../../shared/core/DataStore'
const UpComingEvents = (props) => {
    const [eventList, setEventList] = useState('')
    const [loading, setLoading] = useState(false);
    const joinEvent = () => {
        getUserAsyncData().then((res => {

            console.log("events", res)

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            setLoading(true)
            var raw = JSON.stringify({
                "organizationID": res.organizationID,
                "EventID": props.eventsDetails.EventID,
                "donorID": res.id
            });
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/joinEvent", requestOptions)
                .then(result => result.json())
                .then(result => {
                    setLoading(false)
                    console.log("events ", result)
                    if (result.status == 1) {
                        Alert.alert(result.message)
                    }
                    else if (result.status == 0) {
                        console.log("status 0")
                    }
                })
                .catch(error => {
                    console.log('error', error)
                    setLoading(false)
                });
        }))
    }
    return (
        <View style={styles.midview}>
            <View>
                <Image
                    style={styles.imgview}
                    source={{
                        uri: 'https://picsum.photos/200/300?random=1',
                    }}
                />
            </View>
            <View style={styles.detail}>
                <Text style={styles.detailtxt}>
                    {props.eventsDetails.eventName}
                </Text>
               {(props.eventsDetails.joinedByDonor == "no")? <TouchableOpacity style={styles.uview} onPress={() => joinEvent()}>
                   
                    <Text style={styles.utxt}> {loading ? <ActivityIndicator color={'#4ca400'} /> : 'join now'}</Text>
                </TouchableOpacity>:
                <View style={styles.uview}>
                    <SvgTick/>
                </View>
                }
            </View>
            <View style={styles.lview}>
                <View style={styles.icon}>
                    <SvgMap color={"#fc7474"} />
                </View>
                <Text style={styles.loc}>
                    {props.eventsDetails.eventAddress}
                </Text>
            </View>
            <View style={styles.lview}>
                <View style={styles.ldetail}>
                    <Text style={styles.num}>
                        {props.eventsDetails.TotalVisitors} +
                    </Text>
                    <Text style={styles.txt}>
                        {' '}Joined
                    </Text>
                </View>
                <View style={[styles.ldetail, { justifyContent: 'space-between' }]}>
                    <View style={styles.dview}>
                        <SvgPicker />
                        <Text style={styles.timedate}>
                            {/* {moment(props.eventsDetails.eventDate).format("DD/MM/YYYY")} */}
                            {(props.eventsDetails.eventDate).split(' ')[0]}
                        </Text>
                    </View>
                    <View style={styles.dview}>
                        <SvgTime color={'#4024b8'} />
                        <Text style={styles.timedate}>
                            {/* {moment(props.eventsDetails.eventDate).format("hh:mm")} */}
                        {(props.eventsDetails.eventDate).split(' ')[1]} {(props.eventsDetails.eventDate).split(' ')[2]}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UpComingEvents

const styles = StyleSheet.create({
    midview: {
        height: 150,
        marginTop: 9,
        marginBottom: 2,
        width: '95%',
        elevation: 10,
        borderRadius: 8,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'center'
    },
    imgview: {
        width: '100%',
        height: 80,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    detail: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5
    },
    uview: {
        width: 65,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C8FFC2',
        borderRadius: 5
    },
    utxt: {
        color: '#6B6B6B',
        fontSize: 10
    },
    detailtxt: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 14
    },
    lview: {
        flexDirection: 'row',
        paddingHorizontal: 5,

    },
    ldetail: {
        flexDirection: 'row',
        alignItems: 'center',

        width: '50%',
    },
    num: {
        color: '#FF6B6B',
        fontSize: 14
    },
    txt: {
        color: '#828282',
        fontSize: 12
    },
    dview: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '58%',
    },
    timedate: {
        color: '#828282',
        fontSize: 10,
        marginLeft: 10
    },
    loc: {
        color: '#504F4F',
        fontSize: 10,
        marginLeft: 8
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center'

    }
})