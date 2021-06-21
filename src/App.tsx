import React from 'react';

import Header from './components/Header';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => (

  <>
    <GlobalStyle />
    <Header />
    <Home />
  </>
);

export default App;
