import React, { Component } from "react";
import { UserConsumer } from "./UserContext";
class ComC extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username) => {
                        return <div>Hello {username}</div>
                    }
                }
            </UserConsumer>
        );
    }
}

export default ComC;