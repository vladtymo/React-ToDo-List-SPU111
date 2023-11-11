import { useState } from 'react';
import './UserList.css';
import { USERS } from '../users-mock';

function UserList() {

    const [users, setUsers] = useState(USERS);

    const add = () => {
        const newUser = { id: users.length + 1, name: "Oleg" };

        //users.push(newUser);
        setUsers([...users, newUser]);
    }

    return (
        <div className="Users">
            <h2>User List</h2>
            <ul>
                {users.map((i, index) =>
                    <li key={i.id}>[{i.id}] - {i.name}</li>
                )}
            </ul>
            <button onClick={add}>Add User</button>
        </div>
    );
}

export default UserList;