import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBlog } from "../Utils/blogSlice";
import { nanoid } from "@reduxjs/toolkit";


function WriteBlogs() {

  const dispatch = useDispatch();
  const [val, setVal] = useState([{
    id : nanoid(),
    file : "",
    title : "",
    blog : ""
  }])

  const handleChange = (e) => {
    setVal({
      ...val,
      [e.target.name]: e.target.value
    })
    console.log("handel ok")
    console.log("Value : ",val)
  }
  
  const handleSubmit = () => {
    const blogId = { ...val, id: nanoid()}
    dispatch(addBlog(blogId))
    alert("Blog Added... Go to Your Blog...")
  }

  return (
    <>
      <div className="h-[80vh] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-center items-center flex-col">
        <form action="" onSubmit={handleSubmit}>
          <div className="flex w-[70vw] justify-between item-center">
            <input type="text" value={val.title} name="title" placeholder="Title" autoFocus={true} className="bg-transparent mx-2 w-[90%] text-3xl px-3 border-2 border-white rounded-md outline-none text-white cursor-pointer" onChange={handleChange}/>
            <button className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg">Publish</button>
          </div>
          <div>
            <textarea name="blog" id="writeBlog" placeholder="Tell your story...." type="text" value={val.blog}
            onChange={handleChange}
            className=" cursor-pointer mt-4 bg-transparent mx-2 w-[100%] h-[50vh] text-3xl border-2 border-white rounded-md outline-none text-white p-3"></textarea>
          </div>
        </form>
      </div>
    </>
  )
}

export default WriteBlogs
