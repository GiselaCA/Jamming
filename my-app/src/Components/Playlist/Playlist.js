import React from 'react';
// import ReactDOM from'react-dom';
import './Playlist.css'
import '../TrackList/TrackList.js'

class Playlist extends React.Component{
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={"New Playlist"}/>
        {/* <TrackList /> */}
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default Playlist