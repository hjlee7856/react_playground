import {Link, useNavigate } from 'react-router-dom';
import './App.css'

export function App() {
  const navigater = useNavigate();

  return (
      <>
        <h1>main 페이지 입니다.</h1>
        <Link to="/product/1?search=productName&q=demo#test" state={{test: 'hello'}}><h1>1번 상품으로 이동</h1></Link>
        <button onClick={() => navigater('/first')}>first</button>
        <button onClick={() => navigater('/second')}>second</button>
      </>
  )
}
