import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RideCard = (props) => {
  return (
     <View style={styles.mview}>
           <View style={styles.detail}>
                    <Text style={styles.txt1}>Name</Text>
                    <Text style={styles.txt}>{props.rideDetails.VolunteerName}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.txt1}>Phone</Text>
                    <Text style={styles.txt}>{props.rideDetails.VolunteerPhoneno}</Text>
                </View>
    </View>
  )
}

export default RideCard

const styles = StyleSheet.create({
    mview:{
        height:90,
        width:'90%',
        backgroundColor:'#fff',
        alignSelf:'center',
        borderRadius:8,
        marginTop:15
    },
    detail: {
        flexDirection: 'row',
        width: '85%',
        marginTop: 18,
        alignItems: 'center',
        alignSelf:'center'

    },
    txt: {
        marginLeft: 30,
        color: '#504F4F',
        fontSize: 12
    },
    txt1: {
        fontSize: 14,
        color: '#878787',
    },
})