import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SvgMessage } from '../../components/svg'

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

            <View style={styles.detail}>
                <Text style={styles.txt1}>Status</Text>
                {(props.rideDetails.rideBooked)?
                <View style={styles.uview}>
                    
                    <Text style={styles.utxt}>Accepted</Text>
                   
                   
                </View>:
                 <View style={styles.uview1}>
                    
                
                 <Text style={styles.utxt}>Rejected</Text>
                
             </View>
                 }
                <TouchableOpacity onPress={()=> props.navigation.navigate("ChatScreen",{id:props.rideDetails.id})} style={{height:40,width: 40,borderRadius:30,backgroundColor:'#FF478C',justifyContent:'center',alignItems:'center',right:0,position:'absolute',elevation:5}}><SvgMessage/></TouchableOpacity>
            </View>


        </View>
    )
}

export default RideCard

const styles = StyleSheet.create({
    mview: {
        height: 140,
        width: '90%',
        backgroundColor: '#fff',
        alignSelf: 'center',
        borderRadius: 8,
        marginTop: 15
    },
    detail: {
        flexDirection: 'row',
        width: '85%',
        marginTop: 18,
        alignItems: 'center',
        alignSelf: 'center'

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
    uview: {
        width: 65,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C8FFC2',
        borderRadius: 5,
        marginLeft: 30
    },
    uview1: {
        width: 65,
        height: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFDEE2',
        borderRadius: 5,
        marginLeft: 30
    },
    utxt: {
        color: '#6B6B6B',
        fontSize: 10
    },
})