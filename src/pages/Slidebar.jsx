import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';

function Sidebar({ isOpen, onClose }) {
  const [communityOpen, setCommunityOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [blindOpen, setBlindOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

//get userinfo
const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get("/get-user", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    if(response.data && response.data.user){
      setUserInfo(response.data.user);
    }

  } catch (err) {
    console.log("Error occurred:", err);
    if(err.response && err.response.status === 401){
      localStorage.clear();
      navigate("/login");
    } else {
      setError("An error occurred while fetching user info. Please try again later.");
    }
  }
};
useEffect(() => {
  getUserInfo();
}, []);
const handleLogout = async () => {
  try {
    localStorage.clear();
    navigate("/login");
  } catch (error) {
    console.log("Logout error:", error);
   
  }
};

  return (
    <>
      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="text-2xl font-bold text-red-500">Alumini | Connect</div>
          <IoClose className="text-xl text-gray-700 cursor-pointer" onClick={onClose} />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between text-gray-900 font-semibold">
            Account
          </div>
          <ul className="mt-2">
            <li className="text-gray-700 mt-2">Profile</li>
            <li className="text-gray-700 mt-2">Activity History</li>
            <li className="text-gray-700 mt-2">Bookmarks</li>
            <li className="text-gray-700 mt-2">Points</li>
            <li className="text-gray-700 mt-2">Reviews</li>
          </ul>

          {/* Community Section with Dropdown */}
          <div
            className="flex items-center justify-between text-gray-900 font-semibold mt-6 cursor-pointer"
            onClick={() => setCommunityOpen(!communityOpen)}
          >
            Community
            <FaChevronDown
              className={`transform transition-transform ${
                communityOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          {communityOpen && (
            <ul className="mt-2">
              <li className="text-gray-700 mt-2">Groups</li>
              <li className="text-gray-700 mt-2">Events</li>
              {/* Add more options as needed */}
            </ul>
          )}

          {/* Resources Section with Dropdown */}
          <div
            className="flex items-center justify-between text-gray-900 font-semibold mt-6 cursor-pointer"
            onClick={() => setResourcesOpen(!resourcesOpen)}
          >
            Resources
            <FaChevronDown
              className={`transform transition-transform ${
                resourcesOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          {resourcesOpen && (
            <ul className="mt-2">
              <li className="text-gray-700 mt-2">Guides</li>
              <li className="text-gray-700 mt-2">Help Center</li>
              {/* Add more options as needed */}
            </ul>
          )}

          {/* Blind Section with Dropdown */}
          <div
            className="flex items-center justify-between text-gray-900 font-semibold mt-6 cursor-pointer"
            onClick={() => setBlindOpen(!blindOpen)}
          >
            Blind
            <FaChevronDown
              className={`transform transition-transform ${
                blindOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          {blindOpen && (
            <ul className="mt-2">
              <li className="text-gray-700 mt-2">About</li>
              <li className="text-gray-700 mt-2">Contact</li>
              {/* Add more options as needed */}
            </ul>
          )}

          {/* Support Section with Dropdown */}
          <div
            className="flex items-center justify-between text-gray-900 font-semibold mt-6 cursor-pointer"
            onClick={() => setSupportOpen(!supportOpen)}
          >
            Support
            <FaChevronDown
              className={`transform transition-transform ${
                supportOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
          {supportOpen && (
            <ul className="mt-2">
              <li className="text-gray-700 mt-2">FAQ</li>
              <li className="text-gray-700 mt-2">Contact Us</li>
              {/* Add more options as needed */}
            </ul>
          )}
        </div>
        <div className="mt-auto p-4">
          <button className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg cursor-pointer" onClick={handleLogout} >Sign out</button>
          <button className="w-full bg-red-500 text-white py-2 rounded-lg mt-2">Get app</button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
