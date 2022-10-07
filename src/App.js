import { useState } from "react";
import Hotels from "./components/Hotels";
import Filter from "./components/Filter";

function App() {
  const [conditions, setConditions] = useState([]);
  return (
    <>
      <div className="container">
        {/* lifting state up to App.js */}
        <Filter setConditions={setConditions} />
        {/* passing state as prop to Hotels.js */}
        <Hotels conditions={conditions} />
      </div>
    </>
  );
}

export default App;
