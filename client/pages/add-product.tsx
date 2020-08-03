import React, { useState } from "react";
import { Flex, Box } from "common-cmp";
import { Navbar } from "../component/navbar";
import { instance } from "../component/axios";

export function AddProduct() {
  const [text, setText] = useState("");

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    instance
      .post("shop/add-product", {
        prodName: text,
      })
      .then(() => {
        setText("");
      });
  };

  return (
    <Box>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
            setText(evt.currentTarget.value)
          }
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}
