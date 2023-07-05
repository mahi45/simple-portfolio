import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl w-full font-bold text-[#00df9a]">REACT</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? (
          <AiOutlineClose size={20}></AiOutlineClose>
        ) : (
          <AiOutlineMenu size={20}></AiOutlineMenu>
        )}
      </div>
      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="text-3xl w-full font-bold text-[#00df9a] p-4 ">REACT</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resource</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
