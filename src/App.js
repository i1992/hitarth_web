import React, { Component } from 'react';
import Navigation from './Navigation'
import { hashHistory } from 'react-router'

hashHistory.listen(()=> {
  window.scrollTo(0, 0);
});


class App extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        { this.props.children }
      </div>
    );
  }
}

export default App;
