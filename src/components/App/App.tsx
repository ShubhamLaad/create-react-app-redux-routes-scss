import React from 'react';
import store from '../../store/store';
import Routes from '../Routes/Routes';
import './App.scss';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
