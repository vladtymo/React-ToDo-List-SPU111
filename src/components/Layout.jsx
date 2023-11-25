import { Outlet } from "react-router-dom";
import Menu from "./Menu";

function Layout() {
    return (
        <>
            <header>
                <h1>To-Do List App</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam?</p>
            </header>

            <Menu />

            {/* <Counter />
            <UserList /> */}

            <Outlet />

            <footer>
                Copyright @...
            </footer>
        </>
    );
}

export default Layout;