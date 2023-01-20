import { storyblokInit, apiPlugin } from "@storyblok/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page from './components/Page'
import Grid from './components/Grid'
import Feature from './components/Feature'
import Teaser from './components/Teaser'

 

const root = ReactDOM.createRoot(document.getElementById('root'));
 
storyblokInit({
  accessToken: "<YOUR_STORYBLOK_TOKEN>",
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    feature: Feature,
    grid: Grid
  }
});
 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
