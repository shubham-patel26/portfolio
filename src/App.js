import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer';
import Intro from './Components/Intro';
import Projects from './Components/Project/Projects';
import { CssBaseline, Grid } from '@material-ui/core';


function App() {
  return (
    <>
    <Header/>
    <div  className="app">
      
        
        <Intro />
        <Projects />
        <Footer/>

      <CssBaseline/>
    </div>
    </>

    

  );
}

export default App;
