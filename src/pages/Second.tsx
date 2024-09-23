import { useNavigate } from "react-router-dom";


export function Second() {
    const navigater = useNavigate();

    return (
        <>
            <h1>second 페이지 입니다.</h1>
            <button onClick={() => navigater('/first')}>first</button>
            <button onClick={() => navigater('/')}>main</button>
        </>
    )
}
