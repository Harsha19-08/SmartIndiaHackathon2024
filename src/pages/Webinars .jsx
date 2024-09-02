import React from 'react';
import Header from '../pages/Header';

const WebinarCard = ({ title, date, time, description, registerLink }) => (
  <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-2">{date} at {time}</p>
    <p className="text-gray-700 mb-4">{description}</p>
    <a href={registerLink} className="text-blue-500 hover:underline">
      Register Now
    </a>
  </div>
);

const Webinars = () => {
  const webinars = [
    {
      title: 'Web Development Trends 2024',
      date: 'Sept 15, 2024',
      time: '10:00 AM',
      description: 'Learn about the latest trends in web development and how to stay ahead.',
      registerLink: '#',
    },
    {
      title: 'UX/UI Design Best Practices',
      date: 'Oct 1, 2024',
      time: '2:00 PM',
      description: 'Discover best practices for designing user-friendly interfaces.',
      registerLink: '#',
    },
    // Add more webinar objects as needed
  ];

  return (
    <>
    <Header/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Upcoming Webinars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {webinars.map((webinar, index) => (
          <WebinarCard key={index} {...webinar} />
        ))}
      </div>
    </div>
    </>
  );
};

export default Webinars;
