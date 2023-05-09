import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/Screens/Login/Login';
import SignUp from './src/Screens/SignUp/SignUp';
import SignUpNext from './src/Screens/SignUp/SignUpNext';
import BottomTabs from './src/Screens/BottomTabs/BottomTabs';


const Stack = createStackNavigator();
const App =()=>{
  return(  
    <NavigationContainer>
         <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false}} >
           
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="SignUpNext" component={SignUpNext} />
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
         </Stack.Navigator>
     </NavigationContainer>
  );


};
export default App;