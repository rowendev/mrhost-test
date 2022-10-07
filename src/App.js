import { useState } from "react";
import Hotels from "./components/Hotels";
import Filter from "./components/Filter";
import CheckPC from "./components/CheckPC";

function App() {
  const [conditions, setConditions] = useState([]);
  return (
    <>
      {/* <div className="container">
        <Filter setTags={setTags} />
        <Hotels tags={tags} />
      </div> */}
      <div className="container">
        {/* lifting state up to App.js */}
        <CheckPC setConditions={setConditions} />
        {/* passing state as prop to Hotels.js */}
        <Hotels conditions={conditions} />
      </div>
    </>
  );
}

export default App;
