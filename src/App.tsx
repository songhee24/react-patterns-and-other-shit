import React, { useState } from "react";
import Expandable from "./CompoundComponentsPattern/expandableComponent/Expandable";
import "./App.css";
import useExpanded from "./CompoundComponentsPattern/hooks/useExpanded";
import useEffectAfterMount from "./CompoundComponentsPattern/hooks/useEffectAfterMount";

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
  // const [activeIndex, setActiveIndex] = useState<number>(-1);
  // const onExpand = (evt: React.MouseEvent<HTMLElement>) =>
  //   setActiveIndex(+evt.currentTarget.dataset.index!);

  const customClickHandler = () => {
    console.log("custom click handler!!!!!");
  };

  const { expanded, getTogglerProps } = useExpanded();
  useEffectAfterMount(() => {
    // user can perform any side effect here 👇
    console.log("Yay! button was clicked!!");
  }, [expanded]);

  return (
    <div style={{ marginTop: "3rem" }}>
      <button
        {...getTogglerProps({
          id: "my-btn-id",
          "aria-label": "custom toggler",
          onClick: customClickHandler,
        })}
      >
        Click to view awesomeness...
      </button>
      {expanded ? <p>{"😎".repeat(50)}</p> : null}
    </div>
  );
}

export default App;
