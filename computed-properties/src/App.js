import React from "react";
import sortBy from "lodash.sortby";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = React.useState("");
  const [list, setList] = React.useState([
    { id: "1", name: "Apple", count: 5 },
    { id: "2", name: "Banana", count: 3 },
    { id: "3", name: "Peach", count: 10 },
  ]);
  const [basket, setBasket] = React.useState("");

  const [sort, setSort] = React.useState("name");

  function handleSortName() {
    setSort("name");
  }
  function handleSortCount() {
    setSort("count");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newItem = {
      id: uuidv4(),
      name: name,
      count: 0,
    };
    const newList = list.concat(newItem);
    setList(newList);
  }
  function handleAddToBasket(event) {
    const newItem = {
      id: uuidv4(),
      name: event.target.value,
    };
    const newBasketItem = basket.concat(newItem);
    setBasket(newBasketItem);
  }
  //Computed property
  const sortedList = sortBy(list, sort);

  //These callback handlers that are called from the buttons
  //update the useState at the top, by updating the state based on what sortBy is set to
  //one which is set to sort by count and the other is set to sortby name
  //we do however need an explicit sorting state to handle this in case we want to add more dynamic
  //sorting like double clicking to sort in reverse, normally id however do this with a drop down box, which would be easier
  return (
    <div>
      <h1>Computed Properties in React</h1>

      <div>
        <input type="text" value={name} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <button type="button" onClick={handleSortName}>
        Sort by name
      </button>
      <button type="button" onClick={handleSortCount}>
        Sort by count
      </button>
      <ul>
        {sortedList.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>:<span>{item.count}</span>
            <button type="button" value={item.name} onClick={handleAddToBasket}>
              Add to Basket
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
