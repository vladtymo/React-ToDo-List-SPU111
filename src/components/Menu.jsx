import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { CounterContext } from '../contexts/counter.context';

export default function Menu() {

    const { count } = useContext(CounterContext);

    return (
        // <nav>
        //     <Link to="">Home</Link>
        //     <Link to="users">Users</Link>
        //     <Link to="products">Products</Link>
        //     <Link to="counter">Counter</Link>
        //     <Link to="about">About</Link>
        // </nav>
        <Navbar>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">ACME</p>
            </NavbarBrand>
            <NavbarContent className="sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="users">
                        Users
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="products" aria-current="page">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="counter">
                        Counter ({count})
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}
