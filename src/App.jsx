import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import PostDetail from './components/Cards/PostDetail';
import Mentorship from './pages/Mentorship';
import Webinars from './pages/Webinars ';
import TechExperiences from './pages/TechExperiences ';
import AllChannels from './pages/AllChannels';
import CreatePostPage from './pages/CreatePostPage';
const routes =(
  <Router>
   <Routes>
    <Route path="/dashboard" element={<Home/>}/>
    <Route path="/post/:id" element={<PostDetail />} />
    <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/webinars" element={<Webinars />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/experiences" element={<TechExperiences />} />
          <Route path="/all-channels" element={<AllChannels/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<SignUp/>}/>
   </Routes>
 </Router>
);
const App = () => {
  return (
    <div>
      {routes}
    </div>
  )
}

export default App