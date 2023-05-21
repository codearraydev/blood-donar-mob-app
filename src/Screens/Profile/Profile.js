import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgEdit, SvgMap } from '../../components/svg';
import { getUserAsyncData, setUserAsyncData } from '../../shared/core/DataStore';
import moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({ navigation }) => {
  const [profile, setProfile] = useState([])
  useEffect(() => {
    getUserAsyncData().then((res => {
      console.log("HIIIII", JSON.stringify(res))
      setProfile(res)
    }))
  }, [])
  const logout = () => {
    AsyncStorage.clear();
    
      navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      <KeyboardAvoidingView style={{ flex: 1, }}>
        <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
          <View style={styles.top}>
            <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
              <SvgBackArrow />
            </TouchableOpacity>
            <Text style={styles.headtxt}>Profile</Text>
            <TouchableOpacity onPress={() => logout()}>
              <Text style={styles.logouttxt}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.topview}>
            <View style={styles.subview}>
              <View style={styles.imgview}>
                <Image source={require("./../../assets/profile.png")} style={styles.imgview} />
              </View>
            </View>
          </View>

          <View style={styles.inforview}>
            <Text style={styles.info}>
              Personal Information
            </Text>
           
          </View>
          <View style={styles.firstview}>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Name:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.name}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Email:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.email}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Phone No:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.phoneno}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Age:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.age}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Gender:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.gender}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Location:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.district}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Blood Group:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{profile.bloodGroup}</Text>
              </View>

            </View>
            <View style={styles.tview}>

              <Text style={styles.txt}>
                Joining Date:
              </Text>
              <View style={styles.detailview}>
                <Text gettxt>{moment(profile.createdAt).format("DD/MM/YYYY")}</Text>
              </View>

            </View>
          </View>
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Profile

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
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inforview: {
    width: '90%',
    marginVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  info: {
    fontSize: 15,
    color: '#101010'
  },
  headtxt: {
    color: '#363636',
    fontSize: 18,

  },
  logouttxt: {
    color: '#FF6B6B',
    fontSize: 18,

  },
  topview: {
    height: 110,
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 3,
    justifyContent: 'space-between'

  },
  subview: {
    width: '100%',
    height: 80,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#FEF2FB',
    alignItems: 'center',
    paddingTop: 5
  },
  imgview: {
    height: 90,
    width: 90,
    borderWidth: 1,
    borderColor: '#B1B1B1',
    borderRadius: 45

  },
  subview1: {
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 110,
    alignItems: 'center',
  },
  headingtxt: {
    color: '#333333',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 5,
    //alignSelf:'center',

  },
  subtxt: {
    color: '#777777',
    fontSize: 11
  },
  firstview: {
    // height:'50%',
    width: '95%',
    marginVertical: 5,
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
  tview: {
    height: 38,
    width: '97%',

    borderBottomWidth: 1,
    borderColor: '#E2E6EA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  detailview: {
    width: '60%',
    // borderWidth:1,

  },
  txt: {
    color: '#B5B5B5',
    fontSize: 14
  },
  gettxt: {
    color: '#333333',
    fontSize: 14
  }
})