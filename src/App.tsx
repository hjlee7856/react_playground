import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { First } from './pages/First'
import { Second } from './pages/Second'
import { NotFound } from './pages/NotFound'
import { Product } from './pages/Product'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Login from './pages/Login'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserContextProvider } from './context/UserContextProvider'
import { Main } from './pages/Main'

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/first" element={<First />} />
                            <Route path="/second" element={<Second />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/product/:productId" element={<Product />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </UserContextProvider>
        </QueryClientProvider>
    );
};

createRoot(document.getElementById('root')!).render(<App />);