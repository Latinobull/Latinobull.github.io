import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Links from './components/Links';
import Project from './components/Project';
import Footer from './components/Footer';
function App() {
  return (
    <div className="uk-align-center">
      <Header />
      <Profile />
      <hr />
      <Links />
      <hr />
      <Project />
      <hr />
      <Footer />
    </div>
  );
}

export default App;
