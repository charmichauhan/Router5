import React, { Component } from 'react';

class UserContent extends Component {

    render() {
        return (
            <div>
                {this.props.user ?
                    <p>The user is {this.props.user}</p>
                    : ''}
            </div>
        )
    }
}

export default UserContent;
