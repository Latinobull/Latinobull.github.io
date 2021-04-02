import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Links from './components/Links';
function App() {
  return (
    <div className="uk-align-center">
      <Header />
      <Profile />
      <hr />
      <Links />
    </div>
  );
}

export default App;
