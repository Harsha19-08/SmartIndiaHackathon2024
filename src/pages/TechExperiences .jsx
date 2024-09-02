import React from 'react';
import Header from '../pages/Header';

const ExperienceCard = ({ title, author, date, content }) => (
  <div className="border rounded-lg p-4 shadow-md">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-gray-600">by {author} on {date}</p>
    <p className="text-gray-700 mt-2">{content}</p>
  </div>
);

const TechExperiences = () => {
  return (
    <>
    <Header/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tech Experiences</h1>
      <div className="space-y-4">
        <ExperienceCard
          title="My Journey Learning React"
          author="Alice Johnson"
          date="Aug 20, 2024"
          content="I started learning React a year ago, and it has been an incredible journey. Here are some of the things I've learned and tips for beginners."
        />
        <ExperienceCard
          title="Challenges in Backend Development"
          author="Bob Lee"
          date="Sept 5, 2024"
          content="Backend development presents its own set of challenges. In this post, I'll share some of the common issues and how I tackled them."
        />
        <ExperienceCard
          title="Exploring Machine Learning"
          author="Charlie Brown"
          date="Sept 15, 2024"
          content="Machine Learning is a fascinating field with endless possibilities. Here’s my experience with implementing various ML algorithms and their practical applications."
        />
        <ExperienceCard
          title="Transitioning to DevOps"
          author="Dana Smith"
          date="Oct 1, 2024"
          content="Transitioning to a DevOps role has been challenging yet rewarding. I discuss the tools and practices that have helped me integrate development and operations."
        />
        <ExperienceCard
          title="Building Scalable Web Applications"
          author="Eve Davis"
          date="Oct 10, 2024"
          content="Scalability is crucial for modern web applications. In this article, I share my experience with designing and implementing scalable systems."
        />
        {/* Add more ExperienceCard components as needed */}
      </div>
    </div>
    </>
  );
};

export default TechExperiences;
