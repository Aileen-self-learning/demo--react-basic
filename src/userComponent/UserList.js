import React, {Component} from "react";

class UserList extends Component {
    render() {
        const users = this.props.users;
        return <section>
            <h2>用户列表</h2>
            <ul>
                {users.map(({id, firstName, lastName}) => (
                    <li key={id}>
                        {firstName} {lastName}
                    </li>
                ))}
            </ul>
        </section>;
    }
}

export default UserList;