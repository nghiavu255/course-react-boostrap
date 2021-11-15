import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {Link, useHistory} from 'react-router-dom'
import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import AlertMessage from '../layout/AlertMessage'

const Login = () => {
    // Context
    const {loginUser} = useContext(AuthContext)

    //Router
    const history = useHistory()
    const [loginForm, setLoginForm] = useState({
        username:'',
        password:''
    })
    const [alert,setAlert] = useState(null)
    const {username,password} = loginForm

    const onChangeLoginForm = event =>setLoginForm({...loginForm,[event.target.name]: event.target.value})
    
    const login = async event =>{
        event.preventDefault()

        try {
            const loginData = await loginUser(loginForm)
            console.log(loginData)
            if (!loginData.success) {
				setAlert({ type: 'danger', message: loginData.message })
				setTimeout(() => setAlert(null), 5000)
			}
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <>
            <Form onSubmit={login}>
                <AlertMessage info={alert}/>
                <Form.Group  className='mar'>
                    <Form.Control value={username} type="text" placeholder="Username" name="username" onChange={onChangeLoginForm} />
                </Form.Group>
                <Form.Group className='mar'>
                    <Form.Control value={password} type="password" placeholder="Password" name="password" onChange={onChangeLoginForm} />
                </Form.Group>
                <Button variant="success" type="submib">Login</Button>
            </Form>
            <p>Don't have an account?
                <Link to="/register">
                    <Button variant="info" size='sm' className='ml-2'>Register</Button>
                </Link>
            </p>
        </>
    )
}

export default Login
