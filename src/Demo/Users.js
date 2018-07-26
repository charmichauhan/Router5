import React, { Component } from 'react';
import UserContent from './UserContent';
import { routeNode } from 'react-router5'
import { Link } from 'react-router5'

class Users extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: ''
        }
    }

    render() {
        const { route } = this.props;
        console.log('users', this.props)
        return (
            <div>
                <Link
                    routeName="users.userContent"
                    activeClassName="active"
                >
                    <p>The list of users</p>
                    <ul>
                        <li onClick={() => this.setState({ user: 'cc' })}>cc</li>
                        <li onClick={() => this.setState({ user: 'abc' })}>abc</li>
                        <li onClick={() => this.setState({ user: 'xyz' })}>xyz</li>
                    </ul>
                </Link>
                {route && route.name === 'users.userContent'
                    ?
                    <UserContent user={this.state.user} />
                    : ''
                }
            </div>
        )
    }
}

export default routeNode('users')(Users)
