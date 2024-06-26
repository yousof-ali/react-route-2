import { NavLink, Outlet, useNavigation } from "react-router-dom";
import "./Navbar.css"
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Footer from "../footer/Footer";

const Navbar = () => {
    const loder = useNavigation()

    const [click,setClick]=useState(false);
    const setClk = ()=>{
        setClick(!click)
    }
    return (
       <div>
          <nav className="bg-gray-300 py-4 md:py-0">
            <div className="container mx-auto">
                <div className="md:flex justify-between items-center ">
                    <div className="flex items-center gap-4">
                        <div onClick={setClk} className="md:hidden icons">
                            {
                                click === true ? <IoMdMenu /> : <RxCross2 />

                            }
                            
                        </div>
                        <h1 className="text-3xl">My web</h1>
                    </div>
                    <ul className={`flex flex-col md:flex-row gap-4 font-semibold md:right-0 absolute duration-1000 md:static ${click ? '-left-60':"left-4 bg-gray-300 p-6 rounded-xl"} `}>
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink to={"posts"}>Posts</NavLink>
                        <NavLink to={"albums"}>Albums</NavLink>
                        <NavLink to={"todos"}>Todos</NavLink>
                        <NavLink to={"users"}>Users</NavLink>
                    </ul>
                </div>
                
            </div>
          </nav>
          {
            loder.state === "loading"?<p className="text-center"><span className="loading loading-spinner loading-lg"></span></p> : <Outlet></Outlet>
          }
          
          <Footer></Footer>
         
       </div>
        
    );
};

export default Navbar;