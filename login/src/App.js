import React,{useState,createContext} from 'react';
import './App.css';
import Nav from './Nav';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import RegisterForm from './registerform';
import LoginForm from './loginform';
import Myprofile from './myprofile';
import Example from './example';
// import Myprofile from './myprofile';
// import RegisterForm from './registerform';

export const store = createContext();

function App() {
  const [token,setToken] = useState(null)
  return (
    <div className="App">
      <store.Provider value={[token,setToken]}>
          <BrowserRouter>
            <Nav/>
            <Routes>
                <Route path='/register' Component={RegisterForm} />
                <Route path='/loginform' Component={LoginForm} />
                <Route path='/myprofile' Component={Myprofile} />
                <Route path='/example' Component={Example} />
            </Routes>
          </BrowserRouter>
      </store.Provider>
      
                                
    </div>
  );
}

export default App;
