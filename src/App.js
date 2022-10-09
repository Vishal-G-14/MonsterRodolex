// import React, { Component } from "react";
import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./Components/CardList/CardListComponent";
import SearchBox from "./Components/SearchBox/SearchBoxComponent";

// import logo from "./logo.svg";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState(monsters);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonster(newFilteredMonster);
  }, [monsters, searchField]);

  const searchFieldHandler = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();

    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster - Rodolex</h1>
      <SearchBox
        onSearchHandler={searchFieldHandler}
        placeholder="search-monsters"
        className="monster-search-box"
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};



// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField : ''
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) => {
//         return this.setState(
//           () => {
//             return { monsters: users };
//           }
//         );
//       });
//   }

//   searchFieldHandler = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();

//     this.setState(
//       () => {
//         return { searchField };
//       }
//     );
//   };

//   render() {

//     const {monsters , searchField} = this.state;
//     const {searchFieldHandler}  = this;

//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster - Rodolex</h1>
//         <SearchBox onSearchHandler={searchFieldHandler} placeholder='search-monsters' className="search-box"/>
//         <CardList monsters={filteredMonster} />
//       </div>
//     );
//   }
// }

export default App;
