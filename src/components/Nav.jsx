import React, { useState } from "react";
import { ChevronDown, ChevronUp, Menu, MoveRightIcon, X } from "lucide-react";
const navLinks = [
  { title: "Products", links: ["Product 1", "Product 2", "Product 3"] },
  { title: "Solutions", links: ["Solution 1", "Solution 2", "Solution 3"] },
  { title: "Services", links: ["Service 1", "Service 2", "Service 3"] },
  { title: "Help Center", links: ["FAQ", "Support", "Contact"] },
  { title: "Pricing", links: ["Basic", "Pro", "Enterprise"] },
]
const Navbar = () => {

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
  <div className="w-full">
      <nav className="bg-white  max-w-[1280px] mx-auto text-black p-4 shadow-2xs shadow-zinc-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
       
        <div className="font-bold text-2xl">magnifico</div>
        
        
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X className="text-black text-2xl" />
            ) : (
              <Menu className="text-black text-2xl" />
            )}
          </button>
        </div>

      
        <div className="hidden lg:flex items-center gap-1">
          <ul className="flex gap-6 text-[15px] font-semibold">
            {navLinks.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center gap-2"
                >
                  <span>{menu.title}</span>
                  <span>
                    {openDropdown === menu.title ? (
                      <ChevronUp className="transition-all w-5 h-5"/>
                    ) : (
                      <ChevronDown  className="transition-all w-5 h-5"/>
                    )}
                  </span>
                </button>
                
                {openDropdown === menu.title && (
                  <ul className="absolute left-0 mt-2 bg-white text-black p-3 rounded-lg shadow-lg w-40">
                    {menu.links.map((link, i) => (
                      <li key={i} className="py-2 hover:text-red-600">{link}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
   
        
        </div>
        <div className="lg:flex hidden   gap-2">
            <button className="hover:bg-blue-500 flex gap-2  hover:text-white px-4 py-3 rounded-lg text-[18px] font-bold ">Log In</button>
            <button className="bg-blue-500 flex gap-2 text-white px-4 py-3 rounded-lg">Sign Up Free 
              <MoveRightIcon/>
            </button>
          </div>
      </div>

      
      {isMobileMenuOpen && (
        <div className="md:hidden text-center absolute top-16 left-0 right-0 bg-white text-black p-4 shadow-lg">
          <ul className="space-y-4">
            {navLinks.map((menu, index) => (
              <li key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(menu.title)}
                  className="flex items-center justify-between w-full py-2"
                >
                  <span>{menu.title}</span>
                  <span>
                    {openDropdown === menu.title ? (
                      <ChevronUp className="transition-all w-5 h-5" />
                    ) : (
                      <ChevronDown className="transition-all w-5 h-5" />
                    )}
                  </span>
                </button>
             
                {openDropdown === menu.title && (
                  <ul className="bg-white text-black p-3 rounded-lg shadow-lg w-full mt-2">
                    {menu.links.map((link, i) => (
                      <li key={i} className="py-2 hover:bg-gray-200">{link}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
      
          <div className="flex flex-col space-y-2 mt-4">
            <button className="hover:bg-blue-500 flex justify-center items-center gap-2 hover:text-white px-4 py-3 rounded-lg">Log In</button>
            <button className="bg-blue-500 flex gap-5 justify-center text-white px-4 py-2 rounded-lg">Sign Up Free
              <MoveRightIcon/>
            </button>
          </div>
        </div>
      )}
    </nav>
  </div>
  );
};

export default Navbar;
