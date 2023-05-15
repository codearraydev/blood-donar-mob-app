import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import DateTimePicker from 'react-native-date-picker';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler'
import { SvgCalender, SvgFacebook, SvgGoogle, SvgLine, SvgSignUp, SvgSignUpNext } from '../../components/svg';
import DropDownPicker from 'react-native-dropdown-picker';
import { BloodValidtor, DOBValidtor, GenderValidtor, LocationValidtor } from '../../shared/validators/validators';

const SignUp = ({ navigation, route }) => {
    const [datePicker, setDatePicker] = useState(false);
    const [dob, setDob] = useState({ value: "", error: "", status: false });
    const [location, setLocation] = useState({ value: "", error: "", status: false });
    const [data, setData] = useState("");
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({ value: null, error: "", status: false });
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
    const [gender, setGender] = useState(false);
    const [gendervalue, setGenderValue] = useState({ value: null, error: "", status: false });
    const [genderitems, setGenderItems] = useState([
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },

    ]);
    const [loading, setLoading] = useState(false);
    const [errormsg, setErrormsg] = useState('')

    useEffect(() => {
        var a = route.params
        console.log("KKK", a)
        setData(route.params)
    }, [])

    const SignupFun = () => {
        console.log("DOB ",dob,"Genderr  ",gendervalue, "Blood  ", value)
        let blooderror = BloodValidtor(value);
        let doberror = DOBValidtor(dob);
        let gendererror = GenderValidtor(gendervalue);
        let locationerror = LocationValidtor(location.value);
        setLocation(locationerror)
        if (blooderror.error == "" && doberror.error == "" && gendererror.error == "" && locationerror.error == "") {
           
    

            setLoading(true)
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "name": data.name,
                "email": data.email,
                "gender": gendervalue,
                "age": 23,
                "phoneno": data.phone,
                "bloodGroup": value,
                "district": location.value,
                "type": data.type
              });
            console.log("RAW", raw)
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
            fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/registerUser", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setLoading(false)
                    if (result.status == 1) {
                        Alert.alert("Successs")
                        navigation.navigate("Login")
                    } 
                    else {
                        setErrormsg(result.message)
                        if(result.message == "Email already exists"){
                            navigation.navigate("SignUp",{
                                errormsg:result.message
                            })
                        }
                        else if(result.message == "Phone number already exists"){
                            navigation.navigate("SignUp",{
                                errormsg:result.message
                            })
                        }
                        Alert.alert("Error",result.message)
                    }
                })
                .catch((e) => {
                    setLoading(false)
                    setErrormsg(e.message)
                    console.log("Errrorr ", e)
                });
        }
    }
    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
                <KeyboardAvoidingView style={{ flex: 1, }}>

                    <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                        <View style={styles.topview}>
                            <SvgSignUpNext style={styles.icon} />
                            <Text style={styles.welcometxt}>
                                Tell some more
                            </Text>
                        </View>
                        <View style={styles.secondview}>

                            <View style={[styles.midview,
                            { zIndex: open ? 1000 :1 }]}>
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
                            {value.error ?
                                <Text style={styles.error}>{value.error}</Text> : null
                            }
                            <View style={styles.midview}>
                                <Text style={styles.txt}> Date of Birth </Text>
                                <TouchableOpacity onPress={() => setDatePicker(true)} style={styles.dateofbirth}>
                                    <TextInput style={{ color: 'black' }}
                                        editable={false}
                                        placeholder={"Select your DOB"}
                                        value={dob}
                                    />
                                    <SvgCalender color={'#cecece'}/>
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
                            {dob.error ?
                                <Text style={styles.error}>{dob.error}</Text> : null
                            }
                            <View style={[styles.midview,
                            { zIndex: 1 }]}>
                                <Text style={styles.txt}> Gender </Text>
                                <DropDownPicker style={[styles.tinput, { minHeight: 20 }]}
                                    placeholder={'Select your gender'}
                                    placeholderStyle={{
                                        color: 'grey'
                                    }}

                                    zIndex={1000}
                                    //zIndexInverse={3000}
                                    open={gender}
                                    value={gendervalue}
                                    items={genderitems}
                                    setOpen={setGender}
                                    setValue={setGenderValue}
                                    setItems={setGenderItems}
                                />
                            </View>
                            {gendervalue.error ?
                                <Text style={styles.error}>{gendervalue.error}</Text> : null
                            }
                            <View style={styles.midview}>
                                <Text style={styles.txt}> Location </Text>
                                <TextInput style={styles.tinput}
                                    placeholder="Enter your Location"
                                    value={location.value}
                                    placeholderTextColor={'grey'}
                                    onChangeText={text => setLocation({ value: text, error: "", status: true })}
                                    onSubmitEditing={() => setLocation(LocationValidtor(location.value))}

                                />
                            </View>
                            {location.error ?
                                <Text style={styles.error}>{location.error}</Text> : null
                            }
                        </View>
                        <View style={styles.thirdview}>


                            <TouchableOpacity style={styles.continuebtn} onPress={() => SignupFun()}>
                                <Text style={styles.continuetxt}> {loading ? <ActivityIndicator color={'white'} /> : 'Continue'}</Text>
                            </TouchableOpacity>
                            {errormsg?
                                <Text style={styles.error}>{errormsg}</Text> :null   
                        }
                            <View style={styles.lineview}>
                                <SvgLine />
                                <Text style={styles.ltxt}>
                                    Or Continue With
                                </Text>
                                <SvgLine />
                            </View>

                        </View>
                        <View style={styles.forthview}>
                            <View style={styles.loginwith}>
                                <SvgGoogle />
                                <SvgFacebook />
                            </View>
                            <View style={styles.lastview}>
                                <Text style={styles.acctxt}>
                                    Already have an account ?
                                </Text>
                                <TouchableOpacity onPress={()=> navigation.navigate("Login")} >


                                    <Text style={styles.bytxt}>
                                        {' '}Login
                                    </Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </LinearGradient>

                </KeyboardAvoidingView>
            </ScrollView>
        </View>
    )
}



