import { useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [theme, setTheme] = useState('');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'; // Toggle between 'light' and 'dark' themes
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto sticky">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                        onClick={toggleDropdown}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    {isDropdownOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li><a>About Us</a></li>
                            <li>
                                <details>
                                    <summary>Catagory</summary>
                                    <ul className="p-2">
                                        <li><a>Non-AC</a></li>
                                        <li><a>AC</a></li>
                                    </ul>
                                </details>
                            </li>
                            <li><a>News Portal</a></li>
                        </ul>
                    )}
                </div>
                <a className="text-xl lg:text-2xl font-bold">GP Travels</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>About Us</a></li>
                    <li>
                        <details>
                            <summary>Catagory</summary>
                            <ul className="p-2">
                                <li><a>Non-AC</a></li>
                                <li><a>AC</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>News Portal</a></li>
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-4">
                <button
                    onClick={toggleTheme}
                    className="font-medium rounded-full  text-2xl cursor-pointer"
                >
                    {theme === 'light' ? <MdDarkMode /> : <CiLight />}
                </button>
                <a className="bg-blue-500 text-white font-medium px-4 py-1.5 rounded cursor-pointer">Login</a>
            </div>
        </div>
    );
};

export default Navbar;
