import React from 'react';
import ReactDOM from 'react-dom/client';

// React95 theme must be imported before anything renders.
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import '@react95/icons/icons.css';


// Our own desktop shell styles, imported after so they win on conflicts.
import './styles/win95.css';

import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
