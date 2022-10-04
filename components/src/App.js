import "./App.css";
import * as React from "react";

const App = () => {
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
  return (
    <div>
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
    </div>
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
