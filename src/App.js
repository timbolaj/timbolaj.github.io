import React from 'react';
import './App.scss';
import Profile from './components/Profile';
import Head from './components/Head';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Head />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
