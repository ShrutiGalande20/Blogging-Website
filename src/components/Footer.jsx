import { useState } from "react";
import logo from "../assets/images/logo.png"
import { FaCopyright, FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

function Footer() {

  const [contact, setContact] =  useState([{
    name : "",
    email : "",
    message : ""
  }])

  const handleContact = () => {
    setContact({
      ...contact,
      [e.target.name] : e.target.value
    })
  }

  const submitContact = () =>{;

    alert("submited")
  }
  return (
    <>
      <div className="w-[100%] h-[80vh] md:h-[50vh] bg-zinc-900 px-[10%] text-white">
        <div className="flex justify-between p-4 flex-col md:flex-row">
          <img src={logo} alt="" className="h-[10vh] w-[12vh]" />
          <div className="md:w-[30%] md:flex-row flex justify-between cursor-pointer">
          <ul>
            <li className="text-xl mb-2 border-b-2 border-red-500 pb-1">Categories</li>
            <li className="hover:text-red-500">News</li>
            <li className="hover:text-red-500">World</li>
            <li className="hover:text-red-500">Games</li>
            <li className="hover:text-red-500">References</li>
          </ul>
          <ul>
            <li className="text-xl mb-2 border-b-2 border-red-500 w-16 pb-1">Apples</li>
            <li className="hover:text-red-500">Web</li>
            <li className="hover:text-red-500">eCommerce</li>
            <li className="hover:text-red-500">Business</li>
            <li className="hover:text-red-500">Entertainment</li>
          </ul>
          </div>

          <form action="https://formspree.io/f/xpwaalvr" method="POST">
            <h1 className="text-2xl font-semibold border-b-2 border-red-500 w-36">Get in touch</h1>
            <div className="flex flex-col">
              <input type="text" value={contact.name} id="name" placeholder="Enter your name..." required 
              onChange={handleContact}
              className="mt-4 border p-1 rounded-md  border-white bg-transparent cursor-pointer" />
              <input type="text" value={contact.email} id="email" placeholder="Enter your email..." required 
              onChange={handleContact}
              className="mt-2 border p-1 rounded-md  border-white bg-transparent cursor-pointer" />
              <textarea name="contact" value={contact.message} id="contactMessage" placeholder="Message here..." 
              onChange={handleContact}
              className="mt-2 border p-1 rounded-md  border-white bg-transparent cursor-pointer"></textarea>
              <button onClick={submitContact} className="text-white bg-red-500 px-3 rounded-md p-1 mt-2  hover:bg-red-700 text-lg">Send</button>
            </div>
          </form>
        </div>

        <hr/>
        
        <div className="flex justify-between items-center mt-5">
          <h1 className="flex items-center"><FaCopyright className="mr-2 cursor-pointer"/>Blogging-2024</h1>
          <ul className="flex">
            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl pb-1 p-2"><FaFacebook /></li>
            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl pb-1 p-2"><FaSquareInstagram /></li>
            <li className="cursor-pointer hover:text-red-700 hover:border-b-2 border-red-600 text-xl pb-1 p-2"><FaTwitter /></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Footer
