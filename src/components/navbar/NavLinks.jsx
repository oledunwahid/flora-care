import React from "react";
import { Link } from "react-router-dom";

const NavLinks = () => {
    const links = [
        {name: 'Home'},
        {name: 'Flowers'},
        {name: 'About Us'},
        {name: 'Contact'},
    ];
    return (
        <>
        {
            links.map(link => (
                <div>
                    <div className="px-3 text-left md:cursor-pointer">
                        <Link to={`/${link.name}`}><h1 className="py-7">{link.name}</h1></Link>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default NavLinks;