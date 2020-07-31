import React, { useEffect } from "react";
import { Navbar } from "./components/navbar";

function App() {
  useEffect(() => {
    fetch("/api/shop").then((res) => console.log(res));
  });
  return (
    <div>
      <Navbar />
      React with tydfdfdfpescript
    </div>
  );
}

export default App;
