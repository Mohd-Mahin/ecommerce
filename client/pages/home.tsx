import React, { useEffect, useState } from "react";
import { Navbar } from "../component/navbar";
import { instance } from "../component/axios";
import { Box } from "common-cmp";
import { AxiosResponse } from "axios";

export function Home() {
  const [shopData, setShopData] = useState<null | { title: string }[]>(null);
  useEffect(() => {
    instance.get("/shop").then((res: AxiosResponse) => setShopData(res.data));
  }, []);
  return (
    <Box>
      <Navbar />
      <Box fontSize={4}>Home Page</Box>
      <code>{JSON.stringify(shopData)}</code>
    </Box>
  );
}
