import React, { Component } from "react";
import { fetchUsers } from "../api/user";

class App extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    users: []
  };

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({ users });
  }

  render() {
    const firstUser = this.state.users[0] || {};
    return (
      <div className="App">
        <h2>用户列表</h2>
        <ul>
          {this.state.users.map(({ id, firstName, lastName }) => (
            <li key={id}>
              {firstName} {lastName}
            </li>
          ))}
        </ul>
        <h2>用户详情</h2>
        <h3>
          {firstUser.firstName} {firstUser.lastName}
        </h3>
        <p>{firstUser.email}</p>
        <p>{firstUser.website}</p>
      </div>
    );
  }
}

export default App;
