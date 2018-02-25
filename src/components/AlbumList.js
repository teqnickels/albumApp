import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

//We want to use this component to fetch data, so lets make it a class based component
// Class component
class AlbumList extends Component {
constructor(props) {
  super(props);
  this.state = {
    albums: []
  };
}

  componentWillMount() {
    // ASYNC HTTP Request to get albums from the API.
    // eslint-disable-next-line
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then((response) => response.json())
    .then((responseData) => this.setState({ albums: responseData }));
  }
 
renderAlbums() {
  return this.state.albums.map(album => 
    <AlbumDetail key={album.title} album={album} />
  );
}

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList; 
