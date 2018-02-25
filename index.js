import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
//attempt to create a component
//the want app component/root component to show what the user is viewing 'Albums!' , 'Songs' 
//Need to wrap our components in <View> tags other wise, 
//it acts like a return and will never reach next component
const App = () => ( 
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render a component to the device
AppRegistry.registerComponent('albums', () => App);
