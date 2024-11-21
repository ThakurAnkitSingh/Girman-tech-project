import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between">
      <img
          src="https://girmantech.com/Logo2.svg"
          alt="Girman Logo"
          className="navbar__logo-img"
        />
      <div className="flex items-center text-lg space-x-4">
        <a href="https://girmantech.com" target="_blank" rel="noopener noreferrer">
          Website
        </a>
        <a
          href="https://linkedin.com/company/girman-technologies"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href="mailto:contact@girmantech.com">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;