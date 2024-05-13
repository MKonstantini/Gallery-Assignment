import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';
import React from 'react';

// Redux setup
import store from './redux/store.js';
import { Provider } from 'react-redux';
import { featuredTopics, setDataAsync } from './redux/pixabay.js';

// Load data before rendering App.js
store.dispatch(setDataAsync(featuredTopics[0], 1));

// Render App.js
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
