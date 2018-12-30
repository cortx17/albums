import React, { Component } from "react";
import "./App.css";
import SearchButton from "./components/SearchButton";
import SearchField from "./components/SearchField";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      artistResults: [],
      searchWord: "",
      isSearching: true,
      albumArt: ""
    };
  }

  setSearchWord = x => {
    this.setState({ searchWord: x.target.value });
  };

  getInfo = () => {
    const api_url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=${
      this.state.searchWord
    }&entity=musicArtist&media=music`;
    if (this.state.searchWord === "") {
      window.alert("Please specify a search term.");
    } else {
      document.getElementById("btn-search").classList.add("is-loading");
      fetch(api_url)
        .then(res => res.json())
        .then(json => {
          this.setState({ results: json.results });
          document.getElementById("btn-search").classList.remove("is-loading");
          if (this.state.results.length === 0) {
            window.alert("No match! :-(");
          }
        })
        .catch(error => console.error(error));
    }
  };

  getAlbumInfo = res => {
    const api_url = `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${
      res.target.id
    }&entity=album`;
    document.getElementById("btn-search").classList.add("is-loading");
    fetch(api_url)
      .then(res => res.json())
      .then(json => {
        if (json.results.length === 1) {
          window.alert("There are no albums available for this artist.");
          document.getElementById("btn-search").classList.remove("is-loading");
        } else {
          this.setState({
            artistResults: json.results,
            isSearching: false,
            albumArt: json.results.artworkUrl60
          });
        }
      });
  };

  backToSearch = () => {
    this.setState({ isSearching: true });
  };

  // ENTER key to submit
  onKeyPress = e => {
    if (e.which === 13) {
      this.getInfo();
    }
  };

  render() {
    const listMatches = this.state.results.map(artist => (
      <li
        className="lstArtists"
        id={artist.artistId}
        onClick={this.getAlbumInfo}
      >
        {artist.artistName}
      </li>
    ));

    const listAlbums = this.state.artistResults.map(album => (
      <li id={album.collectionId}>
        <div className="box">
          <article>
            <div className="columns">
              <div className="column is-one-quarter">
                <div className="media-content">
                  <figure className="image is-64x64">
                    <img
                      className="img-cover"
                      src={album.artworkUrl60}
                      alt="album cover"
                    />
                  </figure>
                </div>
              </div>

              <div className="column">
                <div className="media-content">
                  <div className="content">
                    <p className="">{album.collectionName}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </li>
    ));
    listAlbums.shift();

    if (this.state.isSearching) {
      return (
        <div className="App">
          <div className="box is-primary">
            {/* KERESŐMEZŐ */}
            <SearchField
              setSearchWord={this.setSearchWord.bind(this)}
              onKeyPress={this.onKeyPress.bind(this)}
            />

            {/* KERESÉS GOMB */}
            <SearchButton />

            {/* TALÁLATOK */}
            <ul>{listMatches}</ul>
          </div>
        </div>
      );
    } else if (this.state.isSearching === false) {
      return (
        <div className="App">
          <div className="box">
            <div className="control">
              <a className="button is-danger" onClick={this.backToSearch}>
                <span className="icon">
                  <i className="fas fa-chevron-left" />
                </span>
                <span>Back</span>
              </a>
            </div>
            <p className="txt-artist-name">
              Albums of {this.state.artistResults[0].artistName}:
            </p>
            <ul>{listAlbums}</ul>
          </div>
        </div>
      );
    }
  }
}

export default App;
