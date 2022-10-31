import React from "react";
import sortBy from "lodash.sortby";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [name, setName] = React.useState("");
  const [list, setList] = React.useState([
    { id: uuidv4(), name: "Apple", price: 6, quantity: 1 },
    { id: uuidv4(), name: "Banana", price: 7, quantity: 1 },
    { id: uuidv4(), name: "Peach", price: 8, quantity: 1 },
  ]);
  const [basket, setBasket] = React.useState([]);

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
    const checkBasket = basket.find((item) => item.id === event.target.value);
    console.log(JSON.stringify(checkBasket));
    if (checkBasket !== undefined) {
      checkBasket.quantity++;
      setBasket(basket);
    } else {
      const matchedItem = list.filter((item) => item.id === event.target.value);
      const newItem = {
        ...matchedItem[0],
      };

      const newBasketItem = basket.concat(newItem);
      setBasket(newBasketItem);
    }
    console.log("im the basket log ");
    console.log(JSON.stringify(basket));
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
            <span>{item.name}</span>:<span>{item.count}</span>:
            <span>{item.price}</span>
            <button type="button" value={item.id} onClick={handleAddToBasket}>
              Add to Basket
            </button>
          </li>
        ))}
      </ul>
      <ul>
        <p>Basket Below: </p>
        {basket.map((item) => (
          <li key={item.id}>
            <span>{item.name} </span>
            <br />
            <span>Quantity: {item.quantity} </span>
            <span>Cost: {item.price}</span>
          </li>
        ))}
      </ul>
      <div>
        <p>Total Cost: </p>
      </div>
    </div>
  );
}

export default App;
