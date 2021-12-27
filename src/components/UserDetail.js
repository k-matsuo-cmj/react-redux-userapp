import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        name: data.name,
        username: data.username,
        email: data.email,
        phone: data.phone,
        website: data.website,
      });
    })
    .catch((err) => console.log(err));
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

export default UserDetail;