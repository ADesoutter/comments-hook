import React from 'react';
import './App.css';
import Comments from './Comments';
import Player from './Player';
import ChuckNorrisFact from './ChuckNorrisFact';

export default function App() {
    return (
      <div className="App container">
        <Comments />

        {/* <ChuckNorrisFact /> */}
        {/*  <Player firstname="Jean-Michel" lastname="Apeupré"
         />
        <Player firstname="Ju" lastname="Das" /> */}
      </div>
    );
}


