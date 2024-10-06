import {ReactNode, createContext, useState } from "react";

interface Props {
    children?: ReactNode;
}

interface UserState {
    name: string;
}

interface UserContextType  {
    userState: UserState;
    setUserState: React.Dispatch<React.SetStateAction<UserState>>;
}

const defaultUserContext: UserContextType  = {
    userState: {name: ''},
    setUserState: () => {}
}

export const UserContext = createContext<UserContextType>(defaultUserContext);

export const UserContextProvider = (props: Props) => {
    const [userState, setUserState] = useState<UserState>({
        name: ""
    });

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {props.children}
        </UserContext.Provider>
    )
}