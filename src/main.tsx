import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or './App.css' if that's where Tailwind is
import store from './redux/store.tsx'
import{Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
