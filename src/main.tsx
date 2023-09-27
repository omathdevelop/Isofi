import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './context/@redux/store.ts';
import App from './App.tsx';
import GlobalView from './design/@GlobalView/component.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
    <BrowserRouter future={{v7_startTransition: true}}>
    <GlobalView />
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);


