import { useNavigate } from "react-router-dom";


export function First() {
    const navigater = useNavigate();

    return (
        <>
            <h1>first 페이지 입니다.</h1>
            <button onClick={() => navigater('/')}>main</button>
            <button onClick={() => navigater('/second')}>second</button>
        </>
    )
}