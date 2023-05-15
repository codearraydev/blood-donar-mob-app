import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SvgDistance, SvgMap, SvgTime } from '../../components/svg'

const AppointmentCard = () => {
    return (
        <View style={styles.midview}>
            <Image
                style={styles.imgview}
                source={{
                    uri: 'https://picsum.photos/200/300?random=1',
                }}
            />
            <View style={styles.detail}>
                <Text style={styles.detailtxt}>
                    National Cancer Hospital
                </Text>
                <View style={styles.uview}>
                    <Text style={styles.utxt}>91</Text>
                    <Text style={styles.daystxt}>{' '}Days left</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <View style={styles.icon}>
                    <SvgDistance />
                </View>
                <Text style={styles.loc}>
                    21-May -2023
                </Text>
                <View style={[styles.icon, { marginLeft: 20 }]}>
                    <SvgTime color={"#cecece"} />
                </View>
                <Text style={styles.loc}>
                    10 minutes ago
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', marginTop: 3 }}>
                <View style={styles.icon}>
                    <SvgMap color={"#fc7474"} />
                </View>

                <Text style={styles.location}>
                    National cancer Hospital Sector F DHA Phase II, Islamabad.
                </Text>
            </View>
        </View>
    )
}

export default AppointmentCard

const styles = StyleSheet.create({
    midview: {
        height: 230,
        marginTop: 9,
        marginBottom: 2,
        width: '95%',
        elevation: 10,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 8,
        elevation: 5,
    },
    imgview: {
        width: '100%',
        height: 130,
        borderRadius: 8
    },
    detail: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 5
    },
    detailtxt: {
        color: '#333333',
        fontWeight: 'bold',
        fontSize: 14
    },
    uview: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    utxt: {
        color: '#FF6B6B',
        fontSize: 17
    },
    daystxt: {
        color: '#828282',
        fontSize: 10
    },
    loc: {
        color: '#504F4F',
        fontSize: 10,
        marginLeft: 8
    },
    location: {
        color: '#504F4F',
        fontSize: 11,
        marginLeft: 8
    },
    icon: {
        width: 15,
        alignItems: 'center',
        justifyContent: 'center'

    }
})