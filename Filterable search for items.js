import * as React from "react";

const App = () => {
  const foodList = [
    {
      name: "Teriyaki Chicken",
      price: 14.99,
      objectID: 0,
    },
    {
      name: "Curried Vegetables",
      price: 13.99,
      objectID: 1,
    },
    {
      name: "Francencinha",
      price: 5.99,
      objectID: 2,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedItems = foodList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Greeting isLoggedIn={false} />
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedItems} />
    </div>
  );
};

const Search = (props) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={props.onSearch}></input>
  </div>
);

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>{props.item.name}</span>
  </li>
);

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function GuestGreeting(props) {
  return (
    <div>
      <p>Placeholder for guest greeting</p>
    </div>
  );
}

function UserGreeting(props) {
  return (
    <div>
      <p> Welcome back, {props.name}</p>
    </div>
  );
}

// const App = () => {
//   const [toggle, setToggle] = React.useState(true);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   return <Toggler toggle={toggle} onToggle={handleToggle} />;
// };

// const Toggler = ({ toggle, onToggle }) => {
//   return (
//     <div>
//       <button type="button" onClick={onToggle}>
//         Toggle
//       </button>

//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };

// const Toggler = ({ toggle, onToggle }) => {
//   React.useEffect(() => {
//     console.log("I run on ever render: mount and update.");
//   });

//   return (
//     <div>
//       <button type="button" onClick={onToggle}>
//         Toggle
//       </button>
//       {toggle && <div>Hello React</div>}
//     </div>
//   );
// };

export default App;
