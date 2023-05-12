import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import PlayList from '../PlayList/PlayList';
import Spotify from '../util/Spotify';
import {useState} from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [addedTracks, setAddedTracks] = useState([]);
  const [playListName, setPlayListName] = useState('');


  const search = (term) => {
    Spotify.search(term).then(setSearchResults);
  }


  const addTrack = (trackToAdd) => {
    setAddedTracks((prev) => [trackToAdd, ...prev])
  }

  const removeTrack = (trackToRemove) => {
    setAddedTracks((prev) => prev.filter((track) => track !== trackToRemove))
  }


  const namePlayList = (name) => {
    setPlayListName(name)
  }


  const savePlayList = () => {
    const trackUris = addedTracks.map((track) => track.uri)
    Spotify.savePlayList(playListName, trackUris).then(() => {
      setAddedTracks([])
      setPlayListName('')
    })
  }
  
  return (
    <>
      <h1 className="header">Jammming</h1>
      <SearchBar onSearch={search} />
      <div className="flex-container">
        <SearchResults tracks={searchResults} addTrack={addTrack} />
        <PlayList 
          addedTracks={addedTracks} 
          removeTrack={removeTrack} 
          namePlayList={namePlayList}
          playListName={playListName}
          savePlayList={savePlayList}
          />
      </div>
    </>
  )
}

export default App;
