import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../Header'
import Feed from '../Feed'
import ChannelSortBar from '../ChannelSortBar'
import StartPostBar from '../StartPostBar'
import Sidebar from '../Slidebar'

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
       {/* <Navbar/> */}
       <Header onMenuClick={handleMenuClick} />
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <ChannelSortBar />
      <StartPostBar />
      <div className="max-w-3xl mx-auto mt-8 px-4">
        <Feed />
      </div>
    </div>
  )
}

export default Home