import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgAppointment, SvgBackArrow } from '../../components/svg'

const PatientInfoNext = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                    <View style={styles.top}>
                        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                            <SvgBackArrow />
                        </TouchableOpacity>
                    </View>
                    <SvgAppointment/>
                    <View style={styles.appview}>
                        <Text style={styles.appointbook}>Appointment Booked</Text>
                        <Text style={styles.appointbooked}>Your Appointment has been Booked</Text>
                    </View>
                    <View style={styles.appview2}>
                        <Text style={styles.txt}>Your blood donating appointment has been booked</Text>
                        <Text style={styles.txt}>Please make sure to be on time</Text>
                    </View>
                    <View style={styles.daysleft}>
                        <Text style={styles.num}>20</Text>
                        <Text style={styles.dleft}>Days Left</Text>
                    </View>
                    <TouchableOpacity style={styles.continuebtn} onPress={() => navigation.navigate('DonarBottomTabs')}>
                    <Text style={styles.continuetxt}>Home</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PatientInfoNext

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
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:20
},
appview:{
    marginTop:15,
    alignItems:'center'
  //  borderWidth:1,

},
appview2:{
    marginTop:35,
    alignItems:'center'
  //  borderWidth:1,

},
appointbook:{
    color:'#36B510',
    fontSize:25,
    fontWeight:'bold',
    
},
appointbooked:{
    color:'#217807',
    fontSize:14,
    marginTop:7
   
},
txt:{
    color:'#787878',
    fontSize:13,
    lineHeight:22
},
daysleft:{
    marginTop:45,
    alignItems:'center'
},
num:{
    color:'#FF6B6B',
    fontSize:60
},
dleft:{
    color:'#828282',
    fontSize:15
},
continuebtn: {
    height: 35,
    borderRadius: 10,
    width: "80%",
    backgroundColor: '#FF478C',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop:40
  
  },
  continuetxt: {
    color: '#FFFFFF',
    fontSize: 18,
    //fontFamily: 'Nunito Sans',
    fontWeight: '700'
  },
})