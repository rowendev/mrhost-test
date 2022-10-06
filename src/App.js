import { useState } from "react";
import Hotels from "./components/Hotels";
import Filter from "./components/Filter";

function App() {
  const [tags, setTags] = useState([]);
  return (
    <>
      <div className="container">
        <Filter setTags={setTags} />
        <Hotels tags={tags} />
      </div>
    </>
  );
}

export default App;
