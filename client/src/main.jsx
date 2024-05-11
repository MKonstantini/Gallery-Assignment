import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import React from 'react';

// Redux
import store from './redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
