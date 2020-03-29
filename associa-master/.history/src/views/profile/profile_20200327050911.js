import React, {Component} from 'react';

import profileStyle from './profileStyle';
import {Colors, GlobalSheet} from '../../config';
import {View, Text, Icon, Header, Left} from 'native-base';
import axios from 'axios'

import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, Button } from 'react-native';
//import ListRow from './ListRow-start';
// import ListRow from './ListRow-finished';
import {TouchableOpacity, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { List, ListItem, SearchBar } from "react-native-elements";


const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() =>
          navigation.navigate('Profile', { name: 'Custom profile header' })
        }
      />
    </View>
  );
}


export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: null,
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
    this.arrayholder = [];

  }

  componentDidMount() {
    if (this.state.data==null){
      this.makeRemoteRequest();
    }
  }

  makeRemoteRequest = () => {
    const url = `http://192.168.1.11:8080/actualite`;
    this.setState({ loading: true });
    axios.get(url)
      .then(res => {
        console.log(res.data)
        this.setState({
          data: res.data,
          error: res.error || null,
          loading: false,      
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
      

  };

 

  handleRemove = (index) => {
    const start = this.state.people.slice(0, index);
    const end = this.state.people.slice(index + 1);
    this.setState({
      people: start.concat(end),
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };
  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round onChangeText={text => this.searchFilterFunction(text)}
    autoCorrect={false} value={this.state.value}
    />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

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
      <FlatList
        style={{ marginTop: 20 }}
        data={this.state.data}
        renderItem={({ item}) => (<TouchableOpacity onPress={this.onRemove}>
          <Animated.View style={rowStyles}>
            <Image
              style={styles.image}
              source={{ uri: item.medias[0].url}}
            />
            <View>
              <Text style={styles.name}>{item.nom} {item.prenom}</Text>
              <Text style={styles.email}>{item.noti}</Text>
            </View>
            
          </Animated.View>
          <Animated.View style={rowStyles}>
          <Image
              style={styles.image1}
              source={{ uri: picture.thumbnail}}
            />
                        <Text style={styles.email}>{email}</Text>
                        </Animated.View>
  
          
        </TouchableOpacity>
        
        )}
      
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
         
      />
      </View>
    </SafeAreaView>
    
     
      
    );
  }
}
