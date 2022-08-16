import React, {Component} from "react";

class UserList extends Component {
    render() {
        const users = this.props.users;
        const setCurrentUser = this.props.setCurrentUser;
        return <section>
            <h2>用户列表</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id} onClick={() => setCurrentUser(user)}>
                        {user.firstName} {user.lastName}
                    </li>
                ))}
            </ul>
        </section>;
    }
}

export default UserList;