import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Formes from './components/Formes/Formes';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <Header />
      <div className='body'>
        <Sidebar />
        <Formes />
      </div>
    </div>
  );
}

export default App;
