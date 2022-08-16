import React from 'react';
import {Routes, Route} from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Homepage from './pages/Homepage';
import Searchpage from './pages/Searchpage';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/search" element={<Searchpage/>}/>
        </Routes>
      </div>
    );
  }
}

export default BooksApp
