import {useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { useEffect, useState } from "react";
import {productSliceActions, ProductState} from "../redux/product";
import {useProductInfoBySWR} from "../server/SWR";
import { useProductInfoByReactQuery } from "../server/ReactQuery";

interface productState {
    name: string;
    price: number;
}

export function Product() {
    const navigater = useNavigate();
    const {productId} = useParams();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const {productInfoDataBySWR} = useProductInfoBySWR(productId); // SWR에서 가져옴
    const [productStateBySWR, setProductStateBySWR] = useState<productState>({name: '정보없음', price: 0}) // 기본값
    const {productInfoDataByReactQuery, productInfoIsLoadingByReactQuery} = useProductInfoByReactQuery(productId);
    const [productStateByReactQuery, setProductStateByReactQuery] = useState<productState>({name: '정보없음', price: 0}) // 기본값

    useEffect(() => {
        const productIdNum = Number(productId) || 0
        const productState: ProductState = {productId: productIdNum}
        dispatch(productSliceActions.setProductId(productState));
    }, [dispatch, productId])

    useEffect(() => {
        if(!productInfoDataBySWR) return // 데이터 없으면 return
        setProductStateBySWR(productInfoDataBySWR); // 있으면 상태갱신
    }, [productInfoDataBySWR]);

    useEffect(() => {
        if(productInfoIsLoadingByReactQuery) console.log('react-query 로딩중'); // 로딩상태
        if(!productInfoDataByReactQuery) return // 없으면 return
        setProductStateByReactQuery(productInfoDataByReactQuery); // 있으면 상태갱신
    }, [productInfoDataByReactQuery]);

    return (
        <>
            <h1>{productId}번 상품페이지 입니다.</h1>
            <ul>
                <li>swr-name: {productStateBySWR.name}</li>
                <li>swr-price: {productStateBySWR.price}</li>
                <li>react-query-name: {productStateByReactQuery.name}</li>
                <li>react-query-price: {productStateByReactQuery.price}</li>
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