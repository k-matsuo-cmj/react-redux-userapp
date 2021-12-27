import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions/userActions';

class UserList extends Component {

  componentDidMount() {
    this.props.fetchUser();
  }

  viewUser(id) {
    this.props.history.push(`/view/${id}`);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => {
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

const mapStateToProps = (state) => {
  return { users: state.users };
};
const mapDispatchToProps = (dispatch) => {
  return { fetchUser: () => dispatch(fetchUser()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);