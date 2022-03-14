import { initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from 'axios';

const fireBaseConfig = {
    "apiKey" : "AIzaSyAip4hecOJfi2iYN-iMBzWaCi9965XgBXg",
    "authDomain" : "stech-login.firebaseapp.com",
    "databaseURL" : "https://stech-login-default-rtdb.asia-southeast1.firebasedatabase.app/",
    "projectId" : "stech-login",
    "storageBucket" : "stech-login.appspot.com",
    "messagingSenderId" : "47306739642",
    "appId" : "1:47306739642:web:81dbe404d0f3a3e5add783",
    "measurementId" : "G-DKPY2G15WY"
}

const app = initializeApp(fireBaseConfig);
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Google login
export const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider).
    then((result) => {
        var axios = require('axios');
        var data = JSON.stringify({
            "name": result.user.displayName,
            "avatar": result.user.photoURL,
            "username": (result.user.displayName.split(' ')[2] + result.user.displayName.split(' ')[0]).toLowerCase(),
            "identity": result.user.uid.toString(),
            "account_type": 3,
            "email": result.user.email.toString(),
        });

        var config = {
            method: 'post',
            url: 'http://115.79.140.218:9008/api/auth/login-social',
            headers: { 
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImYxZDU2YTI1MWU0ZGRhM2Y0NWM0MWZkNWQ0ZGEwMWQyYjlkNzJlMGQiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSE9ORyBUQU5HIENIQU4iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKdzEyOFJDUzBmSHA4VW5KdlVOVVd0d05qUVFkeUxZaFlpT1V4S3Y9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RlY2gtbG9naW4iLCJhdWQiOiJzdGVjaC1sb2dpbiIsImF1dGhfdGltZSI6MTY0NzIyODcyMywidXNlcl9pZCI6Ing2ajJOVkpNbDhYQ084S3REWWd4b2s4VXBsMjMiLCJzdWIiOiJ4NmoyTlZKTWw4WENPOEt0RFlneG9rOFVwbDIzIiwiaWF0IjoxNjQ3MjI4NzIzLCJleHAiOjE2NDcyMzIzMjMsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDc2MTQyMTYyODA4NzI0NDQxODciXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.QBKJX2wuPHTRLSnFjit_E1_z5R12HtEDj6msoD93Nw8IpPFE-aWpARQNw_rMmoMjTvzIF1z0oRNNaW2Sf0q8dZxzVXoKELT-kC62xO-08pp7IwFZE3mNQk52_JVR4HLO75809VoqDxakhAiwZpgkRhIT5d-WXILKEIGOj0aaHUWTGyL0BeQtrQJEBLrCnImATLpTUd_0Bgg5rSH78j39ft-6_M9rElelOydiJoEOu25BqnvhOCVtVuVOC8_ZG_ha8AdnY0XO5-7_9joXPNef2ylzKuoyUif4T1VRwhJ6Wptg1iX70Ytv4EieTvziEhYFy2N16vHBmBvJwI5VhNGAbg', 
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }).catch((error) => {
        console.log(error)
    })
}

   
// Facebook login
export const signInWithFaceBook = () => {
    signInWithPopup(auth, facebookProvider).then((result) => {
        console.log(result)
        
    }).catch((error) => {
        console.log(error)
    })
}