import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgMap } from '../../components/svg';
import AppointmentCard from './AppointmentCard';

const Appointment = () => {
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
            <AppointmentCard/>
            <AppointmentCard/>
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
})