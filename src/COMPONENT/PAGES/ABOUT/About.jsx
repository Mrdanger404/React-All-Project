
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from "react"


const About = () => {

  

  useEffect(()=> {
    Aos.init({duration: 1000})
  },[])
  return (
    <div className='h-screen w-full flex bg-slate-500 items-center justify-center ' id="about" >
      <div className="bg-slate-200 py-10 px-5">
        <div className="text-center" data-aos="fade-up">
          <h1 className="font-bold text-3xl">About <span>Me</span></h1>
          <h1 className="text-2xl italic">Introduction</h1>
          
        </div>
        <div className="md:flex md:justify-center text-center m-10 ">
          
          <div className="sm:h-64 md:w-3/4 m-auto md:flex md:justify-center md:items-center " data-aos="fade-right">
            <img src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" alt="Tajbir" />
          </div>
          <div className="border-l-4 border-black"></div>
          <div className="m-10" data-aos="fade-left">
            <p className="font-Bebas text-xl sm:text-3xl" >I&apos;am a front-end web developer with a passion for crafting immersive and responsive user experiences. My goal is to join a dynamic team, learn, grow, and contribute to building user-centric web applications. I stay up-to-date with the latest web technologies through continuous learning and practice</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About