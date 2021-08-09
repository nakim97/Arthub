import "./UserDetail.css";
import Navbar from "../Navbar/Navbar";
import { useUserDetail } from "../../hooks/useUserDetail";


export default function UserDetail({ user, handleOnLogout, term, setTerm }) {
  const {renderPostContent} = useUserDetail({user})

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
