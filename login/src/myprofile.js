import React,{useContext,useState,useEffect} from 'react'
import {store} from './App'
// import {Redirect} from 'react-router'
import {useNavigate} from 'react-router'
import axios from 'axios'
import './myprofile.css'
import Profile from './Assets/profile.jpg'
// import React from 'react'

const Myprofile = () => {
    const [token,setToken] = useContext(store)
    const [data,setData] = useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get('http://localhost:5000/myprofile',{
            headers: {
                'x-token':token
            }
        }).then(res => setData(res.data)).catch((err) => console.log(err))
    },[])
    if(!token) {
        // return <Redirect to ='/login'/>
        navigate('/loginform')
    }

  return (
    // <div className='myfrofile-page'>
    //     {
    //         data &&
    //         <div className='card'>
    //            <h1>WelCome User :{data.username}</h1>
    //            <h1>WelCome User :{data.username}</h1>
    //            <h1>WelCome User :{data.username}</h1>
    //            <h1>WelCome User :{data.username}</h1>
    //            <button onClick={()=>setToken(null)}>Log Out</button>
    //         </div>
        
    //     }
    // </div>
    <div className='myfrofile-page'>
        {
            data &&
            <div className='card'>
                <h2>Welcome :{data.username}</h2>
                <img src={Profile} alt='' />
                <h3>{data.username}</h3><hr/>
                <p>{data.email}</p><hr/>

                <button onClick={()=>setToken(null)}>Log Out</button>
            </div>
        }
    </div>
  )
}

export default Myprofile