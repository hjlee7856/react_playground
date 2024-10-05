import {useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { useEffect } from "react";
import {productSliceActions, ProductState} from "../redux/product";

export function Product() {
    const navigater = useNavigate();
    const {productId} = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const productIdNum = Number(productId) || 0
        const productState: ProductState = {productId: productIdNum}
        dispatch(productSliceActions.setProductId(productState));
    }, []);

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