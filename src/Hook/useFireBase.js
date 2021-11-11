import { GoogleAuthProvider,getAuth, signInWithPopup ,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import fireBaseInitialization from "../FireBase/FireBase.Initialize";

fireBaseInitialization();
const useFireBase=()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const[user,setUser]=useState('')
    

        // login using google
    const loginUsingGoogle=()=>{
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
            });
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              // User is signed out
              // ...
            }
          });
    },[auth])

    // log out
    const logout=()=>{
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }






    return{
        user,
        loginUsingGoogle,
        logout

    }

}

export default useFireBase;