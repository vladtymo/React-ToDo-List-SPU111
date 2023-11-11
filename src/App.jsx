import './App.css';
import Counter from './components/Counter';
import UserList from './components/UserList';

function App() {
    return (
        <div className="App">
            <h1>To-Do List App</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quisquam?</p>

            <Counter />
            <UserList />
        </div>
    );
}

export default App;
