import { GoogleAuthProvider,getAuth, signInWithPopup ,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { useEffect, useState } from "react";

import fireBaseInitialization from "../FireBase/FireBase.Initialize";
import swal from 'sweetalert';


fireBaseInitialization();
const useFireBase=()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const[user,setUser]=useState('')
    const[error,setError]=useState('')
    const[isLoading,setloading]=useState(true)


    // create/signup user by email and password
    
    const createUser=(email,password,name,history)=>{

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const newUser={email,displayName:name}
        setUser(newUser)

        saveUser(newUser.email,newUser.displayName,"post")

        updateProfile(auth.currentUser, {
          displayName: name, 
          photoURL: "https://i.ibb.co/H4GVX5X/download.jpg"
        }).then(() => {
         
        }).catch((error) => {
          // An error occurred
          // ...
        });
        logout()
        setError('')
        swal({
          title: `"welcome ${name}!"`,
          text: "your account create successfully!",
          icon: "success",
          button: "ok!",
        });
       
        history.push("/login")
       
      })
      .catch((error) => {
        
        setError( error.message)
        
      });
      
    }

    // create user login by email and password
    
    const loginUser=(email,password,history,location)=>{
      console.log(email)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        const redirect_uri= location?.state?.from || "/"
        history.push(redirect_uri)
        
        setError('')
      })
      .catch((error) => {
        setError(error.message)
      }).finally(()=>setloading(false))

    }
    

        // login using google
    const loginUsingGoogle=()=>{
      setloading(true)
       return signInWithPopup(auth, provider)
           .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            }).finally(()=>setloading(false));
    }

    useEffect(()=>{
      setloading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              // ...
            }
            setloading(false)
          });
    },[auth])

    // log out
    const logout=()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          }).finally(()=>setloading(false))
    }



    // save new user in db
    const saveUser=(email,name,method)=>{
      const newUser={email,name}

      fetch('http://localhost:5000/alluser',{
        method:method,
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(newUser)
      })

    }




    const[admin,setAdmin]=useState(false)
    useEffect(()=>{
      fetch(`http://localhost:5000/admin/${user.email}`)
      .then(res=>res.json())
      .then(data=>setAdmin(data.admin))
    },[user.email])




    return{
        user,
        loginUsingGoogle,
        logout,
        createUser,
        error,
        setloading,
        isLoading,
        loginUser,
        saveUser,
        admin
        
        

    }

}

export default useFireBase;