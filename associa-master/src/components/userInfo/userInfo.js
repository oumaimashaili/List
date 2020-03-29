import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Container, Thumbnail, Text, Card} from 'native-base';
import {Colors, GlobalSheet} from '../../config';

function UserInfo(props) {
  return (
    <TouchableOpacity
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        alignSelf: 'center',
        width: '90%',
        borderRadius: 32,
        padding: 1 * GlobalSheet.units.vw,
        elevation: 1,
      }}>
      <Thumbnail large source={{uri: props.avatar}} />
      <Text>
        {props.name}
        {'\t'}
        {props.lastName}
      </Text>
    </TouchableOpacity>
  );
}
export default UserInfo;
