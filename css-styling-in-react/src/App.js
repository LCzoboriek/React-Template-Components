import React from 'react';

function App() {
  const [fruits, setFruits] = React.useState([
    { id: '1', name: 'Apple', isFavorite: false },
    { id: '2', name: 'Peach', isFavorite: true },
    { id: '3', name: 'Strawberry', isFavorite: false },
    { id: '4', name: 'Kiwis', isFavorite: false },
  ]);

  function handleClick(item) {
    //This function is called on the event handler on the buttons next to each listed item fromthe stateful array above
    const newFruits = fruits.map((fruit) => {
      //If the fruit.id of the button being clicked, matches the item.id of the fruit in the array
      //it changes the isFavorite attribute to be the opposite of what its current state is
      if (fruit.id === item.id) {
        return {
          id: fruit.id,
          name: fruit.name,
          isFavorite: !fruit.isFavorite,
        };
      } else {
        return fruit;
      }
    });

    setFruits(newFruits);
    //Then the object, newFruits, is now assigned as the updated state in the React usehook, updating the current state 
    // from the setFruits updater state, to the fruits current state
  }

  return (
    <div>
      <h3>with no styling</h3>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      {/* This program starts off by handling an onClick event handler
      and calls the function handleClick when the button is clicked */}
      <Basket items={fruits} onClick={handleClick} />
      
    </div>
  );
}

function Basket({ items, onClick }) {
  return (
    <ul>
      {/* This is simply mapping through the array, and outputting the content to the screen
      It also changes what is displayed on the screen using a ternary operator, if isFavorite is True
      it'll display Unlike on the button otherwise it'll show Like */}
      {items.map((item) => (
        <li key={item.id}>
          {/* You must always have an item key in lists on react, to keept track of stateful items correctly */}
          {item.name}
          <button type="button" onClick={() => onClick(item)}>
            {item.isFavorite ? 'Unlike' : 'Like'}
            {/* This button is a stateful button, onClick itll run the onClick passing up the prop item
            and then this changes the attribute of item.isFavorite from Like or Unlike */}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;