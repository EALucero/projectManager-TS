import {PropsWithChildren, createContext} from 'react';

export interface AuthContextProps {
    auth : {
        nombre? : string; apellido?: string;token?: string;
    }
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

const AuthProvider = ({children} : PropsWithChildren) => {
    return (
        <AuthContext.Provider
            value={{
                auth : {
                    nombre : "Eric",
                    apellido : "Mena",
                    token : "un_token"
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider}
export default AuthContext