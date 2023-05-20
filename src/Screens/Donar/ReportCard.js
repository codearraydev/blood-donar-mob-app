import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SvgDistance, SvgMap, SvgTime } from '../../components/svg'
import moment from 'moment';

const ReportCard = (props) => {



    return (
        <View style={{
            padding: 10, width: '96%', backgroundColor: '#f3f3f3', marginTop: 20, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }}>
            <Text>Report Date: 12/5/2006</Text>
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: 90, fontWeight: 'bold' }}>Title</Text>
                <Text style={{ width: 60, fontWeight: 'bold' }}>Value</Text>
                <Text style={{ width: 80, fontWeight: 'bold' }}>Range</Text>
            </View>


            <View style={{ marginTop: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: 90 }}>Hemoglogbin</Text>
                <Text style={{ width: 80 }}>{props.resultDetails.Hemoglobin}</Text>
                <Text style={{ width: 80 }}>12-18</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: 90 }}>Platelet</Text>
                <Text style={{ width: 80 }}>{props.resultDetails.plateletCount}</Text>
                <Text style={{ width: 80 }}>100K-450K</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: 90 }}>WBC Count</Text>
                <Text style={{ width: 80 }}>{props.resultDetails.whiteBloodCells}</Text>
                <Text style={{ width: 80 }}>200K-350K</Text>
            </View>
            <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ width: 90 }}>RBC Count</Text>
                <Text style={{ width: 80 }}>{props.resultDetails.redBloodCells}</Text>
                <Text style={{ width: 80 }}>100K-150K</Text>
            </View>


            <View style={{ marginTop: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Comments</Text>
                <Text>{props.resultDetails.comments}</Text>
            </View>

        </View>
    )
}

export default ReportCard

const styles = StyleSheet.create({

})




