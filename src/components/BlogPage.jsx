import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeBlog } from '../Utils/blogSlice'


function BlogPage() {

  const cardData = useSelector((store) => store.blogs.card)
  console.log(cardData)

  const dispatch = useDispatch()
 

  return (
    <>

      <div className="h-[200vh] w-[100%] bg-gradient-to-tr from-zinc-600 to-zinc-950 flex justify-start items-center flex-col overflow-y-scroll no-scrollbar ">
        <h1 className='text-4xl m-5 text-white'>Your Blogs...</h1>
        <div className='w-[90%] h-[95%] flex justify-center items-start flex-wrap '>
          {
            cardData?.map((val, i) => {
              return (
                <>
                  <div id={i} className='text-white w-[90%] md:w-[40%] h-[70vh] m-2 border-none bg-black/15'>
                    {/* <span className='w-[100%] h-[50%] '>
                      <img src="/assets/images/img.jpg" alt="" className='w-[100%] h-[30vh]' />
                      {val.file}
                    </span> */}
                    <h1 className='text-4xl font-bold m-3 h-[15vh] overflow-y-scroll no-scrollbar'>{val.title}</h1>
                    <div className='overflow-y-scroll no-scrollbar h-[40vh]'>
                      <p className='mx-4'>{val.blog}</p>
                    </div>
                    <button className="text-white bg-red-500 px-3 ml-3 my-3 rounded-md p-1 hover:bg-red-700 text-lg"
                      onClick={() => dispatch(removeBlog(val.id))}>Delete Blog</button>
                  </div>
                </>
              )
            })
          }
        </div>

      </div>

    </>
  )
}

export default BlogPage
