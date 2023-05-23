
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

import Home from '../Home/Home';
import { SvgBloodDonation, SvgCalender, SvgdonarTab, SvgHome, SvgProfile, SvgReport, SvgRide, SvgSearch, SvgSearchResult } from '../../components/svg';
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';
import DonarHome from '../Donar/DonarHome';
import Appointment from '../Donar/Appointment';
import Reports from '../Donar/Reports';
import Profile from '../Profile/Profile';
import Events from '../Donar/Events';
import Ride from '../Donar/Ride';

const Tab = createBottomTabNavigator()
const DonarBottomTab = ({ navigation }) => {
  return (


    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="DonarHome"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          backgroundColor: '#fff',
        }
      })}
    >
      <Tab.Screen name="DonarHome" component={DonarHome} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgHome color="#ff478c" /> : <SvgHome color="#BFBFBF" />}
          </View>
        )
      }}
      />
      <Tab.Screen name="Events" component={Events} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgCalender color="#ff478c" /> : <SvgCalender color="#BFBFBF" />}
          </View>
        )
      }}
      />
      {/* <Tab.Screen name="Searchlt" component={SearchResult} options={{
        tabBarShowLabel: false,
        tabBarLabel: '',
        tabBarIcon: ({ focused }) => (
          <TouchableOpacity>
            <View style={{
              marginBottom: 75,
              shadowColor: "#000",
              elevation:8,
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27, justifyContent: 'center', alignItems: 'center', borderRadius: 58, height: 60, width: 60, backgroundColor: '#ff478c'
            }}>
              <SvgdonarTab />
            </View>
            {/* <Text style={{marginBottom: 20,marginTop:-6, fontSize: 12 , fontWeight: 'bold'}}>Scan Vitals</Text> */}
      {/* </TouchableOpacity>  */}
      {/* // <View style={{ alignItems: 'center', justifyContent: 'center', }}>
          //   {focused ? <SvgDashboard color="#4682B4" /> : <SvgDashboard color="#b1b1b1" />}
          // </View> 
         )
      }}  */}
      {/* /> */}
      <Tab.Screen name="Appointment" component={Appointment} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgBloodDonation color="#ff478c" /> : <SvgBloodDonation color="#BFBFBF" />}
          </View>
        )
      }}
      />
      <Tab.Screen name="Reports" component={Reports} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgReport color="#ff478c" /> : <SvgReport color="#BFBFBF" />}
          </View>
        )
      }}
      />
      <Tab.Screen name="Ride" component={Ride} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgRide color="#ff478c" /> : <SvgRide color="#BFBFBF" />}
          </View>
        )
      }}
      />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgProfile color="#ff478c" /> : <SvgProfile color="#BFBFBF" />}
          </View>
        )
      }}
      />

    </Tab.Navigator>
  )
}
export default DonarBottomTab
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },

  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },

  bottomBar: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  middleIcon: {
    bottom: 18,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
  }
});