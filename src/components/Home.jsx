
import { Link } from "react-router-dom"
import { FaUser } from "react-icons/fa6";
import Data from "./Data"

function Home() {


    return (
        <>
            <div className="w-[100%] h-[150vh] md:h-[150vh] flex flex-col-reverse md:flex-row gap-3 justify-center md:flex md:justify-between items-center md:px-20 bg-gradient-to-br from-slate-300 to-slate-950">
                <div className="relative md:w-[70%] rounded-md h-[95%] flex justify-between items-center flex-col overflow-y-scroll no-scrollbar bg-[url('https://images.unsplash.com/photo-1527049979667-990f1d0d8e7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAwfHxiYWNrZ3JvdW5kfGVufDB8fDB8fHww')] bg-[center] bg-[cover] p-5 w-[90%]">
                    <div className="subNav sticky top-0 mb-10 w-[100%] p-5  rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10 ">
                        <ul className="flex justify-center items-center gap-4 font-semibold">
                            <Link to="/" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-white">Home</Link>
                            <Link to="/Blogs" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-white">Blogs</Link>
                            <Link to="/Write" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-white">Write</Link>
                            <Link to="/Contact" className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-lg text-white">Contact</Link>
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-5 flex-wrap">
                        {
                            Data.map((val, index) => {
                                return (
                                    <>
                                        <div id={index} className="card w-64 m-2 shadow-md hover:shadow-gray-200 rounded-2xl">
                                            <img src={val.image} alt="" className="h-1/2 border-t-1 rounded-t-2xl" />

                                            <div className=" bg-white p-2 border-b-0 rounded-b-2xl">
                                                <h1 className="text-black font-semibold pt-3">{val.title}</h1>
                                                <span className="flex justify-start items-center pt-2">
                                                    <FaUser />
                                                    <p className="text-left text-xl font-semibold pl-2">{val.author}</p>
                                                </span>
                                                <p className=" py-2">Published on : {val.published_date}</p>
                                                <p>Read more....</p>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="h-[90%] w-[90%] m-2 md:w-[25%] rounded-md bg-black/10 backdrop-filter backdrop-blur-lg bg-opacity-10 md:overflow-hidden overflow-y-scroll no-scrollbar">
                    <h1 className="m-3 text-2xl font-semibold">Letast Blogs</h1>
                    <div className="flex justify-center flex-col items-center">
                        {
                            Data.splice(0, 3).map((val, index) => {
                                return (
                                    <>
                                        <div id={index} className="card w-[90%] m-2 shadow-md hover:shadow-gray-500 ">

                                            <div className="p-2 border-b-0 text-slate-300 hover:text-slate-100">
                                                <h1 className="font-bold">{val.title}</h1>
                                                <Link to="/Blogs" >Read Now...</Link>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <h1 className="m-3 text-2xl font-semibold">Popular Blogs</h1>
                    <div className="flex justify-center flex-col items-center">
                        {
                            Data.splice(0, 3).map((val, index) => {
                                return (
                                    <>
                                        <div id={index} className="card w-[90%] m-2 shadow-md hover:shadow-gray-500 ">

                                            <div className="p-2 border-b-0 text-slate-300 hover:text-slate-100">
                                                <h1 className="font-bold">{val.title}</h1>
                                                <Link to="/Blogs" >Read Now...</Link>
                                            </div>

                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
