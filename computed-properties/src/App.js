import React from "react";

function App() {
  const [list, setList] = React.useState([
    { id: "1", name: "Apple", count: 5 },
    { id: "2", name: "Banana", count: 3 },
    { id: "3", name: "Peach", count: 10 },
  ]);

  return (
    <div>
      <h1>Computed Properties in React</h1>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>:<span>{item.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
