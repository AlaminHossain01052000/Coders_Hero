import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";

initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password, history, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError("");
                const newUser = { email, displayName: name }
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                saveUser(email, name, "POST");
                history.replace("/");
            })
            .catch((error) => {

                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, history, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const redirect_uri = location?.state?.from || "/home";
                history.push(redirect_uri);
                setError("");
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    const logoutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setError("");
        }).catch((error) => {
            setError(error.message);
        })
            .finally(() => setLoading(false))
            ;
    }

    const handleGoogleSignIn = (history, location) => {
        setLoading(true)

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const redirect_uri = location?.state?.from || "/home";
                history.push(redirect_uri);
                setError("");

                saveUser(result.user.email, result.user.displayName, "PUT")

            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false))
            ;
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
                getIdToken(user)
                    .then(idToken => {

                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubscribed;
    }, [auth])
    useEffect(() => {

        fetch(`https://sheltered-fortress-52192.herokuapp.com/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setAdmin(data.admin);
            })
    }, [user.email])
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }

        fetch("http://localhost:5000/users", {
            method: method,
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
        user,
        admin,
        token,
        loading,
        setUser,
        error,
        registerUser,
        loginUser,
        logoutUser,

        handleGoogleSignIn
    }

}
export default useFirebase;