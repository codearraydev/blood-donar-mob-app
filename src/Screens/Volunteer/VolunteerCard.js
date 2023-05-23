import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'


const VolunteerCard = (props) => {
  return (
    <TouchableOpacity style={styles.midcard} onPress={()=>props.navigation.navigate('VolunteerDecision',
    {name:props.rideDetails.reciverName,phone:props.rideDetails.pat_phoneno,lat:props.rideDetails.lat,lng:props.rideDetails.lng,id:props.rideDetails.id})}>
      <Image
                                style={{ height: 60, width: 60, borderRadius: 60,marginTop:15,marginLeft:5 }}
                                source={{
                                    uri: 'https://picsum.photos/200/300?random=1',
                                }}
                            />
                            <View style={styles.det}>
                                <View style={styles.detail}>
                                <Text style={styles.txt1}>Name</Text>
                                <Text style={styles.txt}>{props.rideDetails.reciverName}</Text>
                                </View>
                               <View style={styles.detail}>
                               <Text style={styles.txt1}>Phone</Text>
                                <Text style={styles.txt}>{props.rideDetails.pat_phoneno}</Text>
                               </View>
                                
                            </View>
                            
                        
    </TouchableOpacity>
  )
}

export default VolunteerCard

const styles = StyleSheet.create({
    midcard:{
        height:90,
        width:'95%',
        backgroundColor:'#ffff',
        borderRadius:8,
        elevation:4,
        //justifyContent:'space-between',
       // justifyContent:'center',
        flexDirection:'row',
        alignSelf:'center',
        marginVertical:10
    },
    det:{
        marginLeft:20,
        justifyContent:'center'
    },
    detail:{
        flexDirection:'row',
        
    },
    txt:{
        marginLeft:30,
        color: '#504F4F',
        fontSize: 12
    },
    txt1: {
        fontSize: 14,
        color: '#878787',
      },
})