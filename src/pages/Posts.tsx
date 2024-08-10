import { useState } from "react";
import CreatePost from "../components/CreatePost";
import girl from "../assets/girl.png";
import man from "../assets/man.png";
import ViewPost from "../components/ViewPost";
import Modal from "../components/Modal";
import SignUpComponent from "../components/SignUpComponent";
import SignInComponent from "../components/SignInComponent";

const posts = [
  {
    name: "Theresa Webb",
    img: girl,
    time: 5,
    emoji: "👋",
    comments: 24,
    is_edited: false,
    post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    name: "Marvin McKinney",
    img: man,
    time: 8,
    emoji: "😞",
    comments: 20,
    is_edited: true,
    post: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

const Posts = () => {
  const [open, setOpen] = useState<boolean>(false);

  const onClose = () => setOpen(false);
  const onOpen = () => setOpen(true);

  const [activeModal, setActiveModal] = useState<string>("signup");
  const onSignUpOpen = () => setActiveModal("signup");
  const onLoginOpen = () => setActiveModal("login");
  return (
    <>
      <div className="font-inter p-2 flex flex-col justify-center items-center">
        <div className="w-full max-w-[700px] mt-9 mb-6">
          <div className="text-[1.75rem] text-[#C5C7CA]">Hello Jane</div>
          <div className="text-base text-[#7F8084] pr-32">
            How are you doing today? Would you like to share something with the
            community 🤗
          </div>
        </div>
        <div className="w-full max-w-[700px] space-y-3">
          <CreatePost onOpen={onOpen} />
          {posts?.map((post, index) => {
            return <ViewPost key={index} post={post} onOpen={onOpen} />;
          })}
        </div>
      </div>
      {activeModal == "signup" && (
        <Modal open={open} onClose={onClose} maxWidth={"490px"}>
          <SignUpComponent onLoginOpen={onLoginOpen} onClose={onClose} />
        </Modal>
      )}
      {activeModal == "login" && (
        <Modal open={open} onClose={onClose} maxWidth={"490px"}>
          <SignInComponent onSignUpOpen={onSignUpOpen} onClose={onClose} />
        </Modal>
      )}
    </>
  );
};

export default Posts;
