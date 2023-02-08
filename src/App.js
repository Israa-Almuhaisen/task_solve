
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';

import React from 'react';

class App extends React.Component {
  render(){
  return (
    <div className="App">
    <Header/>
    <Footer/>
    </div>
  );
}
}

export default App;
