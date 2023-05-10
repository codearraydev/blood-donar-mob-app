import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SvgCardLine, SvgDistance, SvgMap, SvgMapText, SvgTime } from '../../components/svg'

const DonationRequestCard = () => {
  return (
    <TouchableOpacity style={styles.midview}>
        <View style={styles.card}>
                <View style={styles.card1}>
                    <View style={styles.subcard}>
                        <View>
                            <Image
                                style={{ height: 55, width: 55, borderRadius: 5 }}
                                source={{
                                    uri: 'https://picsum.photos/200/300?random=1',
                                }}
                            />
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={styles.name}>
                            Lauren Griffith
                            </Text>
                            <View style={styles.detailview}>
                            <Text style={[styles.sname,{color:'#5949E6'}]}>
                            5
                            </Text>
                            <Text style={[styles.sname,{color:'#C1C1C1'}]}>
                            /9
                            </Text>
                            <Text style={[styles.sname,{marginLeft:10,color:'#FF6B6B'}]}>
                            AB+
                            </Text>
                            <Text style={styles.sname}>
                            {' '}Required
                            </Text>
                            </View>
                            
                        </View>
                    </View>
                </View>
                <View style={styles.uview}>
                    <Text style={styles.utxt}>Urgent</Text>
                </View>
            </View>
            <SvgCardLine />
            <View style={styles.sbview1}>
                <View style={{ flexDirection: 'row', marginTop: 2 }}>
                    <View style={styles.icon}>
                    <SvgMap />
                    </View>
                   
                    <Text style={styles.loc}>
                    National cancer Hospital Sector F DHA Phase II, Islamabad.
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                <View style={styles.icon}>
                    <SvgDistance />
                    </View>
                    <Text style={styles.loc}>
                    21-May -2023
                    </Text>
                    <View style={[styles.icon,{marginLeft:20}]}>
                    <SvgTime color={"#cecece"}/>
                    </View>
                    <Text style={styles.loc}>
                        10 minutes ago
                    </Text>
                </View>
            </View>
    </TouchableOpacity>
  )
}

export default DonationRequestCard

const styles = StyleSheet.create({
    midview: {
        height: 120,
        marginTop: 9,
        marginBottom: 2,
        width: '95%',
        elevation: 10,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 5,
        elevation: 5,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '95%',
    },
    card1: {
        flexDirection: 'row',

    },
    name: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 14
    },
    sname: {
        fontSize: 12,
        color: '#504F4F'
    },
    subcard: {
        width: '80%', alignItems: 'center',
        

        flexDirection: 'row'
    },
    uview:{
        width:65,
        height:22,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFDEE2',
        borderRadius:5
    },
    utxt:{
        color:'#FF5656',
        fontSize:10
    },
    detailview:{
        flexDirection:'row'
    },
    sbview1: {
        width: '95%',
        justifyContent: 'space-between'
    },
    loc: {
        color: '#504F4F',
        fontSize: 10,
        marginLeft:8
    },
    icon:{
        width:15,
        alignItems:'center',
        justifyContent:'center'
       
    }
})
