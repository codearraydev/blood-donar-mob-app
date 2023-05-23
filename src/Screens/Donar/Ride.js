import { StyleSheet, Text, View,FlatList,TouchableOpacity,ActivityIndicator } from 'react-native'
import React, { useEffect,useState } from 'react'
import { getUserAsyncData } from '../../shared/core/DataStore'
import RideCard from './RideCard'
import { SvgBackArrow } from '../../components/svg'

const Ride = ({navigation}) => {
    const [detail,setDetail]= useState("")
    const [loading , setLoading] = useState(false)
    Allride=()=>{
        getUserAsyncData().then((res => {
            setLoading(true)
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getMyRide/"+res.id, requestOptions)
            .then(response => response.json())
            .then(result =>{
                console.log("result Ride",result,"HELO")
                setDetail(result.data)
                setLoading(false)
        })
            .catch(error => {
                console.log('error', error)
                setLoading(false)
            });
        }))
    }
    useEffect(()=>{
        Allride()
    },[])
  return (
    <View style={styles.Mview}>
    <View style={styles.top}>
        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
            <SvgBackArrow />
        </TouchableOpacity>
        <Text style={styles.headtxt}>Ride Detail</Text>
    </View>
    {loading && <ActivityIndicator color={'blue'} size={'large'} />}
    <FlatList
                style={{ width: '100%' }}
                data={detail}
                renderItem={({ item }) => <RideCard rideDetails={item} navigation={navigation} />}
                keyExtractor={item => Math.random().toString()}
            />
 </View>
  )
}

export default Ride

const styles = StyleSheet.create({
    Mview: {
        alignItems: 'center',

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