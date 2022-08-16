import React, {Component} from "react";

class UserDetails extends Component {
    render() {
        return <section>
            <h2>用户详情</h2>
            <h3>
                {this.props.currentUser.firstName} {this.props.currentUser.lastName}
            </h3>
            <p>{this.props.currentUser.email}</p>
            <p>{this.props.currentUser.website}</p>
        </section>;
    }
}

export default UserDetails;