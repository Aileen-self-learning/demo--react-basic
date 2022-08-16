import React, {Component} from "react";

class UserDetails extends Component {
    render() {
        return <section>
            <h2>用户详情</h2>
            <h3>
                {this.props.firstUser.firstName} {this.props.firstUser.lastName}
            </h3>
            <p>{this.props.firstUser.email}</p>
            <p>{this.props.firstUser.website}</p>
        </section>;
    }
}

export default UserDetails;