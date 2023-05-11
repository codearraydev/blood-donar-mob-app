import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList, ScrollView, ActivityIndicator, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SvgCardLine, SvgDistance, SvgHelp, SvgHomeLogo, SvgMap, SvgMapText, SvgNotification, SvgTxtSearch } from '../../components/svg'
import Card from '../../components/Card'
import { useSafeAreaFrame } from 'react-native-safe-area-context'
import { getUserAsyncData } from '../../shared/core/DataStore'
const Home = ({ navigation }) => {


  const [name, setName] = useState('')
  const [userId, setUserId] = useState('')
  const [searchList, setSearchList] = useState()
  const [isLoading, setIsloading] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    getUserAsyncData().then((res => {
      setName(res.name)
      setUserId(res.id)
    }))
  }, [])

  useEffect(() => {
    loadSearchItems()
    //call the fucking function
  }, [])


  const loadSearchItems = () => {
    setIsloading(true)
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ik1aOXF5YkJwS21UMENNUGw4ZTA3IiwiaWF0IjoxNjgzNTMyODU0LCJleHAiOjE2ODM2MTkyNTR9.QW9YsaxGkzJQnbqwGLzte825hZWr8eeKnPhYKTvA304");

    // var raw = {};
    var raw = JSON.stringify({
      "search": searchValue
    });


    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/topBloodBanksAndSearch", requestOptions)
      .then(response => response.json())
      .then(result => {
        setIsloading(false)
        console.log(result)
        setSearchList(result.data)
      })
      .catch(error => console.log('error', error));
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>

      <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>

        <View style={styles.top}>
          <Text style={styles.toptxt}>
            Hello, {name}
          </Text>
          <SvgNotification />
        </View>
        <View style={styles.top1}>
          <Text style={styles.morntxt}>
            Good Morning!
          </Text>
        </View>
        <View style={styles.topcard}>
          <View style={styles.gradview}>
            <View style={styles.coltxt}>
              <Text style={styles.gradtxt}>Your</Text>
              <Text style={styles.gradtxt1}>{' '}Strength</Text>
              <Text style={styles.gradtxt}>{' '}and</Text>
              <Text style={styles.gradtxt2}>{' '}Courage</Text>
            </View>
            <View style={styles.coltxt1}>
              <Text style={styles.gradtxt}>inspire us all.</Text>
            </View>
          </View>
          <View style={styles.gradview1}>
            <SvgHomeLogo />
          </View>
        </View>

        <View style={styles.sectopview}>
          {/* <TextInput
            style={{ color: 'black', fontSize: 12, padding: 10, borderWidth: 1, borderColor: 'grey', width: '90%', height: 38, borderRadius: 5, marginTop: 10 }}
            placeholder={"Zaraj Housing Society, Islamabad"}
            placeholderTextColor='grey'
          /> */}

          <TextInput
            style={{ color: 'black', fontSize: 12, padding: 10, borderWidth: 1, borderColor: 'grey', width: '90%', height: 38, borderRadius: 5, marginTop: 10 }}
            placeholder={"Search by blood Group, blood bank"}
            value={searchValue}
            onChangeText={text => setSearchValue(text)}
            returnKeyType='done'
            onSubmitEditing={() => loadSearchItems()}
            placeholderTextColor='grey'

          />
        </View>
        <View style={styles.top}>
          <Text style={styles.doc}>
            Available Donors
          </Text>
          <Text style={styles.seedoc}>
            See All
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '95%' }}>
          <View style={styles.sbview1}>
            <Text style={styles.txt1}>A+</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>A-</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>B+</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>B-</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>O+</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>O-</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>AB+</Text>
          </View>
          <View style={styles.sbview}>
            <Text style={styles.txt}>AB-</Text>
          </View>
        </View>

        <View style={{ alignItems: 'center' }}>

          {

            isLoading ? <ActivityIndicator style={{ marginTop: 20 }} size={'large'} color={'blue'} />
              :
              <FlatList
              style={{ flex: 1, width: '100%' }}
                data={searchList}
                renderItem={({ item }) => <Card userId={userId} orgDetails={item} navigation={navigation} />}
                keyExtractor={item => Math.random().toString()}
              />
            // <Card />
          }



          {/* <SvgHelp style={styles.svg} /> */}
        </View>

      </LinearGradient>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  Mview:
  {
    flex: 1,
    backgroundColor: '#F3F3F3',
    alignItems: 'center',

  },
  top: {
    height: 30,
    width: '90%',
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

  },
  top1: {
    height: 28,
    width: '90%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

  },
  toptxt: {
    color: '#2D2D2D',
    fontSize: 17,
    //fontWeight: '500',
  },
  morntxt: {
    color: '#363636',
    fontSize: 18,
    fontWeight: '500',
  },
  topcard: {
    height: 115,
    width: '95%',
    marginTop: 3,
    borderRadius: 15,
    backgroundColor: '#FFDEE2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  sectopview: {
    height: 70,
    width: '85%',
    marginTop: -10,
    borderRadius: 8,
    backgroundColor: '#ffff',
    elevation: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  gradview: {

    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  gradview1: {

    width: '30%',
    justifyContent: 'center'
  },
  coltxt: {
    flexDirection: 'row'
  },
  gradtxt: {
    fontSize: 17,
    //fontFamily:'Plus Jakarta Sans',
    color: '#040A64',
    fontWeight: 'bold'
  },
  gradtxt1: {
    fontSize: 18,
    //fontFamily:'Plus Jakarta Sans',
    color: '#C4045E',
    fontWeight: 'bold'
  },
  gradtxt2: {
    fontSize: 17,
    //fontFamily:'Plus Jakarta Sans',
    color: '#FFA500',
    fontWeight: 'bold'
  },
  dateofbirth:
  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    marginTop: 10,
    borderColor: '#B1B1B1',
    height: 37,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF'
  },
  doc: {
    color: '#101010',
    fontSize: 15
  },
  seedoc: {
    color: '#4440BF',
    fontSize: 13
  },
  sbview: {
    height: 30,
    width: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#DFDFDF',
    backgroundColor: '#FFFFFF'
  },
  txt: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#AFAFAF'
  },
  sbview1: {
    height: 30,
    width: 35,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF478C'
  },
  txt1: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffff'
  },
  svg: {
    marginTop: -130,
    marginLeft: 245
  },




  midview: {
    height: 120,
    width: '90%',
    borderWidth: 1,
    borderRadius: 5
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})