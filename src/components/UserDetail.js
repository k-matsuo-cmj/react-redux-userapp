import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UserDetail = (props) => {
  const id = props.match.params.id;
  const user = useSelector((state) => state.users.find(user => user.id === Number(id)));
  
  return (
    <div>
      <Link to="/">Back</Link>
      <br /><br />
      [name] {user.name} <br />
      [username] {user.username} <br />
      [email] {user.email} <br />
      [phone] {user.phone} <br />
      [website] {user.website} <br />
    </div>
  );
};

export default UserDetail;