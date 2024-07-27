import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.tsx'
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalContextProvider from './components/globalProvider/GlobalProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
)
