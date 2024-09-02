import React from 'react';
import Header from '../pages/Header';
const ChannelSection = ({ title, description, link }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a href={link} className="text-primary hover:underline">
        Explore {title}
      </a>
    </div>
  </div>
);

const AllChannels = () => {
  return (
    <>
    <Header/>
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">All Channels</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ChannelSection
          title="Announcements and News"
          description="Stay updated with the latest news and announcements from our alumni network."
          link="#"
        />
        <ChannelSection
          title="Discussion Forums"
          description="Join the conversation on various topics, ask questions, and share your knowledge."
          link="#"
        />
        <ChannelSection
          title="Events and Meetups"
          description="Find out about upcoming events, meetups, and reunions."
          link="#"
        />
        <ChannelSection
          title="Job Board"
          description="Explore job opportunities and internships posted by our alumni."
          link="#"
        />
        <ChannelSection
          title="Resources and Tools"
          description="Access valuable resources, tools, and guides to aid your professional development."
          link="#"
        />
        <ChannelSection
          title="Success Stories"
          description="Read inspiring stories of alumni achievements and successes."
          link="#"
        />
        <ChannelSection
          title="Mentorship Opportunities"
          description="Find or offer mentorship within our alumni network."
          link="#"
        />
        <ChannelSection
          title="Volunteer Opportunities"
          description="Get involved with volunteer opportunities and contribute to meaningful causes."
          link="#"
        />
        <ChannelSection
          title="Networking Opportunities"
          description="Connect with alumni who share similar interests or career goals."
          link="#"
        />
      </div>
    </div>
    </>
  );
};

export default AllChannels;
