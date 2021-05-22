import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import { CssBaseline } from '@material-ui/core';


function App() {
  return (
    <div className="app">
      <Header/>
      <Footer/>
      <CssBaseline/>
    </div>
  );
}

export default App;
