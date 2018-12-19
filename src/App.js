import React, { Component } from 'react';
import './App.css';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: [],
      artistResults: [],
      searchWord: "",
      isSearching: true,
      clickedArtistId: null,
    }
  }


  setSearchWord = (x) => {
    this.setState({ searchWord: x.target.value })
  }


  getInfo = () => {
    let api_url = `https://itunes.apple.com/search?term=${this.state.searchWord}&entity=musicArtist&media=music`;
    fetch(api_url)
      .then(res => res.json())
      .then(json => {
        this.setState({ results: json.results });
      })
      .catch(error => console.error(error));
  }


  getAlbumInfo = (res) => {
    let api_url = `https://itunes.apple.com/lookup?id=${res.target.id}&entity=album`;
    fetch(api_url)
      .then(res => res.json())
      .then(json => {
        this.setState({
          clickedArtistId: json.results.artistId,
          artistResults: json.results,
          isSearching: false
        });
      })
  }


  backToSearch = () => {
    this.setState({ isSearching: true });
  }



  render() {

    const listMatches = this.state.results.map((artist) => <li id={artist.artistId} onClick={this.getAlbumInfo}>{artist.artistName}</li>);
    const listAlbums = this.state.artistResults.map((album) => <li id={album.collectionId}>{album.collectionName}</li>);

    if (this.state.isSearching) {
      return (
        <div className="App">
          <div>
            <input type="text" onChange={this.setSearchWord} placeholder="Search artist..." />
            <button onClick={this.getInfo}>Search</button>
            <ul>{listMatches}</ul>
          </div>
        </div>
      )
    } else if (this.state.isSearching === false) {
      return (
        <div className="App">
          <div>
            <button onClick={this.backToSearch}>BACK</button>
            <ul>{listAlbums}</ul>
          </div>
        </div>
      )
    }
  }
}

export default App;