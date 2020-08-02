import React from "react";
import { Box } from "common-cmp";
import { Navbar } from "../component/navbar";

export function Home() {
  return (
    <Box bg="#212">
      <Navbar />
      Welcome to the world of React
    </Box>
  );
}
