import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

class App extends Component {
  render () {
    return (
      <div>
        <Route path="/" component={UserList} exact={true} />
        <Route path="/view/:id" component={UserDetail} />
      </div>
    );
  }
}

export default App;
