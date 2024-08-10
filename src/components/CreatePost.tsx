import React from "react";
import sms from "../assets/sms.png";

interface CreatePostProps {
  onOpen: () => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onOpen }) => {
  const handleInputClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={onOpen}
      className="bg-[#27292D] border-[#35373B] border-2 rounded-lg w-full max-w-[700px] px-5 py-6 space-y-3"
    >
      <div className="text-lg text-[#C5C7CA]">Create Post</div>
      <div className="flex bg-[#191920] p-3 rounded-lg">
        <div className="rounded-full bg-[#27292D] p-4">
          <img src={sms} alt="sms" />
        </div>
        <input
          onClick={handleInputClick}
          type="text"
          className="bg-[#191920] text-base placeholder-[#7F8084] text-[#C5C7CA] px-4 w-full focus:outline-none"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="flex justify-end items-center">
        <button className="bg-[#4A96FF] text-white px-9 py-2 rounded">
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
