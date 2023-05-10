import { StyleSheet, Text, TextInput, View, TouchableOpacity, KeyboardAvoidingView, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { emailValidator, passwordloginValidator } from '../../shared/validators/validator'
import { SvgFacebook, SvgGoogle, SvgLine, SvgLogo } from './../../components/svg'
const Login = ({ navigation }) => {

    const [email, setEmail] = useState('admin@gmail.com')
    const [password, setPassword] = useState('12345678')
    const [isloading, setIslaoding] = useState(false)


    const onLoginStart = () => {

        if (email === '') {
            Alert.alert('Email is required.')
            return
        }

        if (password === '') {
            Alert.alert("Password is required.")
            return
        }


        //login api integrated
        setIslaoding(true)
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/userLogin", requestOptions)
            .then(response => response.json())
            .then(result => {
                setIslaoding(false)
                if (result.status == 0) {
                    Alert.alert(result.message)
                    return
                }
               // navigation.navigate('BottomTabs')
                navigation.navigate('DonarBottomTabs')
                //Alert.alert(JSON.stringify(result))
            })
            .catch(error => console.log('error', error));



    }
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>


                    <View style={styles.topview}>

                        <SvgLogo style={styles.icon} />


                        <Text style={styles.welcometxt}>
                            Welcome back!
                        </Text>

                    </View>
                    <View style={styles.secondview}>


                        <View style={styles.midview}>
                            <Text style={styles.txt}>
                                Email
                            </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Enter your email"
                                placeholderTextColor={'grey'}
                                value={email}
                                onChangeText={(value) => setEmail(value)}

                            />
                        </View>
                        <View style={styles.midview}>
                            <Text style={styles.txt}>
                                Password
                            </Text>
                            <TextInput style={styles.tinput}
                                placeholder="Enter your password"
                                placeholderTextColor={'grey'}
                                value={password}
                                onChangeText={(value) => setPassword(value)}
                            />
                        </View>
                        <View style={styles.forgetview}>
                            <TouchableOpacity>
                                <Text style={styles.forgettxt}>
                                    Forgot Password ?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.thirdview}>


                        <TouchableOpacity disabled={isloading} style={styles.continuebtn}
                            onPress={() => onLoginStart()}
                        //    onPress={() => navigation.navigate('BottomTabs')}
                        >
                            <Text style={styles.continuetxt}>
                                {isloading ? <ActivityIndicator color={'#fff'} /> : "Login"}

                            </Text>
                        </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>


                            <Text style={styles.bytxt}>
                                Don’t have an account?
                            </Text>
                        </TouchableOpacity>
                    </View>

                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}


export default Login

const styles = StyleSheet.create({
    Mview:
    {
        flex: 1,
        backgroundColor: '#F3F3F3',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    topview: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10
    },
    secondview: {
        width: '85%',
        alignItems: 'center',
    },
    thirdview: {
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    forthview: {
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        marginTop: 20
    },

    iconview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '65%',
        marginLeft: 30
    },
    welcometxt: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#2E2E2E',
        marginTop: 10,
        alignSelf: 'center',
        //fontFamily:'Plus Jakarta Sans'
    },
    midview: {
        height: 70,
        marginTop: 5,
        width: '100%',
        justifyContent: 'space-between'
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
        borderRadius: 10,
        paddingLeft: 15,
        backgroundColor: '#FFFFFF'
    },
    forgetview: {
        alignSelf: 'flex-end',
        marginTop: 10
    },
    forgettxt: {
        color: '#524ED2',
        textDecorationLine: 'underline',
        //fontFamily: 'Nunito Sans',
        fontSize: 14
    },
    continuebtn: {
        height: 35,
        borderRadius: 10,
        width: "100%",
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
        marginTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    continuegoogle: {
        height: 40,
        borderRadius: 5,
        elevation: 3,
        flexDirection: 'row',
        width: "100%",
        backgroundColor: '#FCFCFC',
        alignItems: 'center',
        marginTop: 10,
    },
    ltxt: {
        color: '#878787',
        fontSize: 12
    },
    googletxt: {
        fontSize: 16,
        //fontFamily: 'Nunito Sans',
        color: '#1B1E29',
        fontWeight: '700',
        marginLeft: "15%"
    },
    googlesvg: {
        marginLeft: 25
    },
    lastview: {
        height: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '45%',
        alignItems: 'center',
        marginTop: 5
    },
    line: {
        color: "rgba(36,40,51,0.35)", fontSize: 15
    },
    acctxt: {
        color: '#19588D',
        fontSize: 13,
        //fontFamily: 'Nunito Sans',
        textDecorationLine: 'underline',



    },
    loginwith: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    pritxt: {
        color: '#0315B5',
        fontSize: 12,
        //fontFamily: 'Nunito Sans',
        textDecorationLine: 'underline'
    },
    bytxt: {
        //fontFamily: 'Plus Jakarta Sans',
        fontSize: 14,
        color: '#4440BF',
        marginBottom: 20
    }
})