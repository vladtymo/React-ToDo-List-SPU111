import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Layout() {
    return (
        <>
            <header>
                <Menu />
                <h1>To-Do List App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam?</p>
            </header>



            {/* <Counter />
            <UserList /> */}

            <Outlet />

            <footer>

            </footer>
        </>
    );
}

export default Layout;