import { useState } from 'react';
import PostCard from '../components/Cards/PostCard';


function Feed() {
  const [posts, setPosts] = useState([
    {
      category: "Misc.",
      company: "Amazon",
      title: "Traffic lawyer in CA",
      content: "I received a speeding ticket on the SF-LA route...",
      time: "Just now",
      isPoll: false
    },
    {
      category: "Software Engineering Career",
      company: "Notion",
      title: "Swe at private tech company or MBB consultant (NEW GRAD)",
      content: "I recently got an offer to be a consultant at BCG...",
      time: "4m",
      isPoll: true
    },


    {
      category: "Alumni Experience",
      company: "Google",
      title: "My Journey at Google",
      content: "Sharing my experience working as a software engineer at Google...",
      time: "Just now",
      isPoll: false,
      images: [
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202404/social-media-113816380-16x9_0.jpeg?VersionId=xuAs5nCQyMj.sm0H7sXdZnJDdmRN0Yse",
        "https://upload.wikimedia.org/wikipedia/en/3/33/Silicon_valley_title.png"
      ]
    },
    {
      category: "Alumni Experience",
      company: "Microsoft",
      title: "Life at Microsoft",
      content: "Reflecting on my time as a product manager at Microsoft...",
      time: "10m",
      isPoll: true,
      images: [
        "https://cdn.ndtv.com/tech/images/microsoft_logo_outside_redmond_headquaters_ap.jpg",
        "https://example.com/microsoft-image2.jpg"
      ]
    },

    {
      id: 1,
      category: "Misc.",
      company: "Amazon",
      title: "Traffic lawyer in CA",
      content: "I received a speeding ticket on the SF-LA route...",
      time: "Just now",
      isPoll: false,
      images: [],
      comments: ["Great post!", "Thanks for sharing!"]
    },
    {
      id: 2,
      category: "Software Engineering Career",
      company: "Notion",
      title: "Swe at private tech company or MBB consultant (NEW GRAD)",
      content: "I recently got an offer to be a consultant at BCG...",
      time: "4m",
      isPoll: true,
      images: [],
      comments: ["Very insightful!", "Loved it!"]
    },
    {
      id: 3,
      category: "Alumni Experience",
      company: "Google",
      title: "My Journey at Google",
      content: "Sharing my experience working as a software engineer at Google...",
      time: "Just now",
      isPoll: false,
      images: [
        "https://s3.amazonaws.com/images.seroundtable.com/google-paint-brusges-1531914263.jpg",
        "https://searchengineland.com/wp-content/seloads/2016/03/google-photos-images1-ss-1920.jpg"
      ],
      comments: ["Amazing experience!", "Google is great!"]
    },
    {
      id: 4,
      category: "Alumni Experience",
      company: "Microsoft",
      title: "Life at Microsoft",
      content: "Reflecting on my time as a product manager at Microsoft...",
      time: "10m",
      isPoll: true,
      images: [
        "https://i.ytimg.com/vi/vlHnAlqVAkA/sddefault.jpg?v=6345fa30",
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-174586,resizemode-75,msid-111890424/tech/technology/microsoft-says-about-8-5-million-of-its-devices-affected-by-crowdstrike-related-outage.jpg"
      ],
      comments: ["Very insightful!", "Microsoft is awesome!"]
    },
    // Add more posts as necessary
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      
      {posts.map((post, index) => (
        <PostCard
          key={index}
          category={post.category}
          company={post.company}
          title={post.title}
          content={post.content}
          time={post.time}
          isPoll={post.isPoll}
          images={post.images}
        />
      ))}
    </div>
  );
}

export default Feed;
