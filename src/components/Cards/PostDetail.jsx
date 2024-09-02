import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineHeart, AiOutlineComment } from 'react-icons/ai';
import { MdPoll } from 'react-icons/md';
import Header from '../../pages/Header';

const posts = [
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm5VnIxkFaHMfuz2StK8ZSxBdsXSxGJTCo1A&s",
      "https://s3.amazonaws.com/images.seroundtable.com/google-paint-brusges-1531914263.jpg"
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
      "https://img.etimg.com/thumb/width-1200,height-1200,imgsize-2684551,resizemode-75,msid-111858704/news/india/microsoft-outage-it-ministry-issues-advisory-says-problem-related-to-recent-update-in-product.jpg",
      "https://i.ytimg.com/vi/vlHnAlqVAkA/sddefault.jpg?v=6345fa30"
    ],
    comments: ["Very insightful!", "Microsoft is awesome!"]
  },
];

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const [comments, setComments] = useState(post ? post.comments : []);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment.trim()]);
      setNewComment('');
    }
  };

  if (!post) return <p>Post not found!</p>;

  return (
    <>
    <Header/>
    <div className="max-w-3xl mx-auto mt-8">
      <div className="p-4 bg-white shadow-md rounded-lg mb-4 w-full">
        <div className="flex justify-between items-center mb-2">
          <div className="text-gray-500 text-sm">{post.category} - {post.company}</div>
        </div>
        <h2 className="font-bold text-lg">{post.title}</h2>
        <p className="text-gray-700 mt-2">{post.content}</p>
        {post.images && post.images.length > 0 && (
          <div className="mt-4">
            {post.images.map((image, index) => (
              <img key={index} src={image} alt={`Post image ${index + 1}`} className="w-full h-auto rounded-md mb-2" />
            ))}
          </div>
        )}
        {post.isPoll && (
          <div className="flex items-center mt-4 p-2 bg-gray-100 rounded-lg">
            <MdPoll className="text-red-500 mr-2" />
            <div className="text-sm text-gray-600">Poll | 3 Participants</div>
          </div>
        )}
        <div className="flex justify-between items-center mt-4">
          <div className="text-gray-500 text-sm">{post.time}</div>
          <div className="flex items-center space-x-2">
            <AiOutlineHeart className="text-gray-500 text-xl" />
            <AiOutlineComment className="text-gray-500 text-xl" />
          </div>
        </div>
      </div>
      <div className="p-4 bg-white shadow-md rounded-lg w-full mt-4">
        <h3 className="text-lg font-semibold">Comments</h3>
        <div className="mt-2">
          {comments.length === 0 && <p>No comments yet.</p>}
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p>{comment}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex">
          <input
            type="text"
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
          <button
            onClick={handleCommentSubmit}
            className="ml-2 bg-primary text-white rounded-lg p-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default PostDetail;
