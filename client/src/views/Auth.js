import React from 'react'
import Login from '../components/auth/Login'
import Register from '../components/auth/Register'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'
const Auth = ({authRoute}) => {
        const {
            authState: { authLoading, isAuthenticated }
        } = useContext(AuthContext)
        let body

        if (authLoading)
		body = (
			<div className='d-flex justify-content-center mt-2'>
				<Spinner animation='border' variant='info' />
			</div>
		)
        else if (isAuthenticated) return <Redirect to='/dashboard' />
        else
            body = (
                <>
                    {authRoute === 'login' && <Login />}
                    {authRoute === 'register' && <Register />}
                </>
            )


    return (
       <div className="landing">
           <div className="dark-overlay">
               <div className="landing-inner">
                   <h1>learn on tik tok</h1>
                   <h4>well come to mern</h4>
                   {body}
               </div>
           </div>
       </div>
    )
}

export default Auth
