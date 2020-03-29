import React, {Component} from 'react';
import {Drawer} from './src/views/drawer';
import { NavigationContainer } from '@react-navigation/native';


class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer/>
      </NavigationContainer>
    )

  }
}

export default App;
