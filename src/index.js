import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./hoc/Auth.provider";
import {setupStore} from "./slices/store";
import {Provider} from "react-redux";


const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

      <Provider store={store}>
      <AuthProvider>
          <BrowserRouter>
              <App />
          </BrowserRouter>
      </AuthProvider>
    </Provider>
);


