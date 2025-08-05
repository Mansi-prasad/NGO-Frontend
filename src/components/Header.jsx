import { useState } from "react";
import { Link } from "react-scroll";
import { IoReorderThreeOutline } from "react-icons/io5";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-8 md:px-20 py-4">
        <h1 className=" text-blue-800 text-2xl font-bold hover:cursor-pointer">
          NGO
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-lg font-semibold">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-blue-900 hover:cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-900 hover:cursor-pointer"
          >
            About Us
          </Link>
          <Link
            to="volunteerform"
            smooth={true}
            duration={500}
            className="hover:text-blue-900 hover:cursor-pointer"
          >
            Volunteer
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-3xl  hover:cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <IoReorderThreeOutline />
        </button>
      </div>

      {/* Mobile Popup Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end items-start pt-6 mt-5">
          <div className="bg-white rounded-lg shadow-lg max-w-sm p-4 flex justify-between items-start w-[40%]">
            <nav className="flex flex-col space-y-3 text-lg font-semibold">
              <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
                Home
              </Link>
              <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
                About Us
              </Link>
              <Link
                to="volunteerform"
                smooth={true}
                duration={500}
                onClick={closeMenu}
              >
                Volunteer
              </Link>
            </nav>
            <div>
              <button
                onClick={closeMenu}
                className="px-3 py-1 rounded-full hover:bg-gray-500 hover:text-white hover:cursor-pointer"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
