//src/component/navbar
import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
    <nav>
        <ul>
            <li><a href="https://www.google.com">Google</a></li>
            <li><a href="https://www.facebook.com">Facebook</a></li>
            <li><a href="https://www.twitter.com">Twitter</a></li>
            <li><a href="https://www.gmail.com">Gmail</a></li>
        </ul>
    </nav>
    );
}

export default Navbar;