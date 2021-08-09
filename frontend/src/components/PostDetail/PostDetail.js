import "./PostDetail.css";
import Navbar from "../Navbar/Navbar";
import { usePostDetail } from "../../hooks/usePostDetail";

export default function PostDetail({ user, handleOnLogout, term, setTerm }) {
  const {renderPostContent} = usePostDetail({user})

  return (
    <div className="user">
      <Navbar
        user={user}
        handleOnLogout={handleOnLogout}
        term={term}
        setTerm={setTerm}
      />
      {renderPostContent()}
    </div>
  );
}
