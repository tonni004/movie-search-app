import React from "react";
import { Navbar, NavbarContent, NavbarItem, Link } from "@nextui-org/react";

const Navigation = () => {
    return (

        <Navbar className="bg-black bg-opacity-75">
            <NavbarContent className="nav d-flex justify-content-center nav-underline container p-3">
                <NavbarItem className="nav-item me-3">
                    <Link href="/movie-search-app"
                        underline="hover"
                        className="nav-link link-body-emphasis text-light"
                    >Home</Link>
                </NavbarItem>

                <NavbarItem className="nav-item me-3">
                    <Link href="/movie-search-app/movies"
                        underline="hover"
                        className="nav-link link-body-emphasis text-light"
                    >Movies</Link>
                </NavbarItem>
                <NavbarItem className="nav-item">
                    <Link href="/movie-search-app/trends"
                        underline="hover"
                        className="nav-link link-body-emphasis text-light"
                    >Trends</Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>

    )
}

export default Navigation;