import React from 'react';
import ReactDOM from 'react-dom';
import Auction from './Auction'
import './index.css';

import * as serviceWorker from './serviceWorker';
ReactDOM.render(
	<div>
	  <Auction />
	</div>, 
  document.getElementById('root')
);

serviceWorker.unregister();
