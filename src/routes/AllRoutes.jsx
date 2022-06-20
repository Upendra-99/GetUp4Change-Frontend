import React from 'react'
import { Route, Routes } from 'react-router'
import Registeration from '../components/Registration'
import Login from '../components/Login'
import HomeRoute from './HomeRoute'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomeRoute />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registeration />} />
            </Routes>
        </div>
    )
}

export default AllRoutes