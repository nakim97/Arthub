import * as React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import apiClient from "../../services/apiClient";
import Navbar from "../Navbar/Navbar";

export default function Comments() {
  const { postId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [comment, setComment] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchCommentById = async () => {
      setIsLoading(true);
      try {
        const { data } = await apiClient.listCommentsWithPostId(postId);
        // console.log(data.posting)
        setComment(data.comments);
      } catch (err) {
        setError(err);
      }

      setIsLoading(false);
    };
    fetchCommentById();
  }, [postId]);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className="comments">
      <div className="title">
        <h2>Comments</h2>
      </div>

      <form
        onSubmit={handleSubmit(
          async (data) =>
            await apiClient.createComment({
              comment: data,
            })
        )}
      >
        <input
          type="text"
          placeholder="Comments"
          {...register("Comments", {})}
        />

        <input type="submit" />
      </form>
    </div>
  );
}

// import React from "react";

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: "" };
//   }
//   myChangeHandler = (event) => {
//     this.setState({ username: event.target.value });
//   };
//   render() {
//     return (
//       <form>
//         <h1>Hello {this.state.username}</h1>
//         <p>Comments:</p>
//         <input type="text" onChange={this.myChangeHandler} />
//       </form>
//     );
//   }
// }

// export default MyForm;
