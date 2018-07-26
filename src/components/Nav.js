import React from 'react'
import { BaseLink, withRoute } from 'react-router5'

function Nav(props) {
    const { router } = props
    return (
        <nav>
            <BaseLink
                router={router}
                routeName="inbox"
                routeOptions={{ reload: false }}
            >
                Inbox
            </BaseLink>
            <BaseLink router={router} routeName="compose">
                Compose
            </BaseLink>
            <BaseLink router={router} routeName="contacts">
                Contacts
            </BaseLink>
        </nav>
    )
}

export default withRoute(Nav)
