import NavBar from "./NavBar";
import {useState} from "react";

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <>
            <header className="header">
                <NavBar />
                <img src="/images/Logo.svg" alt="Little Lemon Logo"/>
                <img src="/images/home%20icon.svg" alt="Home Page Icon"/>
            </header>
        </>
    )
}

export default Header;
