import { useNavigate } from "react-router-dom";

export const useCommunityNavbar = ({ forumTerm, setForumTerm }) => {
  const navigate = useNavigate();
  // This redirects to the search page to display the posts
  const handleFormSubmit = async () => {
    navigate("/forumsearch");
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(forumTerm);
  };

  const handleChange = (event) => {
    setForumTerm(event.target.value);
  };

  return {
    handleSubmit,
    handleChange,
  };
};
