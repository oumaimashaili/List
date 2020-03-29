import React, {Component} from 'react';
import {View, Text,Icon } from 'native-base';
import {
  createDrawerNavigator,
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView, 
} from '@react-navigation/drawer';
import {Profile} from '../profile';
import {HomeTabs} from '../homeTabs';
import {MembershipStatus} from '../membershipStatus';
import UserInfo from '../../components/userInfo/userInfo';
import colors from '../../config/colors';
//import CustomSidebarMenu from './CustomSidebarMenu';

import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity,TouchableHighlight,StyleSheet} from 'react-native';
import {Colors} from '../../config';

function DrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <LinearGradient
        colors={['#FFFFFF', Colors.backgroundSecond]}
        start={{x: 0.5, y: 0}}>
        <TouchableOpacity style= {{height: 150}}>
          <UserInfo
            avatar={
              'https://facebook.github.io/react-native/docs/assets/favicon.png'
            }
            name={'             DXC Technology'}
            lastName={'   Welcome to our winning team!'}
          />
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        <TouchableOpacity
  style={styles.btnClickContain}
  underlayColor='#70726er'>
  <View
    style={styles.btnContainer}>
    <Icon
      name='home'
      size={25}
      color='#042'
      style={styles.btnIcon}/>
    <Text style={styles.btnText}>Home</Text>
  </View>
</TouchableOpacity>
       
    
       
      </LinearGradient>
    </DrawerContentScrollView>
  );
}

const DrawerNav = createDrawerNavigator();
// Important NOTE : SET THE DRAWER TO CONTAIN BOTTOM  TAB
export default class Drawer extends Component {
  render() {
    return (
      <DrawerNav.Navigator
        // eslint-disable-next-line react-native/no-inline-styles
        drawerStyle={{
          width: 300,
        }}
        drawerType={'slide'}
        initialRouteName="home"
        //drawerContent = {() => CustomSidebarMenu}
       drawerContent={() => <DrawerContent {...this.props} />}>
        <DrawerNav.Screen name="home" component={HomeTabs} />


      </DrawerNav.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  btnClickContain: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    height:40,
    alignItems: 'stretch',
    alignSelf: 'stretch',
    backgroundColor: '#009D6E',
    borderRadius: 0,
    padding: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    alignSelf: 'stretch',
    borderRadius: 0,
  },
  btnIcon: {
    height: 25,
    width: 25,
  },
  btnText: {
    fontSize: 18,
    color: '#FAFAFA',
    marginLeft: 10,
    marginTop: 2,
  },
  icon: {
    paddingRight: 300,
    paddingTop:10,
  },
  button: {
    marginBottom: 30,
    width: 400,
    height:50,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  },
  navBarLeftButton: {
    paddingLeft: 8,
    width: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
