import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className="text-2xl font-bold text-red-500">Blind</div>
        <IoClose className="text-xl text-gray-700" onClick={onClose} />
      </div>
      <div className="p-4">
        <div className="text-gray-900 font-semibold">Account</div>
        <ul className="mt-2">
          <li className="text-gray-700 mt-2">Profile</li>
          <li className="text-gray-700 mt-2">Activity History</li>
          <li className="text-gray-700 mt-2">Bookmarks</li>
          <li className="text-gray-700 mt-2">Points</li>
          <li className="text-gray-700 mt-2">Reviews</li>
        </ul>
        <div className="text-gray-900 font-semibold mt-6">Community</div>
        <div className="text-gray-900 font-semibold mt-6">Resources</div>
        <div className="text-gray-900 font-semibold mt-6">Blind</div>
        <div className="text-gray-900 font-semibold mt-6">Support</div>
      </div>
      <div className="mt-auto p-4">
        <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg">Sign out</button>
        <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-2">Get app</button>
      </div>
    </div>
  );
}

export default Sidebar;
