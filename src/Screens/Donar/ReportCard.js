import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SvgDistance, SvgMap, SvgTime } from '../../components/svg'
import moment from 'moment';

const ReportCard = (props) => {



    return (
        <View style={styles.midview}>
            <Text style={styles.heading}>{moment(props.resultDetails.BloodDonatedDate).format("DD/MM/YYYY")}</Text>

            <View style={styles.secview}>
                <View style={styles.childview}>
                <Text style={styles.heading}>Title</Text>
                <Text style={styles.txt}>Hemoglogbin</Text>
                <Text style={styles.txt}>Platelet</Text>
                <Text style={styles.txt}>WBC Count</Text>
                <Text style={styles.txt}>RBC Count</Text>
                </View>
                <View style={styles.childview1}>
                <Text style={styles.heading}>Value</Text>
                <Text style={styles.txt}>{props.resultDetails.Hemoglobin}</Text>
                <Text style={styles.txt}>{props.resultDetails.plateletCount}</Text>
                <Text style={styles.txt}>{props.resultDetails.whiteBloodCells}</Text>
                <Text style={styles.txt}>{props.resultDetails.redBloodCells}</Text>
                </View>
                <View style={styles.childview}>
                <Text style={styles.heading}>Range</Text>
                <Text style={styles.txt}>12-18</Text>
                <Text style={styles.txt}>100K-450K</Text>
                <Text style={styles.txt}>200K-350K</Text>
                <Text style={styles.txt}>100K-150K</Text>
                </View>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.heading}>Comments</Text>
                <Text style={styles.txt}>{props.resultDetails.comments}</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <Text style={styles.heading}>Diet Plan</Text>
                <Text style={styles.txt}>{props.resultDetails.dietPlan}</Text>
            </View>
        </View>
    )
}

export default ReportCard

const styles = StyleSheet.create({
midview:{
    padding: 12, 
    width: '96%', 
    backgroundColor: '#FFFFFF',
    marginTop: 20, 
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    alignSelf:'center',
    borderRadius:10,
    marginBottom: 2,
    
},
secview:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginVertical:5,
    
},
childview:{
    width:'30%',
    height:130,
     justifyContent:'space-between'
},
childview1:{
    width:'23%',
    height:130,
     justifyContent:'space-between'
},
heading:{
    color:'#504F4F',
    fontSize:14,
    fontWeight:'bold'
},
txt:{
    color:'#828282',
    fontSize:14
}
})




