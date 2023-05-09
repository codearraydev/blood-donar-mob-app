import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import { SvgCardLine, SvgDistance, SvgHomeLogo, SvgMap, SvgMapText, SvgNotification, SvgTxtSearch } from './svg'
import React, { useEffect } from 'react'

const Card = (props) => {

    // useEffect(() => {
    //     Alert.alert(JSON.stringify(props.orgDetails.organizationName))
    // },[])
    return (
        <View style={styles.midview}>
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
                        <View>
                            <Text style={styles.name}>
                                {props.orgDetails.organizationName}
                            </Text>
                            <Text style={styles.sname}>
                                {props.orgDetails.phoneno}
                            </Text>
                        </View>
                    </View>
                </View>
                <View>
                    <SvgMapText />
                </View>
            </View>
            <SvgCardLine />
            <View style={styles.sbview1}>
                <View style={{ flexDirection: 'row', marginTop: 2 }}>
                    <SvgMap />
                    <Text style={styles.loc}>
                        {'  '}{props.orgDetails.district}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 4 }}>
                    <SvgDistance />
                    <Text style={styles.loc}>
                        {' '}45 minutes away
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({


    midview: {
        height: 110,
        marginTop: 9,
        marginBottom: 2,
        width: '96%',
        elevation: 10,
        borderRadius: 5,
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
    subcard: {
        width: '80%', alignItems: 'center',
        justifyContent: 'space-between',

        flexDirection: 'row'
    },
    sbview1: {
        width: '95%',
        justifyContent: 'space-between'
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
    loc: {
        color: '#504F4F',
        fontSize: 12
    }
})