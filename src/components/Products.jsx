import React, { useEffect, useState } from 'react'

const api = 'https://shopwebapispu111.azurewebsites.net/api/products/all';

export default function Products() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
            console.log("Products conponent is mounted...");

            const res = await fetch(api);
            const users = await res.json();

            setUsers(users);
        }
        fetchData();
    }, []);

    useEffect(() => {
        console.log("Products conponent users changed...");
    }, [users]);

    useEffect(() => {
        return () => {
            console.log("Products conponent is unmounted...");
        }
    }, []);


    return (
        <>
            <h2>Product Catalog</h2>
            <ul>
                {users.map(i =>
                    <li key={i.id}>{i.name} {i.price}$</li>)}
            </ul>
        </>
    )
}
