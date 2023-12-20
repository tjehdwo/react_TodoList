import React from "react";
import About from "./About";
function Header(){
    return(
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <About />
        </header>
    )
}
export default Header;