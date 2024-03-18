import React, { useState } from 'react';
import Link from '../Link/Link';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { RiMenu3Line } from "react-icons/ri";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [openMenu,setOpenMenu]=useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/products", name: "Products" }
    ];
      
    return (
        <nav className='text-center md:flex justify-between items-center'>
            <div className="logo">
                <a href="" className='capitalize text-2xl cursor-pointer font-bold'>demo<span className='text-white'>.reactNext</span></a>
            </div>
            <div className="navWrapper">
                <div className="menu justify-center relative">
                    <div onClick={()=> setOpenMenu(!openMenu)} className="md:hidden cursor-pointer flex justify-center">
                        
                        {
                            openMenu===true ? <RiMenu3Line className='text-2xl '/>:<IoMenu className='text-2xl '/>
                        }
                    </div>
                    <ul className={`md:flex lg:flex justify-center ${ openMenu ?'':'hidden' } bg-black md:bg-transparent p-4 md:p-0 md:w-auto w-1/3 rounded absolute md:static left-1/3 top-0 mt-12 md:m-0`}>
                        {
                            routes.map(route => <Link key={route.id} route={route}></Link>)
                        }   
                    </ul>
                </div>
            </div>
            
        </nav>
    );
};


export default Navbar;