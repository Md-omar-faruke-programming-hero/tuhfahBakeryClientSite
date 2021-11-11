import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";
const fireBaseInitialization=()=>{
    initializeApp(firebaseConfig);
}

export default fireBaseInitialization;