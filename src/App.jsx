import './App.css'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Blogs from './components/Blogs'
import WriteBlogs from './components/WriteBlogs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BlogPage from './components/BlogPage'

function App() {

  return (
    <>
      <div className='h-[50vh] bg-[url("https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-[cover] bg-[center] flex justify-center items-center'>
        <h1 className='text-7xl  p-2 font-extrabold font-serif italic'> Lets Write a <span className='text-red-600'>Blog</span> ...</h1>
      </div>

      <Router>
        <NavbarComponent />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Write' element={<WriteBlogs />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/BlogPage' element={<BlogPage/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
