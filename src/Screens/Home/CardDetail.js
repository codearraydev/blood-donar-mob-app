import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';
import DateTimePicker from 'react-native-date-picker';
import moment from 'moment';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgCalender } from '../../components/svg'
import { getUserAsyncData } from '../../shared/core/DataStore';

const CardDetail = (props) => {





    const [ngoName, setNgoName] = useState(props.route.params.bankName)
    const [datePicker, setDatePicker] = useState(false);
    const [applicantname, setApplicantName] = useState('');
    const [applicantnum, setApplicantNum] = useState('');
    const [patientname, setPatientName] = useState({ value: "", error: "", status: false });
    const [dob, setDob] = useState({ value: "", error: "", status: false });
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({ value: null, error: "", status: false });
    const [bloodbagvalue, setBloodbagValue] = useState();


    useEffect(() => {
        getUserAsyncData().then((res => {
            setApplicantName(res.name)
            setApplicantNum(res.phoneno)
        }))
    }, [])

    const [items, setItems] = useState([
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' }
    ]);
    const [bloodbagopen, setBloodbagOpen] = useState(false);

    const [bloodbagitems, setBloodbagItems] = useState([
        { label: 'A+', value: 'A+' },
        { label: 'B-', value: 'B-' },
        { label: 'O+', value: 'O+' },

    ]);
    const [hnopen, sethnOpen] = useState(false);
    const [hnvalue, setHNValue] = useState({ value: null, error: "", status: false });
    const [hnitems, setHNItems] = useState([
        { label: 'A+', value: 'A+' },
        { label: 'B-', value: 'B-' },
        { label: 'O+', value: 'O+' },

    ]);
    const CardDetailFun = () => {
        //Alert.alert(props.route.params.bankId)
        props.navigation.navigate("CardDetailNext", {
            applicantname: applicantname,
            applicantnum: applicantnum,
            patientname: patientname.value,
            bloodgroup: value,
            bloodbags: bloodbagvalue,
            hospitalname: ngoName,
            surgerydate: dob,
            bankId: props.route.params.bankId
        })
    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                    <View style={styles.top}>
                        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
                            <SvgBackArrow />
                        </TouchableOpacity>
                        <Text style={styles.headtxt}>Tell us about the Patient</Text>
                    </View>
                    <View style={styles.firstview}>
                        <View style={styles.midview}>
                            <Text style={styles.txt}>
                                Applicant Name
                            </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Name of applicant"
                                placeholderTextColor={'grey'}
                                value={applicantname}
                                editable={false}
                                onChangeText={text => setApplicantName({ value: text, error: "", status: true })}

                            />
                        </View>
                        <View style={styles.midview1}>
                            <Text style={styles.txt}>
                                Applicant Number
                            </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Applicant Mobile Number"
                                placeholderTextColor={'grey'}
                                value={applicantnum}
                                editable={false}
                                onChangeText={text => setApplicantNum({ value: text, error: "", status: true })}


                            />
                        </View>
                    </View>

                    <View style={styles.firstview}>
                        <View style={styles.midview}>
                            <Text style={styles.txt}>
                                Patient Name
                            </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Name of patient"
                                placeholderTextColor={'grey'}
                                value={patientname.value}
                                onChangeText={text => setPatientName({ value: text, error: "", status: true })}

                            />
                        </View>
                        <View style={[styles.midview1,
                        { zIndex: 999 }]}>
                            <Text style={styles.txt}> Blood Group </Text>
                            <DropDownPicker style={[styles.tinput, { minHeight: 20 }]}
                                containerProps={{
                                    //height:30
                                }}
                                placeholder={'Choose your Blood group'}
                                placeholderStyle={{
                                    color: 'grey'
                                }}
                                zIndex={1000}
                                //zIndexInverse={3000}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                            />

                        </View>
                        <View style={[styles.midview1,
                        { zIndex: 100 }]}>
                            <Text style={styles.txt}> Blood Bags </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Enter number of Bags (1-10)"
                                placeholderTextColor={'grey'}
                                value={bloodbagvalue}
                                keyboardType='numeric'
                                onChangeText={text => setBloodbagValue(text)}
                            />
                            {/* <DropDownPicker style={[styles.tinput, { minHeight: 20 }]}
                                    containerProps={{
                                        //height:30
                                    }}
                                    placeholder={'Total Blood Bags Needed'}
                                    placeholderStyle={{
                                        color: 'grey'
                                    }}
                                    zIndex={1000}
                                    //zIndexInverse={3000}
                                    open={bloodbagopen}
                                    value={bloodbagvalue}
                                    items={bloodbagitems}
                                    setOpen={setBloodbagOpen}
                                    setValue={setBloodbagValue}
                                    setItems={setBloodbagItems}
                                /> */}

                        </View>
                        <View style={[styles.midview1,
                        { zIndex: hnopen ? 1000 : 1 }]}>
                            <Text style={styles.txt}> NGO/Blood Bank Name </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Hospital Name"
                                placeholderTextColor={'grey'}
                                value={ngoName}
                                editable={false}
                                // keyboardType='numeric'
                                onChangeText={text => setPatientName({ value: text, error: "", status: true })}

                            />
                            {/* <DropDownPicker style={[styles.tinput, { minHeight: 20 }]}
                                containerProps={{
                                    //height:30
                                }}
                                placeholder={'Enter Hospital Name'}
                                placeholderStyle={{
                                    color: 'grey'
                                }}
                                zIndex={1000}
                                //zIndexInverse={3000}
                                open={hnopen}
                                value={hnvalue}
                                items={hnitems}
                                setOpen={sethnOpen}
                                setValue={setHNValue}
                                setItems={setHNItems}
                            /> */}

                        </View>

                        <View style={styles.midview1}>
                            <Text style={styles.txt}> Surgery Date </Text>
                            <TouchableOpacity onPress={() => setDatePicker(true)} style={styles.dateofbirth}>
                                <TextInput style={{ color: 'black' }}
                                    editable={false}
                                    placeholder={"Surgery Date"}
                                    value={dob}
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
                                        setDob(nextValue)
                                        setDob(moment(nextValue).format("DD/MM/YYYY"))
                                        setDatePicker(false)
                                    }}
                                    onCancel={() => {
                                        setDatePicker(false)
                                    }}
                                />
                            )}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.continuebtn} onPress={() => CardDetailFun()} >
                        <Text style={styles.continuetxt}>Next</Text>
                    </TouchableOpacity>

                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default CardDetail

const styles = StyleSheet.create({
    Mview:
    {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        //justifyContent: 'space-between'
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
    top: {
        width: '90%',
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headtxt: {
        color: '#363636',
        fontSize: 20,
        marginLeft: 30
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