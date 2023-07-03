import React from "react";
import Expandable from "./CompoundComponentsPattern/expandableComponent/Expandable";

function App() {
  return (
    <Expandable onExpand={() => {}}>
      <Expandable.Header style={{ color: "red" }}>
        React hooks
      </Expandable.Header>
      <Expandable.Icon />
      <Expandable.Body>Hooks are awesome</Expandable.Body>
    </Expandable>
  );
}

export default App;
