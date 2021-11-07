import React, { createContext } from 'react';
import useFirebase from '../../hooks/useFirebase';
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const allContents = useFirebase();
    return (
        <AuthContext.Provider value={allContents}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;