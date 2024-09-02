import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePostPage = ({ onAddPost }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useNavigate();

  const topics = ["Technology", "Career Advice", "Product Management", "Others"];

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setIsModalOpen(false);
  };

  const handleCreatePost = () => {
    const newPost = {
      category: selectedTopic,
      company: "Anonymous", // Or use a dynamic value
      title: title,
      content: content,
      time: new Date().toLocaleString(),
      isPoll: false, // Set based on your UI
      images: [] // Add images if needed
    };
    onAddPost(newPost);
    history('/dashboard');
  };

  const handleCancelPost = () => {
    history('/dashboard');
  };

  return (
    <div className="p-6">
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Post To:</h2>
            <div className="space-y-2">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => handleTopicSelect(topic)}
                  className="w-full bg-gray-100 p-3 rounded-lg hover:bg-gray-200"
                >
                  {topic}
                </button>
              ))}
              <button
                onClick={() => handleTopicSelect("Custom Topic")}
                className="w-full bg-blue-100 p-3 rounded-lg hover:bg-blue-200"
              >
                Choose My Own Topic
              </button>
            </div>
          </div>
        </div>
      )}

      {!isModalOpen && (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Write a Post</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select a Channel</label>
            <select className="w-full border border-gray-300 p-2 rounded-lg">
              <option>General</option>
              <option>Tech Discussions</option>
              <option>Career Advice</option>
              <option>Product Management</option>
              {/* Add more channels as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Write a Specific Title</label>
            <input
              type="text"
              placeholder="Enter a title for your post"
              className="w-full border border-gray-300 p-2 rounded-lg"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Start a Conversation</label>
            <textarea
              placeholder="Keep it classy. No personal information or trade secrets."
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows="6"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input type="checkbox" id="hideCollegeName" className="mr-2" />
            <label htmlFor="hideCollegeName" className="text-gray-700">Hide College Name</label>
          </div>
          <div className="flex space-x-4 items-center mb-6">
            <button className="flex items-center bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
              <span className="mr-2">📊</span> Create a Poll
            </button>
            <button className="flex items-center bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
              <span className="mr-2">📷</span> Add Images
            </button>
            <button className="flex items-center bg-gray-200 p-2 rounded-lg hover:bg-gray-300">
              <span className="mr-2">@</span> Tag Someone
            </button>
          </div>
          <div className="flex justify-between">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={handleCancelPost}
            >
              Cancel
            </button>
            <button
              onClick={handleCreatePost}
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200"
            >
              Post
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePostPage;
