import { Route } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <div>
      <Route path="/" component={UserList} exact={true} />
      <Route path="/view/:id" component={UserDetail} />
    </div>
  );
}

export default App;
