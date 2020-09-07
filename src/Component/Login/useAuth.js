import React, { useEffect } from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { useState } from "react";
import { createContext } from 'react';
import { useContext } from 'react';


firebase.initializeApp(firebaseConfig);

const AuthContext=createContext();

export const AuthContextProvider=(props)=>{
    const auth=Auth();
    return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
}

export const useAuth=()=>useContext(AuthContext);


const getUser=user=>{
    const {displayName,email}=user;
    return {name:displayName,email}
}

const Auth=()=>{
    
    const [user,setUser]=useState(null);

    

    const signInWithGoogle=()=>{
        const provider = new firebase.auth.GoogleAuthProvider();
        return firebase.auth().signInWithPopup(provider)
        .then(res=>{
            const signInUser=getUser(res.user);
            setUser(signInUser);
            return res.user
            
        })
        .catch(error=>{
            setUser(null);
            return error.message
        })
    }
    
   
    const createAccountInWithPassword=(data)=>{
        const email=data.email;
        const password=data.password;
        const name=data.name;
        console.log(email,password);
        return firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res=>{
            res.user.updateProfile({
                displayName:name
            })
            const signInUser=getUser(res.user);
            setUser(signInUser);
            console.log(res.user);
            
        })
        .catch(function(error) {
            console.log(error.message);
          });
        
    }

    const signInWithPassword=(data)=>{
        const email=data.email;
        const password=data.password;
        
        return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res=>{
            const signInUser=getUser(res.user);
            setUser(signInUser);
            console.log(res.user,"successfully login")
        })
        .catch(function(error) {
            console.log(error.message)
          });
    }

    const signOut=()=>{
        return firebase.auth().signOut().then(function() {
            setUser(null);
          }).catch(function(error) {
            // An error happened.
          });
    }

    useEffect(()=>{
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const currentUser=getUser(user);
                setUser(currentUser);
              console.log(user)
            } else {
              // No user is signed in.
            }
          });
    },[])

    return {
        user,
        signInWithGoogle,
        createAccountInWithPassword,
        signInWithPassword,
        signOut
    }
    
}

export default Auth;