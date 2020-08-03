import React from "react";
import { Box } from "common-cmp";
import { Navbar } from "../component/navbar";
import { instance } from "../component/axios";

export function Home() {
  instance.get("/shop").then((res) => console.log(res));
  return (
    <Box>
      <Navbar />
      Welcome to the world of React
    </Box>
  );
}
