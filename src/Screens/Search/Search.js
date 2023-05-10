import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getUserAsyncData } from '../../shared/core/DataStore'
import CaseItem from './CaseItem'
import { FlatList } from 'react-native-gesture-handler'

const Search = () => {


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
    <SafeAreaView style={{ backgroundColor: 'grey', flex: 1, alignItems: 'center', padding: 5, marginTop: 10, width: '100%' }}>

      <FlatList
        style={{ flex: 1, width: '100%' }}
        data={myCases}
        renderItem={({ item }) => <CaseItem orgDetails={item} />}
        keyExtractor={item => Math.random().toString()}
      />


    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({})