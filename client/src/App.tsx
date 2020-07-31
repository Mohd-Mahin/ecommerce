import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/shop").then((res) => console.log(res));
  });
  return <div>React with tydfdfdfpescript</div>;
}

export default App;
