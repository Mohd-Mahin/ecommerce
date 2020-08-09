import React, { useState } from "react";
import { Flex, Box } from "common-cmp";
import { withNabar } from "../../component/hoc/withNavbar";
import { ajaxUtis } from "../../component/axios";
import styled from "@emotion/styled";
import { useRouter } from "../../component/context/router";

const Root = styled(Flex)({
  flex: 1,
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "input, textarea": {
    display: "block",
    marginBottom: 20,
    width: 400,
    padding: 10,
    border: "none",
  },
});

const SubmitBtn = styled.button({
  border: "none",
  width: 120,
  height: 36,
  background: "#0C8E43",
  color: "#fff",
});

function AddProduct() {
  const [productName, setProductName] = useState<null | string>(null);
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [productDescription, setProductDescription] = useState<null | string>(
    null
  );
  const { history } = useRouter();

  const clearInputState = () => {
    setProductDescription(null);
    setProductName(null);
    setProductPrice(null);
    history.push("/");
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    ajaxUtis
      .post("admin/add-product", {
        productName,
        productPrice,
        productDescription,
      })
      .then(clearInputState);
  };

  return (
    <Root>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setProductName(evt.currentTarget.value)
          }
          value={productName}
          placeholder="Enter Product's Name"
        />
        <textarea
          onChange={(evt: React.ChangeEvent<HTMLTextAreaElement>) =>
            setProductDescription(evt.currentTarget.value)
          }
          value={productDescription}
          placeholder="Enter Product's Description"
          rows={10}
        />
        <input
          type="number"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setProductPrice(parseInt(evt.currentTarget.value))
          }
          value={productPrice}
          placeholder="Enter Product's Price"
        />
        <SubmitBtn type="submit">Submit</SubmitBtn>
      </form>
    </Root>
  );
}

export default withNabar(AddProduct);
