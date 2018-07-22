import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from './src/App';

const result = ReactDomServer.renderToString(<App />);

export default result;
