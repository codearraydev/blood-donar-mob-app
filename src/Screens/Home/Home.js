import { StyleSheet, Text, View,SafeAreaView,TextInput,Image,FlatList,ScrollView} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SvgCardLine, SvgDistance, SvgHelp, SvgHomeLogo, SvgMap, SvgMapText, SvgNotification, SvgTxtSearch } from '../../components/svg'
import Card from '../../components/Card'
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>

<LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>

                <View style={styles.top}>
                    <Text style={styles.toptxt}>
                    Hello, Emma 
                    </Text>
                    <SvgNotification />
                </View>
                <View style={styles.top1}>
                  <Text style={styles.morntxt}>
                  Good Morning!
                  </Text>
                </View>
                <View style={styles.topcard}>
                    <View style={styles.gradview}>
                      <View style={styles.coltxt}>
                      <Text style={styles.gradtxt}>
                            Your
                        </Text>
                        <Text style={styles.gradtxt1}>
                        {' '}Strength 
                        </Text>
                        <Text style={styles.gradtxt}>
                        {' '}and 
                        </Text>
                        <Text style={styles.gradtxt2}>
                        {' '}Courage  
                        </Text>
                      </View>
                        <View style={styles.coltxt1}>
                        <Text style={styles.gradtxt}>
                        inspire us all.
                        </Text>
                        </View>
                    </View>
                    <View style={styles.gradview1}>
                          <SvgHomeLogo/>
                    </View>
                </View>

              <View style={styles.sectopview}> 
              <View style={styles.dateofbirth}>
                                    <TextInput style={{ color: 'black',fontSize:12}}
                                        editable={false}
                                        placeholder={"Zaraj Housing Society, Islamabad"}
                                        placeholderTextColor='grey'
                                        
                                    />
                                    <SvgMap />
              </View>
              <View style={styles.dateofbirth}>
                                    <TextInput style={{ color: 'black',fontSize:12 }}
                                        editable={false}
                                        placeholder={"Search by blood Group, blood bank"}
                                        placeholderTextColor='grey'
                                        
                                    />
                                    <SvgTxtSearch />
              </View>
              </View>
              <View style={styles.top}>
                    <Text style={styles.doc}>
                    Available Donors
                    </Text>
                    <Text style={styles.seedoc}>
                    See All
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',width: '95%'}}>
                    <View style={styles.sbview1}>
                        <Text style={styles.txt1}>A+</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>A-</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>B+</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>B-</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>O+</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>O-</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>AB+</Text>
                    </View>
                    <View style={styles.sbview}>
                        <Text style={styles.txt}>AB-</Text>
                    </View>
                </View>
               <ScrollView contentContainerStyle={{alignItems:'center'}}>

              
                <Card/>
                <Card/>
                <Card/>
                <SvgHelp style={styles.svg}/>
                </ScrollView>
                
              </LinearGradient>
              </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  Mview:
  {
      flex: 1,
      backgroundColor: '#F3F3F3',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  top: {
    height: 30,
    width: '90%',
    marginTop: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

},
top1: {
  height: 28,
  width: '90%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  alignItems: 'center',

},
toptxt: {
    color: '#2D2D2D',
    fontSize: 17,
    //fontWeight: '500',
},
morntxt:{
  color: '#363636',
  fontSize: 18,
  fontWeight: '500',
},
topcard: {
  height: 115,
  width: '95%',
  marginTop: 3,
  borderRadius: 15,
  backgroundColor:'#FFDEE2',
  flexDirection:'row',
  justifyContent:'space-between'
},
sectopview:{
  height: 110,
  width: '85%',
  marginTop: -10,
  borderRadius: 8,
  backgroundColor:'#ffff',
  elevation:10,
  flexDirection:'row',
  //justifyContent:'space-around',
  flexDirection:'column',
  alignItems:'center'
},
gradview:{
 
  alignItems:'center',
  justifyContent:'center',
  width: '70%',
},
gradview1:{
 
  width: '30%',
  justifyContent:'center'
},
coltxt:{
  flexDirection:'row'
},
gradtxt:{
  fontSize:17,
  //fontFamily:'Plus Jakarta Sans',
  color:'#040A64',
  fontWeight:'bold'
},
gradtxt1:{
  fontSize:18,
  //fontFamily:'Plus Jakarta Sans',
  color:'#C4045E',
  fontWeight:'bold'
},
gradtxt2:{
  fontSize:17,
  //fontFamily:'Plus Jakarta Sans',
  color:'#FFA500',
  fontWeight:'bold'
},
dateofbirth:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        borderWidth: 1,
        marginTop:10,
        borderColor: '#B1B1B1',
        height: 37,
        borderRadius: 10,
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF'
    },
   doc:{
    color:'#101010',
    fontSize:15
   },
seedoc:{
  color:'#4440BF',
    fontSize:13
},
sbview:{
  height:30,
  width: 35,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center',
  borderWidth:1,
  borderColor:'#DFDFDF',
 backgroundColor:'#FFFFFF'
},
txt:{
  fontSize:12,
  fontWeight:'bold',
  color:'#AFAFAF'
},
sbview1:{
  height:30,
  width: 35,
  borderRadius:5,
  alignItems:'center',
  justifyContent:'center',
 backgroundColor:'#FF478C'
},
txt1:{
  fontSize:12,
  fontWeight:'bold',
  color:'#ffff'
},
svg:{
  marginTop:-130,
  marginLeft:245
},




midview:{
  height:120,
  width: '90%',
  borderWidth:1,
  borderRadius:5
},
card:{
  flexDirection:'row',
  justifyContent:'space-between'
}
})