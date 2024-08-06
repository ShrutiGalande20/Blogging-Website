import React from 'react'
import Cards from "./Cards"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useState } from "react";
import Data from "./Data.js"


function Blogs() {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBlogs = Data.filter(blogData =>
    blogData.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blogData.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blogData.author.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
      <div className="h-[auto] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-center items-center flex-col">
        <h1 className="text-4xl m-5 text-white">There are some latest blogs for you ....</h1>
        <div className="flex mb-12 relative">
          
          <input type="text" placeholder="Search here..."
            className="cursor-pointer bg-transparent border-2 border-white rounded-md p-1 text-white outline-none md:w-[20vw]"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="absolute right-0">
            <FaMagnifyingGlass className="text-white text-2xl m-2 font-bold" />
          </button>

        </div>
        
        <div className="flex justify-center items-center flex-wrap w-[85%] gap-3">

          <Cards blogs={filteredBlogs} />

        </div>
      </div>
    </>
  )
}

export default Blogs
