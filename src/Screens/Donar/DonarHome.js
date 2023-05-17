import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SvgCardLine, SvgDistance, SvgDonateBlood, SvgDown, SvgHelp, SvgHomeLogo, SvgMap, SvgMapText, SvgNotification, SvgTxtSearch } from '../../components/svg'
import Card from '../../components/Card'
import DonationRequestCard from './DonationRequestCard'
import UpComingEvents from './UpComingEvents'
import { getUserAsyncData } from '../../shared/core/DataStore'

const DonarHome = ({ navigation }) => {


    const [requestList, setRequestList] = useState()
    const loadMyRequests = () => {
        getUserAsyncData().then((res => {

          
            var requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };
            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getMyRequestsForBlood/" + res.id + "/" + res.organizationID, requestOptions)
                .then(response => response.json())
                .then(result => {
                    setRequestList(result.data.result)
                })
                .catch(error => console.log('error', error));
        }))
    }


    useEffect(() => {
        loadMyRequests()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>

                <View style={styles.top}>
                    <Text style={styles.toptxt}>
                        Hello, Emma
                    </Text>
                    <SvgNotification />
                </View>
                <View style={styles.top1}>
                    <Text style={styles.morntxt}>
                        Good Morning!
                    </Text>
                </View>
                <View style={styles.topcard}>
                    <View style={styles.gradview}>
                        <View style={styles.coltxt}>
                            <Text style={styles.gradtxt}>Donate </Text>
                            <Text style={styles.gradtxt1}>{' '}blood</Text>
                            <Text style={styles.gradtxt}>,</Text>
                        </View>
                        <View style={styles.coltxt1}>
                            <Text style={styles.gradtxt}>
                                Save lives and
                            </Text>
                        </View>
                        <View style={styles.coltxt1}>
                            <Text style={styles.gradtxt}>
                                Feel great.
                            </Text>
                        </View>
                    </View>
                    <View style={styles.gradview1}>
                        <SvgDonateBlood />
                    </View>
                </View>
                {/* <View style={styles.sectopview}>
                    <View style={styles.midview}>
                        <Text style={styles.txt}> Your Current Location </Text>
                        <View style={styles.locinput}>
                            <TextInput style={{ color: 'black' }}

                                placeholder={"Islambad"}

                            />
                            <SvgMap color={"#fc7474"} />
                        </View>
                    </View>
                    <View style={styles.bloodview}>
                        <Text style={styles.bloodtxt}>Your Blood Group</Text>
                        <View style={styles.group}>
                            <Text style={styles.grouptxt}>AB+</Text>
                            <SvgDown style={{ marginLeft: 2 }} />
                        </View>
                    </View>
                </View> */}
                <View style={styles.top}>
                    <Text style={styles.doc}>
                        Donation Requests
                    </Text>
                    <Text style={styles.seedoc}>
                        See All
                    </Text>

                </View>



                <FlatList
                    style={{ width: '100%' }}
                    data={requestList}
                    renderItem={({ item }) => <DonationRequestCard requestDetails={item} navigation={navigation} />}
                    keyExtractor={item => Math.random().toString()}
                />
                {/* <DonationRequestCard/> */}
                {/* <View style={styles.top}>
                    <Text style={styles.doc}>
                        Upcoming Events
                    </Text>
                    <Text style={styles.seedoc}>
                        See All
                    </Text>
                </View>
                <UpComingEvents /> */}
            </LinearGradient>
        </SafeAreaView>
    )
}

export default DonarHome

const styles = StyleSheet.create({
    Mview:
    {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',

    },
    top: {
        height: 30,
        width: '92%',
        marginTop: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    top1: {
        height: 28,
        width: '92%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    toptxt: {
        color: '#2D2D2D',
        fontSize: 17,
        //fontWeight: '500',
    },
    morntxt: {
        color: '#363636',
        fontSize: 18,
        fontWeight: '500',
    },
    topcard: {
        height: 115,
        width: '95%',
        marginTop: 3,
        borderRadius: 15,
        backgroundColor: '#E4F0FF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    gradview: {

        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
    },
    gradview1: {

        width: '50%',
        justifyContent: 'center'
    },
    coltxt: {
        flexDirection: 'row'
    },
    gradtxt: {
        fontSize: 17,
        //fontFamily:'Plus Jakarta Sans',
        color: '#0E0464',
        fontWeight: 'bold'
    },
    gradtxt1: {
        fontSize: 18,
        //fontFamily:'Plus Jakarta Sans',
        color: '#DB3762',
        fontWeight: 'bold'
    },
    midview: {
        height: 55,
        marginTop: 8,
        width: '95%',
        zIndex: -1,
        justifyContent: 'space-between',
    },
    sectopview: {
        height: 100,
        width: '88%',
        marginTop: -10,
        borderRadius: 8,
        backgroundColor: '#ffff',
        elevation: 10,
        flexDirection: 'row',
        //justifyContent:'space-around',
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    txt: {
        color: '#BCBCBC',
        fontSize: 14
    },
    locinput: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#B1B1B1',
        height: 38,
        // paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
    bloodview: {
        flexDirection: 'row',
        width: '95%',
        marginTop: 5,
        alignItems: 'center',

        justifyContent: 'space-between'
    },
    group: {
        borderWidth: 1,
        borderColor: '#D9D4D4',
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bloodtxt: {
        color: '#545454',
        fontSize: 12
    },
    grouptxt: {
        color: '#DF0606',
        fontSize: 13
    },
    doc: {
        color: '#101010',
        fontSize: 15
    },
    seedoc: {
        color: '#4440BF',
        fontSize: 13
    },
})