import React, {Component} from 'react';
import {View, Text, Icon, Header, Left} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {GlobalSheet} from '../../config';
import {SafeAreaView} from 'react-native';

class AddActivity extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            style={{
              elevation: 0,
              backgroundColor: 'transparent',
              padding: 2 * GlobalSheet.units.vh,
            }}
            onPress={() => {
              this.props.navigation.toggleDrawer();
            }}>
            <Icon type={'FontAwesome5'} name="bars" />
          </TouchableOpacity>
          <Text>THis is the Main home</Text>
          <Text>Main tasks and shit</Text>
        </View>
      </SafeAreaView>
    );
  }
}
export default AddActivity;
