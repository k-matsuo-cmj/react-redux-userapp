import { Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/view/:id" element={<UserDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
