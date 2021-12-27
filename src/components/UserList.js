import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => {
      this.setState({users: data});
    })
    .catch((err) => console.log(err));
  }

  viewUser(id) {
    this.props.history.push(`/view/${id}`);
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => {
            return(
              <li key={user.id}>
                {user.name}
                <button onClick={this.viewUser.bind(this, user.id)}>VIEW</button>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default UserList;