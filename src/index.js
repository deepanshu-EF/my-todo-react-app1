import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from './ThemeContext';
//import ListRendering from './ListRendering';
//import AddTasks from './AddTasks';
import ParentComponent from './ParentComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>  // it means the elements listed below are treated as sibling and inside root element without the need for an additional parent container.

    <ThemeProvider>
        <App/>
    </ThemeProvider>
    <ParentComponent/>
</>

);

reportWebVitals();
