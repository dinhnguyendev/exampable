import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AQ from './AQ'
import Public from './Public'
import Qa from './Qa'
import Su from './Su'
import Suss from './Suss'
const roleListProtected = [
    {
        role: 'QA',
        component: <Qa />,
        path: "/qa"
    },
    {
        role: 'QA',
        component: <AQ />,
        path: "/aq"
    },
    {
        role: 'SU',
        component: <Su />,
        path: "/aa"
    },
    {
        role: 'SU',
        component: <Suss />,
        path: "/ab"
    },
    {
        role: 'public',
        component: <Public />,
        path: "/public1"
    },
    {
        role: 'public',
        component: <Public />,
        path: "/public2"
    },
]
const Protected = ({ role }) => {
    const ListComponents = role && roleListProtected.filter((roleProtected) => roleProtected.role == role)
    console.log(ListComponents);

    console.time("time")
    const routerdom = ListComponents?.map(({ path, component }) => {
        console.log(path);
        console.log(component);
        return (
            <Route path={path} element={component} />
        )
    })
    console.time("time")
    return (
        <BrowserRouter>
            <Routes>

                {routerdom}
            </Routes>
        </BrowserRouter>

    )
}

export default Protected