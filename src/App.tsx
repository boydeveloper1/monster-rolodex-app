// import { Component } from "react"; This is Unique to Class Component

// import logo from "./logo.svg";
// import CardList from "./components/card-list/card-list.component"
// import SearchBox from "./components/search-box/search-box.component"
// import './App.css';

// THIS IS A CLASS COMPONENT
// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: ""
//     };
//   }

//   // This Life cycle method is basically used to call the API and thus set the state of the APP
//   // When react mounts the component to the dom. This only happens once. Esp when fetch from an API
//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       // Code ln 18 is being passed to code ln 19
//       .then((response) => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       }
//       )
//       );
//   }

//   // This method initializes once, when our class comp initializes. This is called on the input fild
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {

//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     });

//     return (
//       <div className="App" >
//         <h1 className="app-title">Adetayo's First React App</h1>
//         {/* Imported Component  */}
//         <SearchBox onChangeHandler={onSearchChange} placeholder="Search Monsters" className="monsters-search-box" />

//         {/* Imported Component   */}
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

// This is a functional Component
import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchField, setSearchField] = useState(""); //[value, setValue] // STATE
  const [monsters, setMonsters] = useState<Monster[]>([]); // STATE
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log("Rendered");

  // This function only calls when the app mounts. That's why nothing was passed in the array to prevent refiring.
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   // Code ln 18 is being passed to code ln 19
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Begin a Search</h1>
      <p className="para">You can search for your favorite monsters easily</p>
      {/* Imported Component  */}

      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />

      {/* Imported Component   */}
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
