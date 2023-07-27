import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from './ThemeContext';
import ListRendering from './ListRendering';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//  <React.StrictMode>
<>  // it means the elements listed below are treated as sibling and inside root element without the need for an additional parent container.
    <ListRendering/>
    <ThemeProvider>
        <App/>
    </ThemeProvider>
</>

//  </React.StrictMode>
);

reportWebVitals();
