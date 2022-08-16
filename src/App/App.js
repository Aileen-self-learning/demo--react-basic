import React, { Component } from "react";
import { fetchUsers } from "../api/user";
import UserList from "../userComponent/UserList";
import UserDetails from "../userComponent/UserDetails";

class App extends Component {
  state = {
    users: [],
    currentUser: {},
  };

  async componentDidMount() {
    const users = await fetchUsers();
    this.setState({
      users,
      currentUser: users[0]
    });
  }

  setCurrentUser = (user) => {
    this.setState({
      currentUser: user
    });
  };

  render() {
    return (
      <div className="App">
          <UserList users={this.state.users} setCurrentUser={this.setCurrentUser}/>
          <UserDetails currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
