import React from 'react';

import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => (

  <>
    <GlobalStyle />
    <Header />
    <SubHeader />
    <Home />
  </>
);

export default App;
