import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    fetch("/api/shop").then((res) => console.log(res));
  });
  return <div>Welcome to the world of React</div>;
}
