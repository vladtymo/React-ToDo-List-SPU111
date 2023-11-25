import { Link } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';
import About from './components/About';
import Products from './components/Products';
import Layout from './components/Layout';

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<p>Home Page!</p>}></Route>
                <Route path="counter" element={<Counter />}></Route>
                <Route path="users" element={<UserList />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="products" element={<Products />}></Route>
                <Route path="*" element={<p>Page Not Found!</p>}></Route>
            </Route>
        </Routes>
    );
}

export default App;
