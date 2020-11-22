import React, { useState, useEffect } from 'react'
import '../App.css';
import axios from 'axios';

import SearchForm from './SearchForm';
import GifList from './GifList';

function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=YOUR_API_KEY`)
  // })

  return (
    <>

      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>

      <div className="main-content">
        <GifList data={data} />
      </div>

    </>
  );
}

export default App

