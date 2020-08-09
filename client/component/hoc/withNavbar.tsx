import React, { useContext } from "react";
import { NavLink as Link } from "react-router-dom";
import { Flex, Box } from "common-cmp";
import styled from "@emotion/styled";
import { Theme } from "../context/theme";

const Root = styled(Flex)({
  flexDirection: "column",
  a: {
    textDecoration: "none",
    color: "#fff",
  },
  ".wrapper-func-style": {
    overflow: "auto",
    boxSizing: "border-box",
    height: "calc(100vh - 60px)",
  },
});

export function withNabar(Wrapper: React.FunctionComponent) {
  return function (props: any) {
    const theme = useContext(Theme);

    return (
      <Root>
        <Flex alignItems="center" bg={theme.dark} width={1} height="60px">
          <Box p={3}>
            <Link exact activeStyle={{ fontWeight: 700 }} to="/">
              Home
            </Link>
          </Box>
          <Box p={3}>
            <Link exact activeStyle={{ fontWeight: 700 }} to="/shop/products">
              Products
            </Link>
          </Box>
          <Box p={3}>
            <Link exact activeStyle={{ fontWeight: 700 }} to="/shop/order">
              Order
            </Link>
          </Box>
          <Box p={3}>
            <Link
              exact
              activeStyle={{ fontWeight: 700 }}
              to="/admin/add-product"
            >
              Add-Product
            </Link>
          </Box>
          <Box p={3}>
            <Link exact activeStyle={{ fontWeight: 700 }} to="/admin/products">
              Admin Products
            </Link>
          </Box>
        </Flex>
        <Flex
          flexDirection="column"
          className="wrapper-func-style"
          bg={theme.light}
        >
          <Wrapper {...props} />
        </Flex>
      </Root>
    );
  };
}
