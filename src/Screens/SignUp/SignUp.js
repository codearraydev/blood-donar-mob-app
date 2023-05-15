import { ActivityIndicator, Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import DateTimePicker from 'react-native-date-picker';
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler'
import { SvgFacebook, SvgGoogle, SvgLine, SvgSignUp } from '../../components/svg';
import { emailValidator, NameValidtor, PhoneValidator } from '../../shared/validators/validators';


const SignUp = (props) => {
    const [selectedtab, setSelectedTab] = useState("reciver");
    const [name, setName] = useState({ value: "", error: "", status: false });
    const [phone, setPhone] = useState({ value: "", error: "", status: false });
    const [email, setEmail] = useState({ value: "", error: "", status: false });
    const [isloading, setisLoading] = useState(false)

    const SignupFun = () => {
        let emailerror = emailValidator(email.value);
        let nameerror = NameValidtor(name.value);
        let phoneerror = PhoneValidator(phone.value)
        setEmail(emailerror)
        setName(nameerror)
        setPhone(phoneerror)
        if (emailerror.error == "" && nameerror.error == "" && phoneerror.error == "") {
            setisLoading(true)
            props.navigation.navigate("SignUpNext", {
                email: email.value,
                name: name.value,
                phone: phone.value,
                type: selectedtab
            })
        }
        setisLoading(false)
    }
    return (
        <View style={{ flex: 1, }}>
            <ScrollView>
                <KeyboardAvoidingView style={{ flex: 1, }}>

                    <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                        <View style={styles.topview}>
                            <SvgSignUp style={styles.icon} />
                            <Text style={styles.welcometxt}>
                                Sign Up
                            </Text>
                        </View>
                        <View style={styles.secondview}>
                            <View style={styles.midview}>
                                <Text style={styles.txt}>Register As</Text>
                                <View style={styles.regas}>
                                    <TouchableOpacity style={[styles.selectedbtn, { borderColor: selectedtab == "reciver" ? '#FCD0E3' : '#EDECF1' },]} onPress={() => setSelectedTab("reciver")}>
                                        <Text style={styles.txtsel}>
                                            Patient
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.selectedbtn, { borderColor: selectedtab == "volunteer" ? '#FCD0E3' : '#EDECF1' },]} onPress={() => setSelectedTab("volunteer")}>
                                        <Text style={styles.txtsel}>
                                            Volunter
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.midview}>
                                <Text style={styles.txt}> Full Name </Text>
                                <TextInput style={styles.tinput}
                                    placeholder="Enter your name"
                                    value={name.value}
                                    placeholderTextColor={'grey'}
                                    onChangeText={text => setName({ value: text, error: "", status: true })}
                                    onSubmitEditing={() => setName(NameValidtor(name.value))}
                                />
                            </View>
                            {name.error ?
                                <Text style={styles.error}>{name.error}</Text> : null
                            }
                            <View style={styles.midview}>
                                <Text style={styles.txt}> Email </Text>
                                <TextInput style={styles.tinput}
                                    placeholder="Enter your email"
                                    keyboardType='email-address'
                                    placeholderTextColor={'grey'}
                                    value={email.value}
                                    onChangeText={text => setEmail({ value: text, error: "", status: true })}
                                    onSubmitEditing={() => setEmail(emailValidator(email.value))}
                                />
                            </View>
                            {email.error ?
                                <Text style={styles.error}>{email.error}</Text> : null
                            }
                            <View style={styles.midview}>
                                <Text style={styles.txt}> Phone Number </Text>
                                <TextInput style={styles.tinput}
                                    placeholder="Enter your Phone Number"
                                    value={phone.value}
                                    placeholderTextColor={'grey'}
                                    onChangeText={text => setPhone({ value: text, error: "", status: true })}
                                    onSubmitEditing={() => setPhone(PhoneValidator(phone.value))}

                                />
                            </View>
                            {phone.error ?
                                <Text style={styles.error}>{phone.error}</Text> : null
                            }

                        </View>
                        <View style={styles.thirdview}>


                            <TouchableOpacity style={styles.continuebtn} onPress={() => SignupFun()}>
                                <Text style={styles.continuetxt}> {isloading ? <ActivityIndicator color={'white'} /> : 'Next'}</Text>
                            </TouchableOpacity>
                            {(props.route.params) ?
                                <Text style={styles.error}>{props.route.params.errormsg}</Text> : null
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
                                <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >


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
    error: {
        color: 'red',
        alignSelf: 'flex-start',
        fontSize: 11,
        marginLeft: 5,
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
        marginTop: 18
        // alignItems: 'center',
    },
    icon: {
        marginTop: 15,
        alignSelf: 'center'
    },
    welcometxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2E2E2E',
        marginTop: 8,
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
    }


})