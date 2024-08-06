import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/images/logo.png";

import { FaFacebook, FaXmark, FaUser, FaSquareInstagram, FaTwitter, FaBars } from "react-icons/fa6";

function NavbarComponent() {

// Toggle Nav
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(!navOpen);

    const navigate = useNavigate();

// Hide or Show Register

    const [openRegister, setOpenRegister] = useState(false);
    const toggleRegister = () => setOpenRegister(!openRegister);

// Hide or Show Login

    const [openLogin, setOpenLogin] = useState(false);
    const toggleLogin = () => setOpenLogin(!openLogin);
    
// Register 

    const [register, setRegister] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    });

    const handleRegister = (e) => {
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        });
    };

    const [registerHide, setRegisterHide] = useState(true);
    const newname = JSON.parse(localStorage.getItem("register"));

    const submitRegister = (e) => {
        e.preventDefault();
        localStorage.setItem('register', JSON.stringify(register));
        alert("Registered successfully");

        setRegisterHide(false);
        setOpenRegister(false);
        navigate('/');
    };

// Login 

    const [userLogin, setUserLogin] = useState(false);
    const [login, setLogin] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        });
    };

    const submitLogin = (e) => {
        e.preventDefault();
        const nlogin = JSON.parse(localStorage.getItem("register"));

        if (nlogin.email === login.email && nlogin.password === login.password) {
            alert("Login Success");
            
            setUserLogin(true);
            setOpenLogin(false);
            navigate('/');
        } else {
            alert("Please check login email and password");
        }
    };

    return (
        <>
            <nav className="flex justify-center items-center text-white">
                <div className="mx-auto max-w-7xl h-[10vh] fixed top-0 flex justify-between items-center w-[90vw] px-5 z-10 bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-30">
                    <img src={logo} alt="" style={{ height: "9vh" }} />
                    <div className="justify-between w-[75%] hidden md:inline-flex">
                        <ul className="flex justify-center items-center gap-3 font-semibold">
                            <NavLink to="/" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Home</NavLink>
                            <NavLink to="/Blogs" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Blogs</NavLink>
                            <NavLink to="/Write" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Write</NavLink>
                            <NavLink to="/Contact" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Contact</NavLink>
                            <NavLink to="/BlogPage" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Your Blog</NavLink>
                        </ul>

                        <ul className="flex justify-center items-center gap-3 font-semibold">
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaFacebook /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaSquareInstagram /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 pb-1"><FaTwitter /></li>

                            <div>
                                {registerHide && (
                                    <button
                                        onClick={toggleRegister}
                                        className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg"
                                    >
                                        Register
                                    </button>
                                )}
                            </div>

                            <div>
                                {userLogin ? (
                                    <span className="flex justify-center items-center capitalize text-xl">
                                        <FaUser className="mr-2" />{newname?.fname}
                                    </span>
                                ) : (
                                    <button
                                        onClick={toggleLogin}
                                        className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleNav} className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1">
                            {navOpen ? <FaXmark /> : <FaBars />}
                        </button>
                    </div>
                </div>

                <div className={`py-4 justify-between md:hidden bg-white rounded-md backdrop-filter z-10 backdrop-blur-lg bg-opacity-20 ${navOpen ? "block top-16 mt-1 fixed w-[92%]" : "hidden"}`}>
                    <ul className="flex justify-center items-center gap-2 font-semibold flex-col">
                    <NavLink to="/" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Home</NavLink>
                            <NavLink to="/Blogs" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Blogs</NavLink>
                            <NavLink to="/Write" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Write</NavLink>
                            <NavLink to="/Contact" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Contact</NavLink>
                        <NavLink to="/BlogPage" className={({ isActive }) => `cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-gray-800 ${isActive ? "text-red-700 border-b-2" : "text-gray-800"}`}>Your Blog</NavLink>
                    </ul>

                    <ul className="flex justify-center items-center gap-2 font-semibold flex-col">
                        <span className="flex pt-3">
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaFacebook /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaSquareInstagram /></li>
                            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl text-gray-800 p-1"><FaTwitter /></li>
                        </span>
                        
                        <div>
                                {registerHide && (
                                    <button
                                        onClick={toggleRegister}
                                        className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg"
                                    >
                                        Register
                                    </button>
                                )}
                            </div>

                            <div>
                                {userLogin ? (
                                    <span className="flex justify-center items-center capitalize text-xl">
                                        <FaUser className="mr-2" />{newname?.fname}
                                    </span>
                                ) : (
                                    <button
                                        onClick={toggleLogin}
                                        className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg"
                                    >
                                        Login
                                    </button>
                                )}
                            </div>
                    </ul>
                </div>
            </nav>

            <div id="register" className={`${openRegister ? "block" : "hidden"} z-10 absolute top-[20%] left-[8%] md:left-[35%] flex justify-center items-center flex-col md:w-[30vw] w-[80vw] h-[70vh] bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10`}>
                <button onClick={toggleRegister}><FaXmark className='absolute top-3 right-3 font-bold text-2xl text-white' /></button>

                <h1 className="text-3xl text-white font-bold border-b-2 border-red-500 pb-1">Register</h1>
                <form onSubmit={submitRegister} className="flex flex-col w-[60%]">
                    <label htmlFor="fname" className="text-white py-1 pt-3">First Name<sup>*</sup></label>
                    <input type="text" value={register.fname} name="fname" id="fname" required onChange={handleRegister} className="rounded-md p-2 outline-none" />

                    <label htmlFor="lname" className="text-white py-1 pt-3">Last name<sup>*</sup></label>
                    <input type="text" value={register.lname} name="lname" id="lname" required onChange={handleRegister} className="rounded-md p-2 outline-none" />

                    <label htmlFor="email" className="text-white py-1 pt-3">Email<sup>*</sup></label>
                    <input type="email" value={register.email} name="email" id="email" required onChange={handleRegister} className="rounded-md p-2 outline-none" />

                    <label htmlFor="password" className="text-white py-1 pt-3">Password<sup>*</sup></label>
                    <input type="password" value={register.password} name="password" id="password" required onChange={handleRegister} className="rounded-md p-2 outline-none" />

                    <button type="submit" className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg mt-5">Register</button>
                </form>
            </div>

            <div id="login" className={`${openLogin ? "block" : "hidden"} z-10 absolute top-[20%] left-[8%] md:left-[35%] flex justify-center items-center flex-col md:w-[30vw] w-[80vw] h-[70vh] bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10`}>
                <button onClick={toggleLogin}><FaXmark className='absolute top-3 right-3 font-bold text-2xl text-white' /></button>

                <h1 className="text-3xl text-white font-bold pb-1 border-b-2 border-red-500">Login</h1>
                <form onSubmit={submitLogin} className="flex flex-col w-[60%]">
                    <label htmlFor="email" className="text-white py-1 pt-3">Email<sup>*</sup></label>
                    <input type="email" value={login.email} name="email" id="email" onChange={handleLogin} className="rounded-md p-2 outline-none" required />

                    <label htmlFor="password" className="text-white py-1 pt-3">Password<sup>*</sup></label>
                    <input type="password" value={login.password} name="password" id="password" onChange={handleLogin} className="rounded-md p-2 outline-none" required />

                    <button type="submit" className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg mt-5">Login</button>
                </form>
            </div>
        </>
    );
}

export default NavbarComponent;
