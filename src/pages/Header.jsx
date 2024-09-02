import { AiOutlineSearch, AiOutlineBell } from 'react-icons/ai';
import { FaBars, FaPencilAlt } from 'react-icons/fa';
import { useState } from 'react';
import logo1 from '../assets/4.png';
import {  useNavigate } from 'react-router-dom';

function Header({ onMenuClick }) {
  const navigate = useNavigate();
  const handleOnclick= () => {
    navigate('/dashboard');
  } 
  const handleCratePost = () => {
    navigate('/create-post');
  }
  
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-red-500 cursor-pointer" onClick={handleOnclick}>
      <img src={logo1} style={{ height: "70px",  }} alt="Logo" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-gray-100 rounded-lg px-2 py-1">
          <AiOutlineSearch className="text-gray-500" />
          <input type="text" placeholder="Search" className="ml-2 bg-transparent outline-none" />
        </div>
        <AiOutlineBell className="text-gray-500 text-2xl" />
        <FaPencilAlt className=" cursor-pointer text-gray-500 text-xl" onClick={handleCratePost}/>
        <FaBars className=" cursor-pointer text-xl text-gray-700" onClick={onMenuClick} />
      </div>
    </header>
  );
}

export default Header;
