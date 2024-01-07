import React,{useState} from 'react'
import axios from 'axios';
// import {store} from './App'
import { useNavigate } from 'react-router';

const RegisterForm = () => {
    const [data,setData] = useState({
        username:'',
        email:'',
        password:'',
        conformpassword:''
    })
    const navigate = useNavigate();

const changeHandler = e => {
    setData({...data,[e.target.name]:e.target.value})
}

const submitHandler = e => {

    e.preventDefault();
    axios.post('http://localhost:5000/register',data).then(
        res => alert(res.data)
        
    )
    navigate('/loginform');
}
// if(token){
    // return <Redirect to='/myprofile'/>

// }
// return <Redirect to='/'>


  return (
    <div>
        <center>
            <form onSubmit={submitHandler}>
                <input type='text' onChange={changeHandler} name='username' placeholder='UserName' required /><br/>
                <input type='email' onChange={changeHandler} name='email' placeholder='Email' required /><br/>
                <input type='password' onChange={changeHandler} name='password' placeholder='Password' required /><br/>
                <input type='password' onChange={changeHandler} name='conformpassword' placeholder='Conform Password' required /><br/>
                <input type='submit' value="Register" />
            </form>
        </center>
    </div>
  )
}

export default RegisterForm