import {Link, useNavigate } from 'react-router-dom';
import './App.css'
import { useAppSelector } from '../redux/store';

export function App() {
    const navigater = useNavigate();
    const recentProductId = useAppSelector(state => state.product.productId);

    return (
        <>
            <h1>main 페이지 입니다.</h1>
            <h1>최근 열었던 상품은 {recentProductId}번 상품입니다.</h1>
            <Link to="/login"><h1>로그인으로 이동</h1></Link>
            <Link to="/product/1?search=productName&q=demo#test" state={{test: 'hello'}}><h1>1번 상품으로 이동</h1></Link>
            <Link to="/product/2?search=productName&q=demo#test" state={{test: 'hello'}}><h1>2번 상품으로 이동</h1></Link>
            <button onClick={() => navigater('/first')}>first</button>
            <button onClick={() => navigater('/second')}>second</button>
        </>
    )
}
