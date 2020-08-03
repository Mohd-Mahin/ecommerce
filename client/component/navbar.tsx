import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box } from "common-cmp";
import styled from "@emotion/styled";

const Root = styled(Flex)({
  a: {
    textDecoration: "none",
  },
});

export function Navbar() {
  return (
    <Root alignItems="center" bg="#0f0" width={1}>
      <Box m={3}>
        <Link to="/">Home</Link>
      </Box>
      <Box m={3}>
        <Link to="/product">Product</Link>
      </Box>
    </Root>
  );
}
