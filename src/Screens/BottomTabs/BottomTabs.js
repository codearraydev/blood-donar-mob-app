
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Alert, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'

import Home from '../Home/Home';
import { SvgHome, SvgProfile, SvgSearch, SvgSearchResult } from '../../components/svg';
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';

const Tab = createBottomTabNavigator()
const BottomTabs= ({ navigation }) => {
  return (
    
    
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
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
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgHome color="#ff478c" /> : <SvgHome color="#BFBFBF" />}
          </View>
        )
      }}
      />
       <Tab.Screen name="Search" component={Search} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgSearch color="#ff478c" /> : <SvgSearch color="#BFBFBF" />}
          </View>
        )
      }}
      />
       <Tab.Screen name="SearchResult" component={SearchResult} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', 'justifyContent': 'center' }}>
            {focused ? <SvgSearchResult color="#ff478c" /> : <SvgSearchResult color="#BFBFBF" />}
          </View>
        )
      }}
      />
      <Tab.Screen name="Profile" component={SearchResult} options={{
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
export default BottomTabs
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