// Packages
import { useState } from 'react';

// Components
import ActiveLink from '../active_link';

// Icons
import Hamburger from '../icons/hamburger';
import HamburgerClose from '../icons/x';

const SideBar = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="md:flex md:w-full h-screen">
      <div className="flex flex-col w-full md:w-56 text-white bg-black">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between h-auto">
          <a
            href="#"
            className="text-xl font-semibold tracking-widest text-white uppercase rounded-lg focus:outline-none focus:shadow-outline"
          >
            Coamed
          </a>
          <button
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={() => setOpen(!isOpen)}
          >
            {isOpen ? <HamburgerClose /> : <Hamburger />}
          </button>
        </div>
        <nav
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:block px-4 pb-4 md:pb-0`}
        >
          <ActiveLink href="/">Home</ActiveLink>
          <ActiveLink href="/contact">Contact</ActiveLink>
          <ActiveLink href="/about">About</ActiveLink>
        </nav>
      </div>
      <div className="flex-1 flex">
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default SideBar;