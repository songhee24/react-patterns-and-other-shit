import { Button } from "./UI/Button";

export default function App() {
  return (
    <div>
      <Button size={"large"} variant={"text"}>
        Hello world
      </Button>
      <hr />
      <Button>Hello world</Button>
      <hr />
      <Button size={"small"} variant={"outlined"}>
        Hello world
      </Button>
    </div>
  );
}
