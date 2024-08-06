import { useState } from "react"

function Contact() {

  const [contact, setContact] =  useState([{
    name : "",
    email : "",
    subject : "",
    message : ""
  }])

  const handleContact = () => {
    setContact({
      ...contact,
      [e.target.name] : e.target.value
    })
  }

  const submitContact = () =>{
    alert("submited")
  }

  return (
    <>
      <div className="h-[120vh] w-[100%] bg-[url('https://images.unsplash.com/photo-1712162730378-4c74d4de6275?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-[center] flex justify-center items-center flex-col">
        <div className="flex justify-center items-center flex-col w-[90%] md:w-[50%] h-[90%] md:h-[80%] bg-white rounded-md backdrop-filter backdrop-blur-lg bg-opacity-10">
          <h1 className="text-3xl text-white font-bold">Contact Us</h1>
          <p className="text-white w-[80%] md:w-[70%] text-center pt-5">Got a question? We'd love to hear from you. Send a message and we'll respond as soon as possible.</p>
          <form action="https://formspree.io/f/xpwaalvr" method="POST" className="flex flex-col w-[75%] md:w-[60%]">
            <label htmlFor="name" className="text-white py-1 pt-5">Name<sup>*</sup></label>
            <input type="text" value={contact.name} name="name" id="name" required 
            onChange={handleContact}
            className="rounded-md p-2 outline-none"/>

            <label htmlFor="email" className="text-white py-1 pt-5">Email<sup>*</sup></label>
            <input type="email" value={contact.email} name="email" id="email" required 
            onChange={handleContact}
            className="rounded-md p-2 outline-none"/>

            <label htmlFor="subject" className="text-white py-1 pt-5">Subject</label>
            <input type="text" value={contact.subject} name="subject" id="subject" required 
            onChange={handleContact}
            className="rounded-md p-2 outline-none"/>

            <label htmlFor="message" className="text-white py-1 pt-5">Message</label>
            <textarea name="message" value={contact.message} id="message"required 
            onChange={handleContact}
            className="rounded-md p-2 outline-none no-scrollbar h-[20vh]"></textarea>

            <button onClick={submitContact} className="text-white bg-red-500 px-3 rounded-md p-1 hover:bg-red-700 text-lg mt-5">Send Message</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
