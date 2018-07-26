
import createRouter from 'router5'
import loggerPlugin from 'router5/plugins/logger'
import browserPlugin from 'router5/plugins/browser'
import routes from './route2'

export default function configureRouter() {
    const router = createRouter(routes, {
        defaultRoute: 'home',
    })
        // Plugins
        .usePlugin(loggerPlugin) // router transition
        .usePlugin(
            browserPlugin({
                useHash: true
            })
        ).start();

    return router
}
