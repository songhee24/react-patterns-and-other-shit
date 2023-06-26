import React from "react";
import Expandable from "./CompoundComponentsPattern/expandableComponent/Expandable";
import "./App.css";

const information = [
  {
    header: "Why everyone should live forever",
    note: "This is highly sensitive information ... !!!!",
  },
  {
    header: "The internet disappears",
    note: "I just uncovered the biggest threat...",
  },
  {
    header: "The truth about Elon musk and Mars!",
    note: "Nobody tells you this...",
  },
];

function App() {
  return (
    <div className="App">
      {information.map(({ header, note }, index) => (
        <Expandable key={index} onExpand={() => {}}>
          <Expandable.Header style={{ color: "red", border: "1px solid teal" }}>
            {header}
          </Expandable.Header>
          <Expandable.Icon />
          <Expandable.Body>{note}</Expandable.Body>
        </Expandable>
      ))}
    </div>
  );
}

export default App;
