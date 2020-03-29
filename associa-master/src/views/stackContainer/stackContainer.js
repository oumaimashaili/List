import React, {Component} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native'; // this one imports a navigation container
import {createStackNavigator} from '@react-navigation/stack'; // stackNavigator yaany men screen l screen
import {Login} from '../login';
import {ForgotLogin} from '../forgotLogin';
import {Drawer} from '../drawer';

const Stack = createStackNavigator();
//initialisation mtaa stackNavigator eli bch yhezek men ecran l ecran

class StackContainer extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'login'}
            options={{headerShown: false}}
            component={Login}
          />
          <Stack.Screen
            name={'forgotLogin'}
            component={ForgotLogin}
            options={{
              headerStyle: {
                elevation: 0,
                backgroundColor: 'transparent',
              },
              headerTitleStyle: {
                left: '50%',
              },
            }}
          />
          <Stack.Screen
            name={'home'}
            component={Drawer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default StackContainer;
