import {useState} from "react";

const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleNav = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <img
                src="/images/hamburger.svg"
                alt="hamburger icon"
                className="hamburger"
                onClick={toggleNav}
            />

            {isDropdownOpen && (
                <nav className="nav-menu">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/bookings">Reservations</a>
                    <a href="/contact">Contact</a>
                </nav>
            )}
        </nav>
    );
};

export default NavBar;
