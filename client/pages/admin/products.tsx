import React, { useEffect, useState, useContext } from "react";
import { Box } from "common-cmp";
import { withNabar } from "../../component/hoc/withNavbar";
import { ajaxUtis } from "../../component/axios";
import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import { Theme } from "../../component/context/theme";
import { Spacer } from "common-cmp";
import { FlexWrap } from "common-cmp";
import { Flex } from "common-cmp";

const Root = styled(Box)({});
const ProductCard = styled(Box)({
  borderRadius: 5,
  boxSizing: "border-box",
});
const Button = styled.button(
  {
    width: 90,
    height: 30,
    borderRadius: 5,
    outline: "inherit",
    "&:hover": {
      background: "#fff",
    },
    "&:focus": {
      background: "#fff",
    },
  },
  (props) => ({
    marginRight: props.mr || 0,
    border: `2px solid ${props.border}`,
    color: props.border,
  })
);

interface IProducts {
  id: string;
  name: string;
  description: string;
  price: number;
}

function Products() {
  const [products, setProducts] = useState<null | AxiosResponse<IProducts[]>>(
    null
  );
  const theme = useContext(Theme);
  useEffect(() => {
    ajaxUtis
      .get("/shop/products")
      .then((res: AxiosResponse<IProducts[]>) => setProducts(res));
  }, []);

  const onEdit = () => {};

  const onDelete = (id: string) => {
    ajaxUtis.post(`/product/delete/${id}`);
  };

  const renderProducts = () =>
    products.data.map((product, index) => (
      <ProductCard
        key={index}
        width="31%"
        mx={3}
        my={3}
        p={3}
        bg={theme.card.bg}
      >
        <Box color={theme.card.header} fontWeight={700} fontSize="18px">
          {product.name}
        </Box>
        <Box color={theme.card.font}>{product.description}</Box>
        <Box color={theme.card.font}>{product.price}</Box>
        <Spacer mb={3} />
        <Flex flex={1} justifyContent="center">
          <Button mr={15} border={theme.dark} onClick={onEdit}>
            Edit
          </Button>
          <Button border="#BD0D0D" onClick={() => onDelete(product.id)}>
            Delete
          </Button>
        </Flex>
      </ProductCard>
    ));

  return (
    <Root>
      <Box fontSize={4} color={theme.dark} fontWeight={700} my={3} ml={3}>
        All Products
      </Box>
      <Spacer mb={3} />
      <FlexWrap>{products && renderProducts()}</FlexWrap>
    </Root>
  );
}

export default withNabar(Products);
