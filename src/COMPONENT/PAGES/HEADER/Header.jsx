import TypeWriter from 'typewriter-effect'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

import { FaFacebook, FaSquareXTwitter, FaSquareInstagram, FaLinkedin, FaDownload } from "react-icons/fa6";
const Header = () => {
  
    useEffect(() => {
        Aos.init({duration: 1000})
    },[])
    
  return (
    <div className='bg-slate-400' id='home'>
        
        <div className="pt-20 sm:pt-0 h-screen sm:flex w-full items-center  sm:w-full sm:pl-10 sm:pr-10 md:w-[60%] sm:m-auto b">
            <div data-aos="fade-right" className="flex flex-col w-1/2  m-auto h-1/2 justify-center ">
                <div >
                    <h1 className="text-2xl">Hello, I&apos;m</h1>
                    <h1 className="text-3xl font-bold">Tajbir islam</h1>
                </div>
                <div>
                    <h1 className='mt-2 text-xl'>and I&apos;m a</h1>
                    <div className=' text-red-600 font-bold text-3xl'>
                        <TypeWriter 
                            options={{
                                strings: ["Web Developer" , "Content writer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                        
                    </div>
                    <div className='my-5'>
                        <p>I can Design pixel perfect websites using HTML, CSS, Tailwind css, Javascript, React js and Firebase</p>
                    </div>
                </div>
                <div className='flex'>
                    
                    <a href='#'><FaFacebook className='mx-1 h-10 w-10 transition hover:bg-orange-500 duration-500  border border-solid border-cyan-950 p-1'/></a>
                    <a href='#'><FaSquareXTwitter className='mx-1 h-10 w-10 transition hover:bg-orange-500 duration-500  border border-solid border-cyan-950 p-1'/></a>
                    <a href='#'><FaSquareInstagram className='mx-1 h-10 w-10 transition hover:bg-orange-500 duration-500  border border-solid border-cyan-950 p-1'/></a>
                    <a href='#'><FaLinkedin className='mx-1 h-10 w-10 border transition hover:bg-orange-500 duration-500  border-solid border-cyan-950 p-1'/></a>
                </div>
                <div className='my-5'>
                    <button className='border border-black rounded-lg font-semibold transition hover:bg-orange-500 duration-500 hover:text-white p-2 flex'>Download CV <FaDownload className=' h-6 mx-4' /> </button>
                </div>
            </div>
            <div data-aos="fade-left" className="w-1/2 m-auto p-10">
                <img src='https://cdn-icons-png.flaticon.com/512/4123/4123763.png' alt='Tajbir' />
            </div>
        </div>
    </div>
  )
}

export default Header