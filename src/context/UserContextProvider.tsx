import {ReactNode, createContext, useState } from "react";

interface Props { // ReactNode를 받아 감싸줌
    children?: ReactNode;
}

interface UserState { // userState 정의
    name: string;
}

interface UserContextType  { // context 타입
    userState: UserState;
    setUserState: React.Dispatch<React.SetStateAction<UserState>>; // 타입선언 잘 해야함
}

const defaultUserContext: UserContextType  = { // context 기본값
    userState: {name: ''},
    setUserState: () => {}
}

// context를 만들어 외부로 보냄
export const UserContext = createContext<UserContextType>(defaultUserContext);

// Provider를 만든다.
export const UserContextProvider = (props: Props) => {
    const [userState, setUserState] = useState<UserState>({ // 내보낼 state
        name: "" // 기본값
    });

    return (
        <UserContext.Provider value={{ userState, setUserState }}>
            {props.children}
        </UserContext.Provider>
    )
}