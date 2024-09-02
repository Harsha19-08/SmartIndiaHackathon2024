import React, { useState } from 'react';
import Header from '../pages/Header';
const MentorCard = ({ name, title, description, image }) => (
  <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={`${name}'s profile`} className="w-24 h-24 rounded-full mb-4 object-cover" />
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">{title}</p>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

const Mentorship = () => {
  const [search, setSearch] = useState('');

  const mentors = [
    {
      name: 'Jane Doe',
      title: 'Senior Developer',
      description: 'Expert in frontend development with over 10 years of experience.',
      image: 'https://via.placeholder.com/100',
    },
    {
      name: 'John Smith',
      title: 'UX Designer',
      description: 'Passionate UX designer with a focus on user-centered design.',
      image: 'https://via.placeholder.com/100',
    },
    // Add more mentor objects as needed
  ];

  const filteredMentors = mentors.filter(mentor =>
    mentor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <Header/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Mentorship Programs</h1>
      <input
        type="text"
        placeholder="Search Mentors"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 p-2 border border-gray-300 rounded-lg w-full md:w-1/2"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor, index) => (
          <MentorCard key={index} {...mentor} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Mentorship;
