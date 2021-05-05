import { createContext, useState, ReactNode, useContext } from 'react';

type LoginContextData = {
    username: string;
    password: string;
    server: string;
    setLoginData: (user: string, pass: string, address: string) => void;
};

type LoginContextProviderProps = {
    children: ReactNode;
};

export const LoginContext = createContext({} as LoginContextData);

export function LoginContextProvider({ children }: LoginContextProviderProps) {
    const [username, setUsername] = useState('1');
    const [password, setPassword] = useState('2');
    const [server, setServer] = useState('3');

    function setLoginData(user: string, pass: string, address: string) {
        setUsername(user);
        setPassword(pass);
        setServer(address);
    }

    return (
        <LoginContext.Provider
            value = {{
                username,
                password,
                server,
                setLoginData,
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}

export const useLogin = () => {
    return useContext(LoginContext);
}