import React, { useRef } from "react";
import "./App.css";
import useExpanded from "./hooks/useExpanded";
import useEffectAfterMount from "./hooks/useEffectAfterMount";
import Icon from "./expandableComponent/Icon";
import Header from "./expandableComponent/Header";
import Body from "./expandableComponent/Body";

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
  const hasViewedSecret = useRef(false); // 👈 initial value i
  const {
    expanded,
    toggle,
    reset,
    resetDep = 0,
    override,
  } = useExpanded(false, appReducer);
  useEffectAfterMount(() => {
    window.open("https://leanpub.com/reintroducing-react", "_blank");
    hasViewedSecret.current = true;
  }, [resetDep]);

  function appReducer(
    currentInternalState: any,
    action: { internalChanges: any; type?: string }
  ) {
    if (
      hasViewedSecret.current &&
      action.type === useExpanded.types.toggleExpand
    ) {
      return {
        ...action.internalChanges,
        expanded: false,
      };
    }

    return action.internalChanges;
  }

  return (
    <section className="App">
      <div className="Expandable">
        <Header toggle={toggle}> Terms and Conditions </Header>
        <Icon expanded={expanded} />
        <Body expanded={expanded}>
          <p>
            Click to view the conspiracy <br />
            <button onClick={reset}> View secret </button>
          </p>
        </Body>
      </div>
      {hasViewedSecret.current && (
        <button onClick={override}>Be redeemed to view secret again</button>
      )}
    </section>
  );
}

export default App;
