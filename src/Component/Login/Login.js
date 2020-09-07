import React from 'react';
import { Button} from '@material-ui/core';
import Auth from './useAuth';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import './Login.css'

const Login = () => {
    const [user,setUser]=useState(
        {
            mame:'',
            email:'',
            password:''
        }
    );
    const [login,setLogin]=useState();
    const auth=Auth();
    const handleSignIn=()=>{
        auth.signInWithGoogle()
        .then(res=>{
            window.location.pathname=('/')
        })
    }
    const handleLogOut=()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname=('/')
        })
    }
    
    const handleInput=(e)=>{
        const newUser={...user};
        newUser[e.target.name]=e.target.value;
        setUser(newUser);
        
    }
    const handlecreatewithPassword=()=>{
        auth.createAccountInWithPassword(user)
        .then(res=>{
            window.location.pathname=('/')
        })
        
    }
    const handlesigninWithPassword=()=>{
        auth.signInWithPassword(user)
        .then(res=>{
            window.location.pathname=('/')
        })
    }
    const switchForm=(e)=>{
        
        setLogin(e.target.checked);
    }

    console.log(user)
    return (
        <div style={{textAlign:'center'}}>
            
            { 
                auth.user ? 
                <div>
                    <Button onClick={handleLogOut} variant="contained">Sign Out</Button>
                    
                </div> 
                :
                    <div>
                        <p>Sign in with Google</p>
                        <Button onClick={handleSignIn} variant="contained">Log in</Button>
                    </div>
            }
            <br/>
            <p>Or</p>
            <label> 
                    <input style={{width:'20px'}} type="checkbox" name="switchForm" onChange={switchForm} id="switchForm"/>
                    I have an Account
            </label>
            <div style={{display:login ? 'none' : 'block'}} className="input-form" >
                <label>Create Account with Email and Password</label>
                <br/>
                <input type="text" name="name" onBlur={handleInput} placeholder="Your Name"/>
                <br/>
                <input type="text" name="email" onBlur={handleInput} placeholder="Email"/>
                <br/>
                <input type="password" name="password" onBlur={handleInput} placeholder="Password"/>
                <br/>
                <input type="button" onClick={handlecreatewithPassword} value="Create Account"/>
            </div>
            <br/>
            <div style={{display:login ? 'block' : 'none'}} className="input-form">
            <label>Sign in with Email and Password</label>
            <br/>
                <input type="text" name="email" onBlur={handleInput} placeholder="Email"/>
                <br/>
                <input type="password" name="password" onBlur={handleInput} placeholder="Password"/>
                <br/>
                <input type="button" onClick={handlesigninWithPassword} value="Sign in"/>
               
            </div>
        </div>
    );
};

export default Login;