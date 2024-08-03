import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContextProvider from './contexts/GlobalProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
)
