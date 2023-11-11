import { Link } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';
import Layout from './components/Layout';

function App() {
    return (
        <div className="App">
            <h1>To-Do List App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam?</p>

            <nav>
                <Link to="">Home</Link>
                <Link to="users">Users</Link>
                <Link to="counter">Counter</Link>
                <Link to="about">About</Link>
            </nav>

            {/* <Counter />
            <UserList /> */}

            <Layout />
        </div>
    );
}

export default App;
