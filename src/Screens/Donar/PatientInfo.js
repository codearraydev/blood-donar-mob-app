import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView,ActivityIndicator, KeyboardAvoidingView, TextInput, Image, Alert } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React, { useState, useEffect } from 'react'
import { SvgBackArrow, SvgBloodGroup, SvgCardLine, SvgMap } from '../../components/svg';
import { getUserAsyncData } from '../../shared/core/DataStore';

//PatientInfo
const PatientInfo = (props) => {

  const [loading, setLoading] = useState(false);
  const [caseDetails, setCaseDetails] = useState()
  useEffect(() => {
    // Alert.alert(props.route.params.requestId)
    getRequestDetails()
  }, [])


  const getRequestDetails = () => {

    getUserAsyncData().then((res => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/getSingleRequestsForBlood/" + props.route.params.requestId + "/" + res.organizationID, requestOptions)
        .then(response => response.json())
        .then(result => {
          setCaseDetails(result.data)
        })
        .catch(error => console.log('error', error));
    }))


  }


  const rejectRequest = () => {

    getUserAsyncData().then((res => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      setLoading(true)
      var raw = JSON.stringify({
        "donorID": res.id,
        "requestID": props.route.params.requestId,
        "organizationID": res.organizationID,
        "DonorDecision": "rejected",
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://us-central1-blood-donar-project.cloudfunctions.net/app/requestResponse", requestOptions)
        .then(response => response.json())
        .then(result => {
          setLoading(false)
                    Alert.alert(
                        "Response",
                        result.message,
                        [
                          {
                            text: "OK",
                            onPress: () => {
                              props.navigation.navigate('DonarBottomTabs');
                            },
                          },
                        ],
                        { cancelable: false }
                      );

        })
        .catch(error => {
          setLoading(false)
          console.log('error', error)
        });
    }))

  }
  return (
    <SafeAreaView style={{ flex: 1, }}>
      
        <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
          <View style={styles.top}>
            <TouchableOpacity style={{ height: 30, width: 30, justifyContent: 'center' }} onPress={() => props.navigation.goBack()}>
              <SvgBackArrow />
            </TouchableOpacity>
            <Text style={styles.headtxt}>Patient Info</Text>
          </View>
          <View style={styles.topview}>
            <View style={styles.subview}>
              <View style={styles.imgview}>
                <Image source={require("./../../assets/profile.png")} style={styles.imgview} />
              </View>
            </View>
            <View style={styles.subview1}>
              <Text style={styles.headingtxt}>Blood Bank: {caseDetails?.organizationName}</Text>
              <Text >Applicant Name: {caseDetails?.reciverName}</Text>
              <Text >Patient Name: {caseDetails?.pat_name}</Text>

            </View>
          </View>

          <View style={styles.secondview}>


            <View style={styles.midview}>
              <Text style={styles.txt}>
                Date Required
              </Text>
              <Text style={styles.txt1}>{caseDetails?.required_Date}</Text>
            </View>



            <View style={styles.midview}>
              <Text style={styles.txt}>
                Location
              </Text>
              <View style={styles.loc}>
                <SvgMap color={'#CECECE'} style={{ marginRight: 8 }} />
                <Text style={styles.txt2}>{caseDetails?.address}</Text>

              </View>
            </View>
            <SvgCardLine style={styles.line} />
            <View style={styles.lview}>
              <View>
                <Text style={styles.group}>Need</Text>
                <Text style={styles.group1}>{caseDetails?.bloodBags}</Text>
              </View>
              <SvgBloodGroup group={caseDetails?.pat_bloodType} />
              <View>
                <Text style={styles.group}>Left</Text>
                <Text style={styles.group1}>{caseDetails?.leftBloodBags}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.continuebtn} onPress={() => props.navigation.navigate('DonarDetail',{
           
             requestId: props.route.params.requestId,
          
          })}>
            <Text style={styles.continuetxt}>Approve Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.continuebtn} onPress={() => rejectRequest()}>
           
            <Text style={styles.continuetxt}> {loading ? <ActivityIndicator color={'white'} /> : 'Reject Request'}</Text>
          </TouchableOpacity>
        </LinearGradient>
    
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
  topview: {
    height: 230,
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
    height: 90,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#FEF2FB',
    alignItems: 'center',
    paddingTop: 20
  },
  imgview: {
    height: 90,
    width: 90,
    borderWidth: 1,
    borderColor: '#B1B1B1',
    borderRadius: 45

  },
  subview1: {
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 110,
    alignItems: 'center',
  },
  headingtxt: {
    color: '#333333',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtxt: {
    color: '#777777',
    fontSize: 12
  },
  secondview: {
    marginVertical: 10,
    height: 300,
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
  lview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '92%',
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
})