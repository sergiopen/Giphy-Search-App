import React from 'react';
import './styles/App.css';
import { Link, Route } from 'wouter';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import GifPage from './pages/GifPage';

function App () {
  return (
    <>
      <Link to='/'>Inicio</Link>
      <Route component={HomePage} path='/'/>
      <Route component={SearchPage} path='/search/:keyword'/>
      <Route component={GifPage} path={'/gif/:id'}/>
    </>
  );
}

export default App;
