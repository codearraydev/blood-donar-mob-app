import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login/Login';
import SignUp from './src/Screens/SignUp/SignUp';
import SignUpNext from './src/Screens/SignUp/SignUpNext';
import BottomTabs from './src/Screens/BottomTabs/BottomTabs';
import SplashScreen from './src/Screens/Splash/SplashScreen';
import CardDetail from './src/Screens/Home/CardDetail';
import CardDetailNext from './src/Screens/Home/CardDetailNext';
import DonarBottomTab from './src/Screens/BottomTabs/DonarBottomTab';
import PatientInfo from './src/Screens/Donar/PatientInfo';
import PatientInfoNext from './src/Screens/Donar/PatientInfoNext';
import CaseInfo from './src/Screens/Search/CaseInfo';
import DonarDetail from './src/Screens/Donar/DonarDetail';
import AppointmentDetail from './src/Screens/Donar/AppointmentDetail';



const Stack = createStackNavigator();
const App =()=>{
  return(  
    <NavigationContainer>
         <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}} >
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpNext" component={SignUpNext} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="DonarBottomTabs" component={DonarBottomTab} />
            <Stack.Screen name="CardDetail" component={CardDetail} />
            <Stack.Screen name="PatientInfo" component={PatientInfo} />
            <Stack.Screen name="CaseInfo" component={CaseInfo} />
            <Stack.Screen name="PatientInfoNext" component={PatientInfoNext} />
            <Stack.Screen name="DonarDetail" component={DonarDetail} />
            <Stack.Screen name="CardDetailNext" component={CardDetailNext} />
            <Stack.Screen name="AppointmentDetail" component={AppointmentDetail} />
         </Stack.Navigator>
     </NavigationContainer>
  );


};
export default App;