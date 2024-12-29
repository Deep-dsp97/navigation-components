import Button from "./Button";
import { GoBell } from "react-icons/go";

function App() {
  return (
    <>
      <div><Button primary rounded className="mb-5"> <GoBell/>Hello There!!</Button></div>
      <div><Button secondary>C</Button></div>
      <div><Button success>A</Button></div>
      <div><Button warning outline className="mb-5">D</Button></div>
      <div><Button danger>A</Button></div>
    </>
  );
}

export default App;
