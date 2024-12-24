// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-blue-500 p-4 flex justify-between items-center text-white">
    <h1 className="text-lg font-bold">Fullstack Assessment</h1>
    <nav>
      <ul className="flex gap-4">
        <li><a href="#home" className="hover:underline">Home</a></li>
        <li><a href="#about" className="hover:underline">About</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
