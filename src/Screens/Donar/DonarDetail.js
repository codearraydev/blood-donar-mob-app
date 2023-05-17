import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput,Alert,ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCalender, SvgCardLine, SvgMap } from '../../components/svg';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePicker from 'react-native-date-picker';
import DropDownPicker from 'react-native-dropdown-picker';
import { getUserAsyncData } from '../../shared/core/DataStore';
import moment from 'moment';

const DonarDetail =  (props) => {
    const [lastdonated, setLastDonated] = useState('')
    const [healthIssues, setHealthIssues] = useState('')
    const [appointmentDate, setAppointmentDate] = useState('')
    const [datePicker, setDatePicker] = useState(false);
    const [appdatePicker, setAppdatePicker] = useState(false)
    const [loading, setLoading] = useState(false);
    const [ridevalue, setRideValue] = useState();

    const [rideopen, setRideOpen] = useState(false);

    const [rideitems, setRideItems] = useState([
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' },

    ]);

    const acceptRequest = () => {

        getUserAsyncData().then((res => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            setLoading(true)
            var raw = JSON.stringify({
                "donorID": res.id,
                "requestID": props.route.params.requestId,
                "organizationID": res.organizationID,
                "DonorDecision": "accepted",
                "lastDonated": lastdonated,
                "healthIssues": healthIssues,
                "rideRequired": ridevalue,
                "appointmentDate": appointmentDate
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            console.log("RAwww ",raw)
            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/requestResponse", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    Alert.alert(result.message)

                    Alert.alert(
                        "Response",
                        result.message,
                        [
                          {
                            text: "OK",
                            onPress: () => {
                              props.navigation.navigate('DonarBottomTabs');
                            },
                          },
                        ],
                        { cancelable: false }
                      );



                    console.log("Donar ",result)
                })
                .catch(error => {
                    setLoading(false)
                    console.log('error', error)
                });
        }))

    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                <View style={styles.top}>
                    <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                        <SvgBackArrow />
                    </TouchableOpacity>

                </View>

                <View style={styles.firstview}>
                    <View style={styles.midview}>
                        <Text style={styles.txt}>Last Donated</Text>
                        <TouchableOpacity onPress={() => setDatePicker(true)} style={styles.dateofbirth}>
                            <TextInput style={{ color: 'black' }}
                                editable={false}
                                placeholder={"Last Donated Date"}
                                value={lastdonated}
                            />
                            <SvgCalender color={'#cecece'} />
                        </TouchableOpacity>
                        {datePicker && (
                            <DateTimePicker
                                modal
                                open={datePicker}
                                date={new Date()}
                                mode="date"
                                onConfirm={(nextValue) => {
                                    setLastDonated(nextValue)
                                    setLastDonated(moment(nextValue).format("DD/MM/YYYY"))
                                    setDatePicker(false)
                                }}
                                onCancel={() => {
                                    setDatePicker(false)
                                }}
                            />
                        )}
                    </View>
                    <View style={styles.midview1}>
                        <Text style={styles.txt}>
                            Health Issues (if any)
                        </Text>
                        <TextInput style={styles.tinput}
                            placeholder="Enter Health Issues"
                            placeholderTextColor={'grey'}
                            value={healthIssues}
                          
                            onChangeText={text => setHealthIssues(text)}


                        />
                    </View>
                    <View style={styles.midview1}>
                        <Text style={styles.txt}>
                            Ride Required
                        </Text>
                        <DropDownPicker style={[styles.tinput, { minHeight: 20, zIndex: rideopen ? 1 : 1000 }]}
                            containerProps={{
                                //height:30
                            }}
                            placeholder={'Ride Required'}
                            placeholderStyle={{
                                color: 'grey'
                            }}

                            //zIndexInverse={3000}
                            open={rideopen}
                            value={ridevalue}
                            items={rideitems}
                            setOpen={setRideOpen}
                            setValue={setRideValue}
                            setItems={setRideItems}
                        />
                    </View>
                    <View style={styles.midview1}>
                        <Text style={styles.txt}>Appointment Date </Text>
                        <TouchableOpacity onPress={() => setAppdatePicker(true)} style={styles.dateofbirth}>
                            <TextInput style={{ color: 'black' }}
                                editable={false}
                                placeholder={"Appointment Date"}
                                value={appointmentDate}
                            />
                            <SvgCalender color={'#cecece'} />
                        </TouchableOpacity>
                        {appdatePicker && (
                            <DateTimePicker
                                modal
                                open={appdatePicker}
                                date={new Date()}
                                mode="date"
                                onConfirm={(nextValue) => {
                                    setAppointmentDate(nextValue)
                                    setAppointmentDate(moment(nextValue).format("DD/MM/YYYY"))
                                    setAppdatePicker(false)
                                }}
                                onCancel={() => {
                                    setAppdatePicker(false)
                                }}
                            />
                        )}
                    </View>
                </View>
                <TouchableOpacity style={styles.continuebtn} onPress={() => acceptRequest()}>
                <Text style={styles.continuetxt}> {loading ? <ActivityIndicator color={'white'} /> : 'Accept Request'}</Text>
                    
                </TouchableOpacity>
            </LinearGradient>
        </SafeAreaView>

    )
}

export default DonarDetail

const styles = StyleSheet.create({
    Mview:
    {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        //justifyContent: 'space-between'
    },
    top: {
        width: '90%',
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }, firstview: {
        // height:'50%',
        width: '95%',
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        padding: 15,
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        alignItems: 'center'
    },
    midview: {
        height: 60,

        // marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',

    },
    txt: {
        //fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        color: '#2D2D2D',
        marginLeft: 5
    },
    tinput: {
        borderWidth: 1,
        borderColor: '#B1B1B1',
        height: 38,
        borderRadius: 8,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF'
    },
    midview1: {
        height: 60,

        marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',

    },
    dateofbirth:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: '#B1B1B1',
        height: 38,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
    continuebtn: {
        height: 38,
        borderRadius: 10,
        width: "90%",
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
   
})