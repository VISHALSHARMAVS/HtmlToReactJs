import banner1 from '../assets/images/banner1.png';
import { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <header className="shadow md:w-full w-screen fixed z-50 top-0">
      <nav className="bg-[#53747e] border-gray-200 py-2.5 flex justify-start items-center">
        <div className="flex flex-wrap w-full px-4 justify-between mx-auto max-w-screen-xl">
          <img src={banner1} alt="logo" className="mr-3 hover:translate-y-[-2px] h-auto align-middle max-w-full cursor-pointer" />

        <div className="lg:hidden flex justify-center items-center ">
          <div className=" space-y-2"
          onClick={()=> setIsOpen((prev)=>!prev )}
          >
             <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>
          <div className={isOpen ? "showMenuNav":"hidden"}>
            <div className="px-8 py-8 " 
            onClick={()=> setIsOpen(false)}> 
<svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className=" flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">About Us</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">SimplyEnglish Web</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
        </div>




          <div className={`justify-end items-center p-2 lg:flex lg:w-auto ${isOpen ? '' : 'hidden'}`}>
            <ul className="flex flex-row font-medium lg:space-x-8">
              <li className="text-white block py-2 pr-4 pl-3 cursor-pointer duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:translate-y-[-2px]">
                About Us
              </li>
              <li className="text-white block py-2 pr-4 pl-3 cursor-pointer duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:translate-y-[-2px]">
                SimplyEnglish Web
              </li>
              <li className="text-white block py-2 pr-4 pl-3 cursor-pointer duration-200 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:translate-y-[-2px]">
                Blogs
              </li>
            </ul>
          </div>

          
        </div>
      </nav>
    </header>
  );
}

export default Header;



