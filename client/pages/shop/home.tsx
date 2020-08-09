import React, { useEffect, useState, useContext } from "react";
import { Box } from "common-cmp";
import { withNabar } from "../../component/hoc/withNavbar";
import { ajaxUtis } from "../../component/axios";
import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import { Theme } from "../../component/context/theme";
import { Spacer } from "common-cmp";
import { FlexWrap } from "common-cmp";

const Root = styled(Box)({});
const ProductCard = styled(Box)({
  borderRadius: 5,
  boxSizing: "border-box",
});

interface IProducts {
  name: string;
  description: string;
  price: number;
}

function Home() {
  const [products, setProducts] = useState<null | AxiosResponse<IProducts[]>>(
    null
  );
  const theme = useContext(Theme);
  useEffect(() => {
    ajaxUtis
      .get("/shop")
      .then((res: AxiosResponse<IProducts[]>) => setProducts(res));
  }, []);

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
      </ProductCard>
    ));

  return (
    <Root>
      <Box fontSize={4} color={theme.dark} fontWeight={700} my={3} ml={3}>
        Welcome To The Unique Online Shop
      </Box>
      <Spacer mb={3} />
      <FlexWrap>{products && renderProducts()}</FlexWrap>
    </Root>
  );
}

export default withNabar(Home);
