import "./ForumDetail.css";
import Navbar from "../Navbar/Navbar";
import { useForumDetail } from "../../hooks/useForumDetail";
/*
 - Fragment tags as return only returns one thing <> </> */
export default function ForumDetail({ user, handleOnLogout, term, setTerm }) {
  const { renderPostContent } = useForumDetail({ user });

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
