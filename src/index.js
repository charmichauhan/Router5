import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App'
import App from './Demo/App'
import { RouterProvider } from 'react-router5'
import createRouter from './create-router'
// import emails from './data'

const router = createRouter(true)

router.start(() => {
    ReactDOM.render((
        <RouterProvider router={router}>
            <App />
            {/* <App emails={emails} /> */}
        </RouterProvider>
    ), document.getElementById('root'))
})