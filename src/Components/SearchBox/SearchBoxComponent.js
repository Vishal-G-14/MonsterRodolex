// import React, {Component} from "react";
import "./SearchBoxStyles.css";

const SearchBox = (props) => {
  const { className, placeholder, onSearchHandler } = props;
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onSearchHandler}
    />
  );
};

// class SearchBox extends Component{

//     render(){
//         return(
//             <input
//             className={this.props.className}
//             type="search"
//             placeholder={this.props.placeholder}
//             onChange={this.props.onSearchHandler}
//           />
//         )
//     }
// }

export default SearchBox;
