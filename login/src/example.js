import React from 'react'
import './example.css'
import Profile from './Assets/profile.jpg'

const Example = () => {
  return (
    <div className='myfrofile-page'>
            <div className='card'>
               <img src={Profile} alt='' />
               <h3>Bhaskar</h3><hr/>
               <p>example123@gmail.com</p><hr/>

               <button>Log Out</button>
            </div>
    </div>
  )
}

export default Example