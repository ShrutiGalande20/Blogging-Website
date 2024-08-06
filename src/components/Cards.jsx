import { FaUser } from "react-icons/fa6";

function Cards({blogs}) {
    
    return (
        <>
            {
                blogs.map((val, index) => {
                    return (
                        <>
                            <div id={index} className="card w-64 m-2 shadow-md hover:shadow-gray-200 rounded-2xl">
                                <img src={val.image} alt="" className="h-1/2 border-t-1 rounded-t-2xl"/>

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

        </>
    )
}



export default Cards
