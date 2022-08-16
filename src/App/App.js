import React, { Component } from "react";
import { fetchUsers } from "../api/user";
import UserList from "../userComponent/UserList";
import UserDetails from "../userComponent/UserDetails";

class App extends Component {
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
          <UserList users={this.state.users}/>
          <UserDetails firstUser={firstUser}/>
      </div>
    );
  }
}

export default App;
