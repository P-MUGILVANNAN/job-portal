import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


const Login = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const handleLogin=()=>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
         
          const user = result.user;
          window.location.replace("/");
          
        }).catch((error) => {
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
       
    }
  return (
    // <div classNameName='h-screen w-full flex items-center justify-center'>
    //   <button classNameName='bg-blue px-8 py-2 text-white' onClick={handleLogin}>Login</button>
    // </div>
    <div className="h-screen w-screen bg-black flex justify-center items-center">

    <div className="relative inline-flex  group">
        <div
            className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
        </div>
        <button
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            onClick={handleLogin}>Login
        </button>
    </div>
</div>
  )
}

export default Login
