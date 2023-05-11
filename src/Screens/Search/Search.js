import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { getUserAsyncData } from '../../shared/core/DataStore'
import CaseItem from './CaseItem'
import { FlatList } from 'react-native-gesture-handler'
import { SvgBackArrow } from '../../components/svg';

const Search = ({navigation}) => {


  const [myCases, setMyCases] = useState()

  const getMyCases = () => {
    getUserAsyncData().then((res => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + res.token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getReciverCase", requestOptions)
        .then(response => response.json())
        .then(result => {
          setMyCases(result.data)
        })
        .catch(error => console.log('error', error));
    }))
  }


  useEffect(() => {
    getMyCases()
  }, [])
  return (
   
    <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                    <View style={styles.top}>
                        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                            <SvgBackArrow />
                        </TouchableOpacity>
                        <Text style={styles.headtxt}>My Cases</Text>
                    </View>
      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={myCases}
        renderItem={({ item }) => <CaseItem orgDetails={item} />}
        keyExtractor={item => Math.random().toString()}
      />
      </LinearGradient>
      </KeyboardAvoidingView>
      </SafeAreaView>


    
  )
}

export default Search

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
    marginLeft: 90
},
})