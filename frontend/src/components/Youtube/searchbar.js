import "./searchbar.css";
import React, { useState } from "react";
export default function Searchbar (props) {
  const [term, setTerm] = useState(null)
 const handleSubmit = (event) => {
    event.preventDefault();
    props.handleFormSubmit(term);
  };
   const handleChange = (event) => {
    setTerm(event.target.value)
  };
  //   if(term === null) {
  //     return (
  //   <div className="noSearch">
  //     <p>Search for anything you want to learn...</p>
  //   </div>
  //     );
  // }
    return (
      <div className="search">
        {term===null && <div className="noSearch">
      <p>Search for anything you want to learn...</p>
    </div>}
        <form onSubmit={handleSubmit} className="form">
          <div className="field">
            <input
              onChange={handleChange}
              name="video-search"
              type="text"
              placeholder="Search.."
            />
          </div>
        </form>
      </div>
    );
}
// class Searchbar extends React.Component {
//   handleChange = (event) => {
//     this.setState({
//       term: event.target.value,
//     });
//   };
//   handleSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleFormSubmit(this.state.term);
//   };

//   if(event = null) {
//     <div className="noSearch">
//       <p>Search for anything you want lo learn...</p>
//     </div>;
//   }

//   render() {
//     return (
//       <div className="search">
//         <form onSubmit={this.handleSubmit} className="form">
//           <div className="field">
//             <input
//               onChange={this.handleChange}
//               name="video-search"
//               type="text"
//               placeholder="Search.."
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
// export default Searchbar;
