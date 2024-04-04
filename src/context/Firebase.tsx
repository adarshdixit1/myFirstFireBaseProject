import React, { createContext, useContext } from "react";
import { getDatabase, ref, set } from "firebase/database"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBOVAj1jOLNL7Dj8MVuTz9lTL5LQLLHTL8",
    authDomain: "my-maeterialui-app.firebaseapp.com",
    projectId: "my-maeterialui-app",
    storageBucket: "my-maeterialui-app.appspot.com",
    messagingSenderId: "737503308218",
    appId: "1:737503308218:web:87314c9ee527998ac3d583",
    databaseURL: "https://my-maeterialui-app-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp)

const FirebaseContext: any = createContext(null);
export const useFirebase: any =()=> useContext(FirebaseContext);


export const FirebaseProvider: any = (props: any) => {

    const registerWithGmail: any = (email: string, password: any) => createUserWithEmailAndPassword(firebaseAuth, email, password)
    const signInWithGmail: any = (email: string, password: any) => signInWithEmailAndPassword(firebaseAuth, email, password)
    const uploadData: any = (key: string, data: any) => set(ref(firebaseDatabase, key), { data })

    const firebase: any = { registerWithGmail, signInWithGmail, uploadData }
    return (
        <FirebaseContext.Provider value={firebase}>
            {props.children}
        </FirebaseContext.Provider>
    );
};
