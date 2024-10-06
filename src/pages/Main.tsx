import {Link, useNavigate } from 'react-router-dom';
// import { useAppSelector } from '../redux/store';
import { UserContext } from '../context/UserContextProvider';
import { useContext, useEffect } from 'react';
import {Cookies} from 'react-cookie'

export function Main() {
    const navigator = useNavigate();
    // const recentProductId = useAppSelector(state => state.product.productId);
    // 로컬스토리지에서 꺼내서 사용
    const recentProductId = localStorage.getItem('preproductId');
    const { userState } = useContext(UserContext);

    useEffect(() => {
        // 쿠키에 저장된 값 출력
        const cookies = new Cookies();
        console.log("쿠키에 저장된 값: " + cookies.get("username").toString());
    }, []);

    return (
        <>
            {userState.name && <h1>{userState.name}님</h1>}
            <h1>main 페이지 입니다.</h1>
            {recentProductId && <h1>최근 열었던 상품은 {recentProductId}번 상품입니다.</h1>}
            <Link to="/login"><h1>로그인으로 이동</h1></Link>
            <Link to="/product/1?search=productName&q=demo#test" state={{test: 'hello'}}><h1>1번 상품으로 이동</h1></Link>
            <Link to="/product/2?search=productName&q=demo#test" state={{test: 'hello'}}><h1>2번 상품으로 이동</h1></Link>
            <button onClick={() => navigator('/first')}>first</button>
            <button onClick={() => navigator('/second')}>second</button>
        </>
    )
}
