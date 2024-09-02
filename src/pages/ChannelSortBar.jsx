import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';


function ChannelSortBar() {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handler functions for button clicks
  const handleNavigation = (path) => {
    navigate(path);
  };
  
    return (
      <div className="flex justify-between items-center p-4 bg-gray-100 shadow-inner">
         
      <div className="flex space-x-4">
      <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-semibold hover:bg-gray-200" onClick={() => handleNavigation('/all-channels')}>
        All Channels
      </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-semibold hover:bg-gray-200"   onClick={() => handleNavigation('/mentorship')} >
          Mentorship
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-semibold hover:bg-gray-200"   onClick={() => handleNavigation('/webinars')}>
          Webinars
        </button>
        <button className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-semibold hover:bg-gray-200"           onClick={() => handleNavigation('/experiences')}>
          Tech Experiences
        </button>
      </div>
      <div className="flex items-center space-x-2">
      <span className="text-sm font-medium text-gray-700">Sort by:</span>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-between items-center rounded-lg bg-white px-3 py-2 text-sm font-medium text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2  transition ease-in-out duration-150">
            Hot
            <MdKeyboardArrowDown className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
          </MenuButton>
        </div>

        <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  Hot
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  New
                </a>
              )}
            </MenuItem>
            <MenuItem>
              {({ active }) => (
                <a
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                  }`}
                >
                  Top
                </a>
              )}
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
      </div>
    );
  }
  
  export default ChannelSortBar;
  