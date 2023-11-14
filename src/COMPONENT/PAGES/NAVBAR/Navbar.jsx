import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"






const Navbar = () => {
  
 const [menu, setMenu] = useState(false);

 useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 640) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  };

  handleResize();

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize)
  }
 },[])

  return (
    <>
    

    <div className="bg-slate-400 ">
      <nav className=" bg-slate-500 shadow sm:flex sm:items-center sm:justify-between rounded-b-3xl  sm:w-full " data-aos="fade-down">
        <div className="flex justify-between items-center p-5">
          <span className="text-4xl">Tajbir</span>

          <span className="cursor-pointer sm:hidden block " onClick={()=> setMenu(!menu)}>
            {menu ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faBarsStaggered} />}
          </span>
          
        </div>
        {menu && (
          <ul className="bg-slate-500 rounded-b-3xl sm:rounded-none sm:border-none sm:flex sm:items-center  sm:z-auto sm:static sm:bg-transparent w-full left-0 sm:w-auto py-4 sm:py-0 pl-7 sm:pl-0 relative opacity-100 top[-400px] transition-all ease-in duration-500 flex flex-col sm:flex-row items-center "  data-aos="fade-down">
            <li className="mx-4 my-4 sm:my-0">
              <a href="#home" className="text-xl p-2 transition hover:border-b-2 rounded-md sm:border-none hover:text-cyan-50 duration-500 focus:text-cyan-50">Home</a>
            </li>
            <li className="mx-4 my-4 sm:my-0">
              <a href="#about" className="text-xl p-2 transition hover:border-b-2 rounded-md sm:border-none hover:text-cyan-50 duration-500 focus:text-cyan-50">About</a>
            </li>
            <li className="mx-4 my-4 sm:my-0">
              <a href="#skill" className="text-xl p-2 transition hover:border-b-2 rounded-md sm:border-none hover:text-cyan-50 duration-500 focus:text-cyan-50">Skills</a>
            </li>
            <li className="mx-4 my-4 sm:my-0">
              <a href="#project" className="text-xl p-2 transition hover:border-b-2 rounded-md sm:border-none hover:text-cyan-50 duration-500 focus:text-cyan-50">Project</a>
            </li>
            <li className="mx-4 my-4 sm:my-0">
              <a href="#contact" className="text-xl p-2 transition hover:border-b-2 rounded-md sm:border-non hover:text-cyan-50 duration-500 focus:text-cyan-50">Contact</a>
            </li>
          
        </ul>
        )}
      </nav>
    </div>

    </>
  )
}

export default Navbar