export default SignUp

const styles = StyleSheet.create({
    pswd: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',

        borderRadius: 5

    },

    load: {
        color: "#ffff"
    },
    regas: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedbtn: {
        height: 38,
        width: 160,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: '#EDECF1',
        borderWidth: 1,
        //opacity:0.3,
        backgroundColor: '#FFFFFF'
    },
    txtsel: {
        color: '#555555'
    },
    Mview:
    {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topview: {
        width: '100%',
        marginTop: 25
        // alignItems: 'center',
    },
    icon: {
        marginTop: 15,
        alignSelf: 'center'
    },
    welcometxt: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#101010',
        marginTop: 10,
        alignSelf: 'center',
        //fontFamily: 'Plus Jakarta Sans'
    },
    secondview: {
        width: '92%',
        alignItems: 'center',
    },
    lineview: {
        height: 25,
        width: '100%',
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ltxt: {
        color: '#878787',
        fontSize: 12
    },
    loginwith: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bytxt: {
        //fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        color: '#4440BF',
        marginBottom: 10
    },
    acctxt: {
        //fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        color: '#2D2D2D',
        marginBottom: 10
    },
    midview: {
        height: 65,
        marginTop: 8,
        width: '100%',

        justifyContent: 'space-between',
    },
    txt: {
        fontSize: 14,
        color: '#2D2D2D',
        marginLeft: 5
    },
    tinput: {
        borderWidth: 1,
        borderColor: '#B1B1B1',
        height: 38,
        borderRadius: 10,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF'
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
        width: "100%",
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
    lineview: {
        height: 25,
        width: '100%',
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    thirdview: {
        width: '92%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forthview: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    lastview: {
        flexDirection: 'row'
    },
    error: {
        color: 'red',
        alignSelf: 'flex-start',
        fontSize: 11,
        marginLeft: 5,
    },


})