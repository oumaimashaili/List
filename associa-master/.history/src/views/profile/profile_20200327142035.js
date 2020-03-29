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
import {TouchableOpacity, ActivityIndicator, Image, StyleSheet, Animated} from 'react-native';
import {SafeAreaView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { List, ListItem, SearchBar,Card } from "react-native-elements";
const ROW_HEIGHT = 70;


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
        this.arrayholder = res.results;

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
      const itemData = `${item.user.nom.toUpperCase()} ${item.user.prenom.toUpperCase()}`;
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
    const rowStyles = [
      styles.row,
    ];

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
        renderItem={({ item}) => (
          if(item.published){
            
          }
          <Card>
        <TouchableOpacity onPress={this.onRemove}>
          <Animated.View style={rowStyles}>
            <Image
              style={styles.image}
              source={{ uri: item.user.url}}
            />
            <View>
              <Text style={styles.name}>{item.user.nom} {item.user.prenom}</Text>
              <Text style={styles.email}>{item.content}</Text>
            </View>
            
          </Animated.View>
          <Animated.View style={rowStyles}>
          <Image
              style={styles.image1}
              source={{ uri: item.medias[0].url}}
            />
                        <Text style={styles.email}>{item.description}</Text>
                        </Animated.View>
  
          
        </TouchableOpacity></Card>
        
        
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
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    height: ROW_HEIGHT,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center"
  },
  image1: {
    width: 60,
    height: 60,
    paddingRight:60,
    alignItems: "center"
  },
  name: {
    fontSize: 18,
    fontWeight: '500',
  },
  email: {
    fontSize: 14,
  },
});
