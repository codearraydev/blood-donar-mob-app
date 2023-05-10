import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Alert, ActivityIndicator, SliderBase } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { SvgBackArrow, SvgCalender } from '../../components/svg'
import React, { useState, useEffect } from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { getUserAsyncData } from '../../shared/core/DataStore';

const CardDetailNext = ({ navigation, route }) => {
    const [cityopen, setCityOpen] = useState(false);
    const [cityvalue, setCityValue] = useState({ value: null, error: "", status: false });
    const [data, setData] = useState([])
    const [address, setAddress] = useState({ value: "", error: "", status: false });
    const [detail, setDetail] = useState({ value: "", error: "", status: false });
    const [cityitems, setCityItems] = useState([
        { label: 'A+', value: 'A+' },

    ]);
    const [districtopen, setDistrictOpen] = useState(false);
    const [districtvalue, setDistrictValue] = useState({ value: null, error: "", status: false });
    const [districtitems, setDistrictItems] = useState([
        { label: 'A+', value: 'A+' },

    ]);

    const [loader, setLoader] = useState(false)
    useEffect(() => {
        var a = route.params
        console.log("Previous page val", a)
        setData(route.params)

    }, [])
    const Send_Request = () => {
        setLoader(true)
        // var apiobj = {
        //     "applicantname": data.applicantname,
        //     "applicantnum": data.applicantnum,
        //     "bloodbags": data.bloodbags,
        //     "bloodgroup": data.bloodgroup,
        //     "hospitalname": data.hospitalname,
        //     "patientname": data.patientname,
        //     "surgerydate": data.surgerydate,
        //     "city": cityvalue,
        //     "district": districtvalue,
        //     "address": address.value,
        //     "patientdetail": detail.value
        // }
        // Alert.alert(apiobj)
        // console.log("JSONNN ", apiobj)


        getUserAsyncData().then((response => {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", "Bearer " + response.token);

            var raw = JSON.stringify({
                "organizationID": route.params.bankId,
                "pat_name": data.patientname,
                "pat_phoneno": data.applicantnum,
                "pat_gender": "male",
                "pat_bloodType": data.bloodgroup
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };



            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/registerCase", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoader(false)
                    if (result.status == 0) {
                        Alert.alert(result.message)
                        return
                    }

                    Alert.alert(result.message)
                    navigation.navigate('BottomTabs')
                })
                .catch(error => console.log('error', error));
        }))

    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                    <View style={styles.top}>
                        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                            <SvgBackArrow />
                        </TouchableOpacity>
                        <Text style={styles.headtxt}>Tell Some More</Text>
                    </View>

                    <View style={styles.firstview}>
                        <View style={[styles.midview,
                        { zIndex: 999 }]}>
                            <Text style={styles.txt}> City </Text>
                            <DropDownPicker style={[styles.tinput, { minHeight: 20 }]}
                                containerProps={{
                                    //height:30
                                }}
                                placeholder={'Enter Name of City'}
                                placeholderStyle={{
                                    color: 'grey'
                                }}
                                zIndex={1000}
                                //zIndexInverse={3000}
                                open={cityopen}
                                value={cityvalue}
                                items={cityitems}
                                setOpen={setCityOpen}
                                setValue={setCityValue}
                                setItems={setCityItems}
                            />

                        </View>

                        <View style={[styles.midview1,
                        { zIndex: districtopen ? 1000 : 1 }]}>
                            <Text style={styles.txt}> District </Text>
                            <DropDownPicker style={[styles.tinput, { minHeight: 20 }]}
                                containerProps={{
                                    //height:30
                                }}
                                placeholder={'Enter Name of District'}
                                placeholderStyle={{
                                    color: 'grey'
                                }}
                                zIndex={1000}
                                //zIndexInverse={3000}
                                open={districtopen}
                                value={districtvalue}
                                items={districtitems}
                                setOpen={setDistrictOpen}
                                setValue={setDistrictValue}
                                setItems={setDistrictItems}
                            />

                        </View>
                        <View style={[styles.midview1, { height: 150 }]}>
                            <Text style={styles.txt}>
                                Address
                            </Text>
                            <TextInput style={[styles.tinput, { height: 120 }]}
                                placeholder="Enter Complete Address"
                                placeholderTextColor={'grey'}
                                multiline={true}
                                value={address.value}
                                onChangeText={text => setAddress({ value: text, error: "", status: true })}

                            />
                        </View>
                        <View style={[styles.midview1, { height: 150 }]}>
                            <Text style={styles.txt}>
                                Patient Detail
                            </Text>
                            <TextInput style={[styles.tinput, { height: 120 }]}
                                placeholder="Enter Patient Detail if any"
                                placeholderTextColor={'grey'}
                                multiline={true}
                                value={detail.value}
                                onChangeText={text => setDetail({ value: text, error: "", status: true })}

                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.continuebtn} onPress={() => Send_Request()}>
                        <Text style={styles.continuetxt}>{loader ? <ActivityIndicator color={'#fff'} /> : "Send Request"}</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default CardDetailNext

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
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headtxt: {
        color: '#363636',
        fontSize: 20,
        marginLeft: 55
    },
    firstview: {
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
    midview: {
        height: 60,

        // marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',

    },
    midview1: {
        height: 60,

        marginTop: 10,
        width: '100%',
        justifyContent: 'space-between',

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