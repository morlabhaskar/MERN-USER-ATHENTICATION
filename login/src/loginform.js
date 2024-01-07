import React,{useState,useContext} from 'react'
import axios from 'axios'
import {store} from './App'
import { useNavigate } from 'react-router';

const LoginForm = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();

const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
}

const submitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/loginform',data).then(
        res => 
        // alert(res.data)
        setToken(res.data.token)
    )
    if(token){
    // return <Redirect to='/myprofile'/>
    navigate('/myprofile');
}
}



  return (
    <div>
        <center>
            <h1>Login form</h1>
            <form onSubmit={submitHandler}>
                <input type='email' onChange={changeHandler} name='email' placeholder='Email' required /><br/>
                <input type='password' onChange={changeHandler} name='password' placeholder='Password' required /><br/>
                <input type='submit' value="Login" />
                
            </form>
        </center>
    </div>
  )
}

export default LoginForm