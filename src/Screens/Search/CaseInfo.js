import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, TextInput, Image, Alert, ActivityIndicator } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgMap } from '../../components/svg';
import { capitalizeFirstLetter, getUserAsyncData } from '../../shared/core/DataStore';
import { useFocusEffect } from '@react-navigation/native';

const CaseInfo = props => {


  const [patientData, setpatientData] = useState(null)
  const [loading, setIsloading] = useState(false)
  useFocusEffect(
    React.useCallback(() => {
      loadCaseDetails()
    }, [])
  );

  const loadCaseDetails = () => {
    setIsloading(true)
    getUserAsyncData().then((res => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + res.token);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getCase/" + props.route.params.caseId, requestOptions)
        .then(response => response.json())
        .then(result => {
          setIsloading(false)
          setpatientData(result.data)
          // Alert.alert(result)
        })
        .catch(error => console.log('error', error));
    }))

  }
  return (
    <SafeAreaView style={{ flex: 1, }}>
      <KeyboardAvoidingView style={{ flex: 1, }}>
        <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
          {loading ? <View>
            <Text>Loading Information Please wait.... </Text>
            <ActivityIndicator />
          </View> :
            <>
              <View style={styles.top}>
                <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
                  <SvgBackArrow />
                </TouchableOpacity>
                <Text style={styles.headtxt}>Case Info</Text>
              </View>
              <View style={styles.topview}>
                <View style={styles.subview}>
                  <View style={styles.imgview}>
                    <Image source={require("./../../assets/profile.png")} style={styles.imgview} />
                  </View>
                </View>
               
                  <Text style={styles.headingtxt}>{patientData?.pat_name}</Text>
                 
                  
               
              </View>
                <View style={styles.applicantview}>
                {/* <View style={styles.lview}> */}
                    <View style={styles.named}>
                      <Text style={styles.nametxt}>Applicant Name:</Text>
                      <View style={styles.txtview}>
                      <Text style={styles.getnametxt}>{patientData?.reciverName}</Text>
                      </View>
                     
                    </View>
                    <View style={styles.named}>
                      <Text style={styles.nametxt}>Applicant Contact:</Text>
                      <View style={styles.txtview}>
                      <Text style={styles.getphonetxt}>{patientData?.pat_phoneno}</Text>
                      </View>
                    </View>

                  {/* </View> */}
                  {/* <View style={styles.stview}> */}
                    <View style={styles.named}>
                      <Text style={styles.nametxt}>Case Status:</Text>
                      <View style={styles.txtview}>
                      <View style={styles.statusview}>

                        <Text style={styles.stxt}>{patientData && capitalizeFirstLetter(patientData?.caseStatus)}</Text>
                      </View>
                      </View>


                    </View>
                    <View style={styles.named}>
                      <Text style={styles.nametxt}>Case Decision:</Text>
                      <View style={styles.txtview}>
                      <View style={styles.decisionview}>
                        <Text style={styles.dtxt}>{patientData && capitalizeFirstLetter(patientData?.casedecision)}</Text>
                      </View>
                      </View>

                    {/* </View> */}
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
                    <SvgMap color={'#CECECE'} style={{ marginRight: 8 }} />
                    <Text style={styles.txt2}>{patientData?.address}</Text>

                  </View>
                </View>
                <SvgCardLine style={styles.line} />
                <View style={styles.llview}>
                  <View>
                    <Text style={styles.group}>Need</Text>
                    <Text style={styles.group1}>{patientData?.bloodBags}</Text>
                  </View>
                  <SvgBloodGroup group={patientData?.pat_bloodType} />
                  <View>
                    <Text style={styles.group}>Left</Text>
                    <Text style={styles.group1}>5</Text>
                  </View>
                </View>
              </View>

             
            </>
          }
        </LinearGradient>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default CaseInfo

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
    marginLeft: 90
  },
  topview: {
    height: 100,
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 3,
    justifyContent: 'space-between'

  },
  subview: {
    width: '100%',
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#FEF2FB',
    alignItems: 'center',
    paddingTop: 10
  },
  imgview: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderColor: '#B1B1B1',
    borderRadius: 45

  },
  subview1: {
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 160,
    alignItems: 'center',
  },
  headingtxt: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtxt: {
    color: '#777777',
    fontSize: 12
  },
  secondview: {
    marginVertical: 10,
    height: 330,
    width: '95%',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    elevation: 3,
    paddingVertical: 8

  },
  applicantview: {
    marginVertical: 10,
    height: 120,
    width: '95%',
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    //alignItems: 'center',
    elevation: 3,
    paddingVertical: 8

  },
  midview: {
    height: 45,
    marginTop: 12,
    width: '95%',
    justifyContent: 'space-between'
  },
  txt: {
    fontSize: 14,
    color: '#878787',
  },
  txt1: {
    color: '#333333',
    fontSize: 14
  },
  txt2: {
    color: '#504F4F',
    fontSize: 12
  },
  loc: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    marginTop: 30
  },
  llview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
    marginTop:10
  },
  group: {
    fontSize: 14,
    color: '#777777'
  },
  group1: {
    fontSize: 16,
    color: '#333333',
    alignSelf: 'center'
  },
  continuebtn: {
    height: 35,
    borderRadius: 10,
    width: "80%",
    backgroundColor: '#FF478C',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginTop: 10

  },
  continuetxt: {
    color: '#FFFFFF',
    fontSize: 18,
    //fontFamily: 'Nunito Sans',
    fontWeight: '700'
  },
  lview: {
    // flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 2,
    justifyContent: 'center',
    //alignItems: 'center'
    paddingHorizontal:10

  },
  stview: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 2,


  },
  named: {
    marginTop: 5,
    //borderWidth:1,
    justifyContent:'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
 
  nametxt: {
    color: '#262525',
    fontSize: 12,
    fontWeight:'bold',
    textAlign:'left'
  },
 
  getnametxt: {
    color: '#262525',
    fontSize: 11,
    fontWeight: 'bold',
   
  },
  getphonetxt: {
    color: '#262525',
    fontSize: 11,
    fontWeight: 'bold',
   
  },
  statusview: {
    width: 60,
    height: 18,
    alignItems: 'center',
    backgroundColor: '#E4FFDE',
    borderRadius: 5,
    marginTop: 5,
   
  },
  stxt: {
    fontSize: 12,
    color: '#039416',
    fontWeight: 'bold'
  },
  decisionview: {
    width: 60,
    height: 18,
    alignItems: 'center',
    backgroundColor: '#FFDEE9',
    borderRadius: 5,
   


  },
  dtxt: {
    fontSize: 12,
    color: '#CE7E99',
    fontWeight: 'bold'
  },
  txtview:{
    width:'30%'
  }
})
