import React, { Component } from 'react'
import { BaseLink, withRoute } from 'react-router5'

class Sidebar extends Component {
    render() {
        const { router } = this.props
        return (
            <div >
                <div className="baseLink" style={{ float: 'left', paddingRight: '50px' }} >
                    <BaseLink
                        router={router}
                        routeName="home"
                    >
                        Home
                    </BaseLink>
                </div>
                <div className="baseLink" style={{ float: 'left' }}>
                    <BaseLink router={router} routeName="users"
                        routeOptions={{ reload: false }}
                    >
                        Users
                    </BaseLink>
                </div>
            </div>
        )
    }
}
export default withRoute(Sidebar)
