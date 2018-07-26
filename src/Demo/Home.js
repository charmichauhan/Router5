import React, { Component } from 'react';
import { routeNode } from 'react-router5'

class Home extends Component {
    render() {
        return (
            <div>
                I am the home page.
            </div>
        )
    }
}

export default routeNode('home')(Home)
