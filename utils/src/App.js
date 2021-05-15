import logo from './logo.svg';
import './App.css';
import data from './trim-hexcolors.txt';
import React, { useState } from 'react';

function App() {

    let [colors, setcolors] = useState("");

    fetch(data)
    .then( res => res.text()).
    then(text => {

      setcolors(text.split('\n'));

    });

    return  (
      <div className="App">
        {

        }
      </div>
    );

}

export default App;
