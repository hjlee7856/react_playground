import {useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContextProvider";
import { useNavigate } from "react-router-dom";

interface LoginForm {
    uid: string;
    password: string;
}

const URL = 'http://localhost:8080/api/user/login'

export default function Login() {
    const [loginState, setLoginState] = useState<LoginForm>({ uid: '', password: '' });
    const navigator = useNavigate()
    const { setUserState } = useContext(UserContext);

    const setUid = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState((prevState) => ({
            ...prevState,
            uid: e.target.value
        }));
    }

    const setPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginState((prevState) => ({
            ...prevState,
            password: e.target.value
        }));
    }

    const sendLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 기본 폼 제출 동작 방지

        // Axios
        try {
            const response = await axios.post(URL, loginState);
            console.log("Axios 응답 메시지:", response.data);
        } catch (error) {
            console.error("로그인 오류:", error);
        }

        // Fetch
        try {
            const response = await fetch(URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(loginState)
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Fetch 응답 메시지:", data);
            setUserState({name: data.name}); // Context API
            navigator('/')
        } catch (error) {
            console.error("로그인 오류:", error);
        }
    }

    return (
        <>
            <form onSubmit={sendLoginForm}>
                <input
                    type="text"
                    placeholder="uid"
                    value={loginState.uid}
                    onChange={setUid}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={loginState.password}
                    onChange={setPassword}
                />
                <button type="submit">Login</button>
                <button type="button" onClick={() => {navigator('/')}}>back</button>
            </form>
        </>
    );
}

