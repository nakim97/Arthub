import * as React from "react";
import { useForm } from "react-hook-form";

export default function Comments() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  return (
    <div className="comments">
      <div className="title">
        <h2>Comments</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
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
