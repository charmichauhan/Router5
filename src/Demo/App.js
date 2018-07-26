import React, { Component } from 'react';
import Home from './Home';
import Users from './Users';
import { routeNode } from 'react-router5'
import Sidebar from './Sidebar';

class App extends Component {
    renderContent() {
        const topRouteName = this.props.route.name.split('.')[0];
        if (topRouteName === 'home') {
            return <Home />
        }
        if (topRouteName === 'users') {
            return <Users />
        }
    }
    render() {
        return (
            <div className="content">
                <aside >
                    <Sidebar />
                </aside>
                <main>
                    {this.renderContent()}
                </main>
            </div>
        )
    }
}

export default routeNode('')(App)
