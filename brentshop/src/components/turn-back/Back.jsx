import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Back = () => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("/");
      }}
      className="flex gap-2 justify-start rounded-lg items-center ml-5 mt-5 text-black hover:opacity-75"
    >
      <IoArrowBackCircleSharp className="w-6 h-6" />
      <button type="button"> Return to Home </button>
    </div>
  );
};

export default Back;
