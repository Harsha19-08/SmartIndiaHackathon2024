import { CgAdd } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
function StartPostBar() {


  const navigate = useNavigate();
  const handleStartPost = () => {
    navigate("/create-post");
  }
    return (
      <div className="p-4 bg-white shadow-md flex items-center">
        <button className="bg-gray-100 text-sm font-semibold px-4 py-2 rounded-lg w-full flex items-center" onClick={handleStartPost}>
  <CgAdd size={22} className="text-primary mr-2 cursor-pointer" />
  Start a post...
</button>

      </div>
    );
  }
  
  export default StartPostBar;
  