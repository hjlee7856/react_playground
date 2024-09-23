import {useLocation, useNavigate, useParams } from "react-router-dom";

export function Product() {
    const navigater = useNavigate();
    const {productId} = useParams();
    const location = useLocation();

    return (
        <>
            <h1>{productId}번 상품페이지 입니다.</h1>
            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state ? location.state.test : ''}</li>
                <li>key : {location.key}</li>
            </ul>
            <button onClick={() => navigater('/')}>main</button>
        </>
    )
}