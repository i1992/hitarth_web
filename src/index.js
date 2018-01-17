import React from 'react';
import ReactDOM from 'react-dom';
import routes from './router'
import { AppContainer } from 'react-hot-loader'
import './theme/global'

ReactDOM.render(
  <AppContainer>
    {routes}
  </AppContainer>,
  document.getElementById('root')
);


// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router', () => {
    const routes = require('./router').default;
    ReactDOM.render(
        <AppContainer>
          {routes}
        </AppContainer>,
        document.getElementById('root')
      );
   })
}
