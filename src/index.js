import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import './styles/reset.scss';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById('root')
);
