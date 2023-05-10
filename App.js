import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login/Login';
import SignUp from './src/Screens/SignUp/SignUp';
import SignUpNext from './src/Screens/SignUp/SignUpNext';
import BottomTabs from './src/Screens/BottomTabs/BottomTabs';
import Splash from './src/Screens/Splash/Splash';
import CardDetail from './src/Screens/Home/CardDetail';
import CardDetailNext from './src/Screens/Home/CardDetailNext';
import DonarBottomTab from './src/Screens/BottomTabs/DonarBottomTab';


const Stack = createStackNavigator();
const App =()=>{
  return(  
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}} >
           
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpNext" component={SignUpNext} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="DonarBottomTabs" component={DonarBottomTab} />
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="CardDetail" component={CardDetail} />
            <Stack.Screen name="CardDetailNext" component={CardDetailNext} />
         </Stack.Navigator>
     </NavigationContainer>
  );


};
export default App;