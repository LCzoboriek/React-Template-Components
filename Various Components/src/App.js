import "./App.css";
import * as React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
const idOne = uuidv4();
const idTwo = uuidv4();
const initialList = [
  {
    id: "a",
    dishName: "Chicken",
    price: 15,
  },
  {
    id: "b",
    dishName: "Vegetables",
    price: 14,
  },
  {
    id: "c",
    dishName: "Prawns",
    price: 17,
  },
];
let users = {
  [idOne]: {
    id: "1",
    firstName: "Robin",
    lastName: "Wieruch",
    isDeveloper: true,
  },
  [idTwo]: {
    id: "2",
    firstName: "Dave",
    lastName: "Davidds",
    isDeveloper: false,
  },
};

const getUsers = () =>
  new Promise((resolve, reject) => {
    if (!users) {
      return setTimeout(() => reject(new Error("No users found")), 250);
    }
    setTimeout(() => resolve(Object.values(users)), 250);
  });

// usage (1)
getUsers()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// usage (2)
const doGetUsers = async () => {
  try {
    const result = await getUsers();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

doGetUsers();
const result = getUsers();
console.log(result);

let initialBasket = [{}];
const App = () => {
  function handleAdd(event) {
    const name = event.target.itemName;
    const value = event.target.itemValue;
    console.log(name);
    initialBasket.push({ name, value, id: uuidv4() });
    console.log(initialBasket);
  }
  const onSubmit = (username) => console.log(username);
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);
  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };
  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };
  const [food, setFood] = React.useState("fruit");
  const [drink, setDrink] = React.useState("water");
  const handleFoodChange = (event) => {
    setFood(event.target.value);
  };
  const handleDrinkChange = (event) => {
    setDrink(event.target.value);
  };
  const [count, setCount] = React.useState(0);
  const [isOpen, setOpen] = React.useState(false);
  const handleClick2 = () => {
    setOpen(!isOpen);
  };
  const handleClick = () => {
    setCount(count + 1);
    console.log(count);
  };

  //Return statements below for divs and rendered content
  return (
    <div>
      <Counter></Counter>
      <UsernameForm onSubmit={onSubmit} />
      <Checkbox label="Value 1" value={checkedOne} onChange={handleChangeOne} />
      <br />
      <br />
      <Checkbox label="Value 2" value={checkedTwo} onChange={handleChangeTwo} />
      <br />
      <br />
      <Dropdown
        label="What do we eat?"
        options={[
          { label: "Fruit", value: "fruit" },
          { label: "Vegetable", value: "vegetable" },
          { label: "Meat", value: "meat" },
        ]}
        value={food}
        onChange={handleFoodChange}
      />
      <br />
      <br />
      <Dropdown
        label="What do we drink?"
        options={[
          { label: "Water", value: "water" },
          { label: "Beer", value: "beer" },
          { label: "Wine", value: "wine" },
        ]}
        value={drink}
        onChange={handleDrinkChange}
      />
      <br />
      <p>We eat {food}!</p>
      <br />
      <p>We drink {drink}!</p>

      <Button onClick={handleClick}>Increase amount</Button>
      <br />
      {count}
      <br />
      <Button onClick={handleClick2}>Submit2</Button>

      {isOpen && <div>You Submitted Your Order!</div>}
      {/* The above statement is a true or false checker, if isOpen is true, itll display this div, if not it wont display */}
      <br />
      <label>
        <input type="radio" /> Cat
      </label>
      <ul>
        {initialList.map((item) => (
          <li key={item.id}>
            {item.dishName}
            <button
              type="button"
              itemName={item.dishName}
              itemValue={item.price}
              onClick={handleAdd}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
      <p>Basket below</p>
      <Basket />
    </div>
  );
};
const Basket = () => {
  return (
    <ul>
      {initialBasket.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};
const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <label>
      {label}
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
};

const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  );
};

const UsernameForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");
  return (
    <Form
      onSubmit={(event) => {
        onSubmit(username);
        event.preventDefault();
      }}
    >
      <InputField value={username} onChange={setUsername}>
        Your name:
      </InputField>

      <Button type="submit">Send</Button>
      {/* The children properties being sent are the type of submit and the send text */}
    </Form>
  );
};

const Form = ({ onSubmit, children }) => (
  <form onSubmit={onSubmit}>{children}</form>
);

const Button = ({ onClick, type = "button", children }) => (
  <button type={type} onClick={onClick}>
    {children}
  </button>
);

const InputField = ({ value, onChange, children }) => (
  <label>
    {children}
    <input
      type="text"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  </label>
);

function Counter() {
  const hasClickedButton = React.useRef(false);
  const [count, setCount] = React.useState(0);

  function onClick() {
    const newCount = count + 1;
    setCount(newCount);
    hasClickedButton.current = true;
  }

  console.log("Has clicked button" + hasClickedButton.current);
  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={onClick}>
        Increase
      </button>
    </div>
  );
}
export default App;

// These components add a checkbox component that is controlled by useState react hooks, with its initial state being updated by the
// updater state, this is called from the handleChangeone and two, where it will set the updated state to whatever the opposite is of its current
//state is, this is then rendered onto the screen in the return statement, which has a event listener for onChange, which will point to the function\
//depending on what checkbox you click like below
// {
//   /* <Checkbox
//         label="Value 1"
//         value={checkedOne}
//         onChange={handleChangeOne}
//       />
//       <Checkbox
//         label="Value 2"
//         value={checkedTwo}
//         onChange={handleChangeTwo}
//       /> */
// }
// The dropdown works in a similar way, you have the value of the dropdown initially set as the intial state food, then on change, it'll run the
// handleFoodChange function, which is an event handler, which then runs setFood, with a value of the target itself. This updates the updated state
// which then automatically updates and re renders the initial state and starts again.
// We have nested objects contained as the options, with labels and values, this way the value gets carried over, and we can then use that later on
// This will re render the <p> statements below
