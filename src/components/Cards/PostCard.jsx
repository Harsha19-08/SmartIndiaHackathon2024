import { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { MdPoll } from 'react-icons/md';

function PostCard({ category, company, title, content, time, isPoll, images }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLiked, setLiked] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    // Handle option clicks here
    console.log(option);
    setDropdownOpen(false);
  };

  const toggleLike = () => {
    setLiked(!isLiked);
  };

  return (
    <div className="relative p-4 bg-white shadow-md rounded-lg mb-4 w-full">
      <div className="flex justify-between items-center mb-2">
        <div className="text-gray-500 text-sm">{category} - {company}</div>
        <button onClick={toggleDropdown} className="text-gray-500">
          <FiMoreHorizontal />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
            <ul className="list-none p-2">
              <li onClick={() => handleOptionClick('Share with')} className="p-2 hover:bg-gray-100 cursor-pointer">
                <span className="inline-block mr-2">🔗</span> Share with
              </li>
              <li onClick={() => handleOptionClick('Copy link')} className="p-2 hover:bg-gray-100 cursor-pointer">
                <span className="inline-block mr-2">📋</span> Copy link
              </li>
              <li onClick={() => handleOptionClick('Embed post')} className="p-2 hover:bg-gray-100 cursor-pointer">
                <span className="inline-block mr-2">🔲</span> Embed post
              </li>
              <li onClick={() => handleOptionClick('Report post')} className="p-2 hover:bg-gray-100 cursor-pointer">
                <span className="inline-block mr-2">🚨</span> Report post
              </li>
              <li onClick={() => handleOptionClick('Block posts from the user')} className="p-2 hover:bg-gray-100 cursor-pointer">
                <span className="inline-block mr-2">🚫</span> Block posts from the user
              </li>
            </ul>
          </div>
        )}
      </div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      {images && images.length > 0 && (
        <div className="mt-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Post image ${index + 1}`} className="w-full h-auto rounded-md mb-2" />
          ))}
        </div>
      )}
      {isPoll && (
        <div className="flex items-center mt-4 p-2 bg-gray-100 rounded-lg">
          <MdPoll className="text-red-500 mr-2" />
          <div className="text-sm text-gray-600">Poll | 3 Participants</div>
        </div>
      )}
      <div className="flex justify-between items-center mt-4">
        <div className="text-gray-500 text-sm">{time}</div>
        <div className="flex items-center space-x-2">
          <button onClick={toggleLike} className="text-xl">
            <AiOutlineHeart className={`transition-colors duration-300 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
          </button>
          <AiOutlineComment className="text-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
