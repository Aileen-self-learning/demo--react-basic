import React, { Component } from "react";
import { fetchUsers } from "../api/user";

class App extends Component {
  state = {
    users: []
  };

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({ users });
  }

  render() {
    return <div className="App">
        <ul>
          {this.state.users.map(({ id, firstName, lastName }) => (
            <li key={id}>
              {firstName} {lastName}
            </li>
          ))}
        </ul>
      </div>
  }
}

export default App;