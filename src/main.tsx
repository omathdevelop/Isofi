import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store, Persistor } from './context/@redux/store.ts';
import App from './App.tsx';
import GlobalView from './design/@GlobalView/component.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={Persistor} loading={<p>loading...</p>}>
      <BrowserRouter future={{ v7_startTransition: true }}>
        <GlobalView />
        <App />
      </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);


