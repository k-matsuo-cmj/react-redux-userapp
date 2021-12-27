import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const user = this.props.users.find(user => user.id === Number(id));

    this.setState({
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <br /><br />
        [name] {this.state.name} <br />
        [username] {this.state.username} <br />
        [email] {this.state.email} <br />
        [phone] {this.state.phone} <br />
        [website] {this.state.website} <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users };
};

export default connect(mapStateToProps)(UserDetail);