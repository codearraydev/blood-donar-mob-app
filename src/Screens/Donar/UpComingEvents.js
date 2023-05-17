import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import moment from 'moment'
import { SvgMap, SvgPicker, SvgTime } from '../../components/svg'

const UpComingEvents = (props) => {
    return (
        <TouchableOpacity style={styles.midview}>
            <View>
                <Image
                    style={styles.imgview}
                    source={{
                        uri: 'https://picsum.photos/200/300?random=1',
                    }}
                />
            </View>
           <View style={styles.detail}>
            <Text style={styles.detailtxt}>
            {props.eventsDetails.eventName}
            </Text>
            <View style={styles.uview}>
                    <Text style={styles.utxt}>join now</Text>
                </View>
           </View>
           <View style={styles.lview}>
                    <View style={styles.icon}>
                        <SvgMap color={"#fc7474"} />
                    </View>

                    <Text style={styles.loc}>
                    {props.eventsDetails.eventAddress}
                    </Text>
                </View>
           <View style={styles.lview}>
                    <View style={styles.ldetail}>
                        <Text style={styles.num}>
                        {props.eventsDetails.totalVisitors} +
                        </Text>
                        <Text style={styles.txt}>
                           {' '}Joined
                        </Text>
                    </View>
                    <View style={[styles.ldetail,{justifyContent:'space-between'}]}>
                        <View style={styles.dview}>
                            <SvgPicker/>
                            <Text style={styles.timedate}>
                            {moment(props.eventsDetails.createdAt).format("DD/MM/YYYY")}
                            </Text>
                        </View>
                        <View style={styles.dview}>
                            <SvgTime color={'#4024b8'}/>
                            <Text style={styles.timedate}>
                            {moment(props.eventsDetails.createdAt).format("hh:mm")}
                            </Text>
                        </View>
                        
                    </View>
           </View>
           
            
        </TouchableOpacity>
    )
}

export default UpComingEvents

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
        //padding: 5,
        elevation: 5,
        alignSelf:'center'
    },
    imgview: {
        width: '100%',
        //backgroundColor: 'red',
        height: 80,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    detail:{
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between',
        padding:5
    },
    uview:{
        width:65,
        height:22,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#C8FFC2',
        borderRadius:5
    },
    utxt:{
        color:'#6B6B6B',
        fontSize:10
    },
    detailtxt:{
        color:'#333333',
        fontWeight:'bold',
        fontSize:14
    },
    lview:{
        flexDirection:'row',
        paddingHorizontal:5,
       
    },
    ldetail:{
        flexDirection:'row',
        alignItems:'center',
      
        width: '55%',
    },
    num:{
        color:'#FF6B6B',
        fontSize:14
    },
    txt:{
        color:'#828282',
        fontSize:12
    },
    dview:{
        flexDirection:'row',
        alignItems:'center',
        width: '45%',
        
    },
    timedate:{
        color:'#828282',
        fontSize:10,
        marginLeft:10
    },
    loc: {
        color: '#504F4F',
        fontSize: 10,
        marginLeft: 8
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center'

    }
})