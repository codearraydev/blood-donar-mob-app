import { StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

import React from 'react'
import { SvgSplash, SvgSplashIcon } from '../../components/svg';

const Splash = () => {
  return (
    <LinearGradient colors={['#F7FAFF', '#FCFAFE', '#FCFAFE']} style={styles.Mview}>
       <View style={styles.splashview}>
        <SvgSplash/>
            <SvgSplashIcon style={styles.splashicon}/>
            <Text style={styles.txt}>TBH</Text>
            <SvgSplash style={styles.splash}/>
       </View>
        
    </LinearGradient>
  )
}

export default Splash

const styles = StyleSheet.create({
    Mview:
    {
        flex: 1,
        justifyContent:'center'
    },
    splashview:{
        justifyContent:'center',
        height: '75%',
       
    },
    splashicon:{
        alignSelf:'center'
    },
    splash:{
        alignSelf:'flex-end'
    },
    txt:{
        color:'#202020',
        fontSize:48,
        fontWeight:'bold',
        alignSelf:'center'
    }
})