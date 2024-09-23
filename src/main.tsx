import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { App } from './pages/App'
import { First } from './pages/First'
import { Second } from './pages/second'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'

createRoot(document.getElementById('root')!).render(
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/first" element={<First/>}/>
                <Route path="/second" element={<Second/>}/>
                <Route path="/product/:productId" element={<Product/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </div>
)