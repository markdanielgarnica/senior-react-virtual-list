import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { getSession } from "next-auth/react";

import {
  setHasMoreProducts,
  setIsLoading,
  setProductsState,
} from "@/reducers/productReducer";
import ProductCard from "@/components/list/ProductCard";
import InfiniteList from "@/components/list/InfiniteList";
import NavBar from "@/shared/NavBar";
import User from "@/shared/User";
import Head from "next/head";
import { AnyPtrRecord } from "dns";
function List({ data, session }: any) {
  const dispatch = useDispatch();
  const hasMoreProductsState = useSelector(
    (state: any) => state.products.hasMoreProducts,
  );
  const products = useSelector((state: any) => state.products.data);
  const itemCount = products.length;
  const productPerPage = 10;

  const isItemLoaded = (index: number) => index < products.length;

  async function fetchMoreData(startIndex: number) {
    const nextPage = Math.floor(startIndex / productPerPage) + 1;
    const skip = (nextPage - 1) * productPerPage;
    const limit = productPerPage;
    dispatch(setIsLoading(true));

    const res = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    );

    const { products: newProducts } = await res.json();

    dispatch(setIsLoading(false));
    const hasMore = newProducts.length === productPerPage;
    dispatch(setHasMoreProducts(hasMore));
    dispatch(setProductsState(newProducts));
  }

  const renderItem = (index: number) => {
    const item = products[index];
    return (
      <ProductCard
        key={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
        description={item.description}
      />
    );
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const { products: initProducts } = data;
    !products.length && dispatch(setProductsState(initProducts));
  }, []);

  return (
    <Box>
      <Head>
        <title>List</title>
      </Head>
      <User name={session.user.name} />
      <NavBar />
      <Box marginTop={2}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography variant="h3" textAlign={"center"}>
            Products
          </Typography>
          <Box marginX={"auto"}>
            <InfiniteList
              itemCount={itemCount}
              loadMoreItems={hasMoreProductsState ? fetchMoreData : () => {}}
              isItemLoaded={isItemLoaded}
              renderItem={renderItem}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
  const res = await fetch("https://dummyjson.com/products?limit=10");
  const data = await res.json();

  return {
    props: {
      data,
      session,
    },
  };
}

export default List;
