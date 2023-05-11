import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native'
import { SvgCardLine, SvgDistance, SvgHomeLogo, SvgMap, SvgMapText, SvgNotification, SvgTxtSearch } from './../../components/svg'
import React, { useEffect } from 'react'
const CaseItem = (props) => {
    return (
        // <View style={{ flex: 1, padding: 10, width: '100%', backgroundColor: '#fff', marginTop: 10 }} >
        //     <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
        //         <View>
        //             <Text>ORG Name: {props.orgDetails.organizationName}</Text>
        //             <Text>ORG Email: {props.orgDetails.organizationEmail}</Text>
        //         </View>

        //         <View>
        //             <Text>Pat name: {props.orgDetails.pat_name}</Text>
        //             <Text>Pat Phone: {props.orgDetails.pat_phoneno}</Text>
        //         </View>
        //     </View>

        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        //         <Text>Case Status: {props.orgDetails.caseStatus}</Text>
        //         <Text>Case Decision: {props.orgDetails.casedecision}</Text>
        //     </View>

        // </View >
        <View style={styles.midview}>
             <View style={styles.card}>
                <View style={styles.card1}>
                    <View style={styles.subcard}>
                        <View>
                            <Image
                                style={{ height: 35, width: 35, borderRadius: 5 }}
                                source={{
                                    uri: 'https://picsum.photos/200/300?random=1',
                                }}
                            />
                        </View>
                        <View style={{marginLeft:10}}>
                            <Text style={styles.name}> {props.orgDetails.organizationName}</Text>

                        </View>
                        
                    </View>
                </View>
                {/* <View style={{ marginLeft: 10, flexDirection:'row' }}>
                            <Text style={styles.name}>
                                {props.orgDetails.organizationName}
                            </Text>
                            <Text style={styles.sname}>
                            {props.orgDetails.organizationEmail}
                            </Text>
                        </View> */}
                        <View style={styles.lview}>
                
                <View style={styles.namef}>
                    <Text style={styles.nametxt}>Email:</Text>
                    <Text style={styles.getfontxt}> {props.orgDetails.organizationEmail}</Text>
                </View>
            </View>
            </View>
            <SvgCardLine />
           <Text style={styles.name}>Patient</Text>
            <View style={styles.lview}>
                <View style={styles.namef}>
                    <Text style={styles.nametxt}>Name:</Text>
                    <Text style={styles.getfontxt}>{props.orgDetails.pat_name}</Text>
                </View>
                <View style={styles.namef}>
                    <Text style={styles.nametxt}>Contact:</Text>
                    <Text style={styles.getfontxt}>{props.orgDetails.pat_phoneno}</Text>
                </View>
                {/* <View style={styles.namef}>
                    <Text style={styles.statustxt}>Status</Text>
                    <View style={styles.statusview}>
                    <Text style={styles.stxt}>{props.orgDetails.caseStatus}</Text>
                    </View>
                    
                </View> */}
            </View>
            <View style={styles.lview}>
            <View style={styles.named}>
                    <Text style={styles.statustxt}>Status</Text>
                    <View style={styles.statusview}>
                    <Text style={styles.stxt}>{props.orgDetails.caseStatus}</Text>
                    </View>
                    
                </View>
                <View style={styles.namef}>
                    <Text style={styles.statustxt}>Decision</Text>
                    <View style={styles.decisionview}>
                    <Text style={styles.dtxt}>{props.orgDetails.casedecision}</Text>
                    </View>
                    
                </View>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    midview: {
        height: 150,
        marginTop: 9,
        marginBottom: 2,
        width: '95%',
        elevation: 10,
        borderRadius: 8,
        // alignItems: 'center',
        backgroundColor: '#FFFFFF',
        //justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 10,
        elevation: 5,
        alignSelf:'center'
    },
    card: {
        
        width: '95%',
        marginBottom:8
    },
    card1: {
        flexDirection: 'row',

    },
    subcard: {
        width: '80%', alignItems: 'center',


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
    },
    lview:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
        marginTop:2

    },
    named:{
        marginTop:5,
        width:'70%',
        flexDirection:'row',
        alignItems:'center',
    },
    namef:{
        marginTop:5,
        width:'50%',
        flexDirection:'row',
        alignItems:'center',
    },
    status:{
        marginTop:5,
        width: '28%',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    nametxt:{
        color:'#504F4F',
        fontSize:12
    },
    getnametxt:{
        color:'#262525',
        fontSize:10,
        fontWeight:'bold',
        marginLeft:30
    },
    getfontxt:{
        color:'#262525',
        fontSize:11,
        fontWeight:'bold',
        marginLeft:1
    },
    getphonetxt:{
        color:'#262525',
        fontSize:12,
        marginLeft:20
    },
    statustxt:{
        color:'#504F4F',
        fontSize:10
    },
    statusview:{
        width:48,
        height:15,
        alignItems:'center',
        backgroundColor:'#E4FFDE',
        borderRadius:5,
        
    },
    stxt:{
        fontSize:10,
        color:'#039416'
    },
    decisionview:{
        width:48,
        height:15,
        alignItems:'center',
        backgroundColor:'#FFDEE9',
        borderRadius:5,
        
    },
    dtxt:{
        fontSize:10,
        color:'#CE7E99'
    }
})
export default CaseItem;