import React from "react";
import "./App.css";
import useExpanded from "./CompoundComponentsPattern/hooks/useExpanded";
import useEffectAfterMount from "./CompoundComponentsPattern/hooks/useEffectAfterMount";
import Icon from "./CompoundComponentsPattern/expandableComponent/Icon";
import Header from "./CompoundComponentsPattern/expandableComponent/Header";
import Body from "./CompoundComponentsPattern/expandableComponent/Body";
import { longText as TermsAndConditionText } from "./CompoundComponentsPattern/utils/constants";

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

  const { expanded, toggle, resetDep, reset } = useExpanded(true);
  useEffectAfterMount(() => {
    console.log("reset cleanup in progress!!!!");
  }, [resetDep]);

  return (
    <section className="App">
      <div className="Expandable">
        <Header toggle={toggle}> Terms and Conditions </Header>
        <Icon expanded={expanded} />
        <Body expanded={expanded}>
          {TermsAndConditionText}
          <button onClick={reset}>reset</button>
        </Body>
      </div>
    </section>
  );
}

export default App;
