import { Outlet, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import UserList from "./UserList";
import About from "./About";
import Products from "./Products";

function Layout() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<p>Home Page!</p>}></Route>
                <Route path="/counter" element={<Counter />}></Route>
                <Route path="/users" element={<UserList />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/products" element={<Products />}></Route>
            </Routes>

            <Outlet />
        </div>
    );
}

export default Layout;