import React, {useState, useEffect} from 'react';
import * as Font from 'expo-font';
import Welcome from './app/screens/welcome/Welcome'
import User from './app/screens/user/User';
import { Spinner } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { YellowBox } from 'react-native'
import AdminLogin from './app/screens/admin/AdminLogin';

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
])

const Stack = createStackNavigator();

export default function App() {

  const [fontLoading, setFontLoading] = useState();

  useEffect(() => {
      loadFonts();
  }, [])

  async function loadFonts ()
  {
      await Font.loadAsync({
          "Roboto": require('native-base/Fonts/Roboto.ttf'),
          "Roboto_medium": require('native-base/Fonts/Roboto_medium.ttf')
        })
      setFontLoading(true);
  }

  if(!fontLoading)
  {
    return(
      <Spinner color = "green"/>
    );
  }
  else
  {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name = "Welcome"
            component = {Welcome}
            options = {{
              title: "Inicio",
              headerShown: false
            }}
          />

          <Stack.Screen
            name = "User"
            component = {User}
            options = {{
              title: "Registro",
              headerStyle:{
                elevation: 0,
                shadowOpacity: 0,
              },
            }}
          />

          <Stack.Screen
            name = "AdminLogin"
            component = {AdminLogin}
            options = {{
              title: "Login",
              headerStyle:{
                elevation: 0,
                shadowOpacity: 0,
              },
            }}
          />


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
