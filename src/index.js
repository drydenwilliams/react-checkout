import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasketContainer from './containers/BasketContainer/BasketContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BasketContainer />, document.getElementById('root'));
registerServiceWorker();
