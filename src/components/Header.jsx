import NavBar from "./NavBar";
import {useState} from "react";

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <>
            <header>
                <NavBar/>
                <img src="/images/Logo.svg" alt="Little Lemon Logo"/>

                <a href="/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/home%20icon.svg" alt="Home Page Icon" style={{cursor: 'pointer'}}/>
                </a>
            </header>
        </>
    )
}

export default Header;
