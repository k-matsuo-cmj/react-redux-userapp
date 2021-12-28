import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/userActions';

const UserList = (props) => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const viewUser = (id) => props.history.push(`/view/${id}`);

  return (
    <div>
      <ul>
        {users.map((user) => {
          return(
            <li key={user.id}>
              {user.name}
              <button onClick={viewUser.bind(this, user.id)}>VIEW</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default UserList;