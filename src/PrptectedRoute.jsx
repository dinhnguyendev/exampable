import React from 'react'
import Cookie from 'cookie-universal';
import { Outlet } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from './Login';

const cookies = Cookie();
// cookies.set('auth', 'tokenveadasdasdbasjkdsjbada4sd4as4d')
// const userAuth=()=>{
//     const auth = cookies.get('auth');
//     if
// }
const PrptectedRoute = ({ allowRole }) => {
    const auth = cookies.get('auth');
    const navigate = useNavigate();

    return (
        auth ? <Outlet /> : <Navigate to='/login' />

    )
}

export default PrptectedRoute