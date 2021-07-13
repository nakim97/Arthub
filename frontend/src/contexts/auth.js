import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null)

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const authValue = {user, setUser}

    return (
        <AuthContext.Provider value={authValue}>
            <>{children}</>
        </AuthContext.Provider>
    )
}
// This hook will be used by any component that needs the value
export const useAuthContext = () => useContext(AuthContext)