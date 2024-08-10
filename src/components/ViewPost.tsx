import React from "react";
import dots from "../assets/dots.png";
import comment from "../assets/comment.png";

interface Post {
  name: string;
  img: string;
  time: number;
  emoji: string;
  comments: number;
  is_edited: boolean;
  post: string;
}

interface ViewPostProps {
  post: Post;
  onOpen: () => void;
}

const ViewPost: React.FC<ViewPostProps> = ({ post, onOpen }) => {
  return (
    <div
      onClick={onOpen}
      className="bg-[#27292D] border-[#35373B] border-2 rounded-lg w-full max-w-[700px] px-5 py-6 space-y-3"
    >
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <img src={post.img} alt="" />
          <div className="pl-3">
            <div className="text-base text-[#C5C7CA]">{post.name}</div>
            <div className="text-sm text-[#7F8084]">{post.time}mins ago</div>
          </div>
        </div>
        <img src={dots} alt="dots" />
      </div>
      <div className="flex items-start bg-[#191920] p-4 rounded-lg">
        <div className="rounded-full p-4 bg-[#27292D]">{post.emoji}</div>
        <div className="text-[#7F8084] px-3 text-base">{post.post}</div>
      </div>
      <div className="flex items-center">
        <img src={comment} alt="comment" />
        <div className="pl-2 text-[#7F8084] text-sm">
          {post.comments} comments
        </div>
      </div>
    </div>
  );
};

export default ViewPost;
