import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Shop from './Components/Shop'
import './App.css';
import Main from './route'
function App() {
  return (
    <div className="App">
      <>
        <Header/>
        <Main/>
        {/* <Shop/> */}
        <Footer/>
      </>
    </div>
  );
}
  
export default App;