import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgMap } from '../../components/svg';


const PatientInfo = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, }}>
            <KeyboardAvoidingView style={{ flex: 1, }}>
                <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
                    <View style={styles.top}>
                        <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => navigation.goBack()}>
                            <SvgBackArrow />
                        </TouchableOpacity>
                        <Text style={styles.headtxt}>Patient Info</Text>
                    </View>
                    <View style={styles.topview}>
                      <View style={styles.subview}>
                          <View style={styles.imgview}>
                              <Image source={require("./../../assets/profile.png")} style={styles.imgview}/>
                          </View>
                      </View>
                      <View style={styles.subview1}>
                        <Text style={styles.headingtxt}>Emma</Text>
                        <Text style={styles.subtxt}>Student ,17 years old, with history of congestive heart failure,</Text>
                        <Text style={styles.subtxt}>coronary artery disease risk factors of hypertension and post</Text>
                        <Text style={styles.subtxt}>post menopausal state.</Text>
                        </View>
                    </View>

                    <View style={styles.secondview}>
                    <View style={styles.midview}>
                            <Text style={styles.txt}>
                            Diagnosis
                            </Text>
                            <Text style={styles.txt1}>Autoimmune hemolytic anemia, Tuberclosis</Text>
                        </View>
                        <View style={styles.midview}>
                            <Text style={styles.txt}>
                            Location
                            </Text>
                            <View style={styles.loc}>
                              <SvgMap color={'#CECECE'} style={{marginRight:8}}/>
                            <Text style={styles.txt1}>Autoimmune hemolytic anemia, Tuberclosis</Text>

                            </View>
                        </View>
                        <SvgCardLine style={styles.line}/>
                        <View style={styles.lview}>
                            <View>
                              <Text style={styles.group}>Need</Text>
                              <Text style={styles.group1}>9</Text>
                            </View>
                            <SvgBloodGroup group={"B+"} />
                            <View>
                              <Text style={styles.group}>Left</Text>
                              <Text style={styles.group1}>5</Text>
                            </View>
                        </View>
                    </View>
                    
                    <TouchableOpacity style={styles.continuebtn} onPress={() => null()}>
                    <Text style={styles.continuetxt}>Donation Request</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default PatientInfo

const styles = StyleSheet.create({
  Mview:
  {
      flex: 1,
      backgroundColor: '#F3F3F3',
      alignItems: 'center',
      //justifyContent: 'space-between'
  },
  top: {
    width: '90%',
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center'
},
headtxt: {
    color: '#363636',
    fontSize: 18,
    marginLeft: 80
},
topview:{
  height:230,
  width: '95%',
  borderRadius:10,
  backgroundColor:'#FFFFFF',
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  alignItems:'center',
  elevation: 3,
  justifyContent:'space-between'

},
subview:{
  width: '100%',
  height:90,
  borderTopLeftRadius:10,
  borderTopRightRadius:10,
  backgroundColor:'#FEF2FB',
 alignItems:'center',
  paddingTop:20
},
imgview:{
  height:90,
  width:90,
  borderWidth:1,
  borderColor:'#B1B1B1',
  borderRadius:45

},
subview1:{
  width: '100%',
  borderBottomLeftRadius:10,
  borderBottomRightRadius:10,
  height:110,
 alignItems:'center',
},
headingtxt:{
  color:'#333333',
  fontSize:22,
  fontWeight:'bold',
  marginBottom:8
},
subtxt:{
  color:'#777777',
  fontSize:12
},
secondview:{
  marginVertical:10,
  height:300,
  width: '95%',
  borderRadius:10,
  backgroundColor:'#FFFFFF',
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  alignItems:'center',
  elevation: 3,
  paddingVertical:8

},
midview: {
  height: 45,
  marginTop: 12,
  width: '95%',
  justifyContent: 'space-between'
},
txt:{
  fontSize:14,
  color:'#878787',
},
txt1:{
  color:'#333333',
  fontSize:14
},
loc:{
  flexDirection:'row',
  alignItems:'center'
},
line:{
  marginTop:30
},
lview:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  width: '92%',
},
group:{
  fontSize:14,
  color:'#777777'
},
group1:{
  fontSize:16,
  color:'#333333',
  alignSelf:'center'
},
continuebtn: {
  height: 35,
  borderRadius: 10,
  width: "70%",
  backgroundColor: '#FF478C',
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 5,
  marginTop:10

},
continuetxt: {
  color: '#FFFFFF',
  fontSize: 18,
  //fontFamily: 'Nunito Sans',
  fontWeight: '700'
},
})