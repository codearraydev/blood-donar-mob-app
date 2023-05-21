import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image, Alert,FlatList} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgMap, SvgNoData } from '../../components/svg';
import AppointmentCard from './AppointmentCard';
import { getUserAsyncData } from '../../shared/core/DataStore'
import { useFocusEffect } from '@react-navigation/native';
const Appointment = ({navigation}) => {
    const [appointmentList, setAppoimentList] = useState()
    const loadMyAppointment = () => {
        getUserAsyncData().then((res => {

          console.log("RESSSSSSS",res.id)
          var raw = "";
          var requestOptions = {
            method: 'GET',
            body: raw,
            redirect: 'follow'
          };
          
          fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getMyAppointemnets/"+res.id, requestOptions)
                .then(result => result.json())
                .then(result => {
                    console.log("RRRRRRRRRRR ",result)
                    if(result.status == 1) {
                        
                        setAppoimentList(result.data)
                    } 
                    else if(result.status == 0){
                       // Alert.alert("No appointment")
                    }
                  
                })
                .catch(error => console.log('error', error));
        }))
    }

    useFocusEffect(
        React.useCallback(() => {
            loadMyAppointment()
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
                        <Text style={styles.headtxt}>Appointment</Text>
                    </View>
                   {(appointmentList)?
                   <FlatList
                    style={{ width: '100%' }}
                    data={appointmentList}
                    renderItem={({ item }) => <AppointmentCard appointmentDetails={item} navigation={navigation} />}
                    keyExtractor={item => Math.random().toString()}
                />:<View style={styles.norecord}>
                <SvgNoData/>
                <Text style={styles.recordtxt}>
                  No Appointment
                </Text>
                </View>

                }
                    {/* <AppointmentCard />
                    <AppointmentCard /> */}
                </LinearGradient>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default Appointment

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
    },
    headtxt: {
        color: '#363636',
        fontSize: 18,
        marginLeft: 80
    },
    norecord:{
        alignItems:'center',
        padding:90
      },
      recordtxt: {
        fontSize: 20,
        color: "#363636",
      },
})