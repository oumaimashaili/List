import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Colors, GlobalSheet} from '../../config';
import {FloatingButton} from '../../components/floatingButton';
import Profile from '../profile/profile';
import Polls from '../polls/polls';
import Tasks from '../tasks/tasks';
import Events from '../events/events';
import AddActivity from '../addActivity/addActivity';

const Tabs = createBottomTabNavigator();
class HomeTabs extends Component {
  render() {
    return (
      <Tabs.Navigator
        initialRouteName={'add'}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            switch (route.name) {
              case 'Actualite':
                iconName = focused ? 'home' : 'home';
                break;
              case 'Informations':
                iconName = focused ? 'poll' : 'poll';
                break;
              case 'Procedure':
                iconName = focused ? 'tasks' : 'tasks';
                break;
              case 'profile':
                iconName = focused ? 'calendar' : 'calendar';
                break;
              case 'mainHome':
                iconName = focused ? 'user' : 'user';
                break;
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: Colors.textColor,
          inactiveTintColor: 'gray',
        }}>
        <Tabs.Screen name="Actualite" component={Profile} />
        <Tabs.Screen name="Procedure" component={Tasks} />
        <Tabs.Screen name="mainHome" component={AddActivity} />
        <Tabs.Screen name="Informations" component={Polls} />
        <Tabs.Screen name="profile" component={Profile} />
      </Tabs.Navigator>
    );
  }
}
export default HomeTabs;
