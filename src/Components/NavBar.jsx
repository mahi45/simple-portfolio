const NavBar = () => {
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl w-full font-bold text-[#00df9a]">REACT</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resource</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
