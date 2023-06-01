import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
function ProductCard({ title, price, thumbnail, description }: any) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      height={"100%"}
      width={"350px"}
      marginX={"auto"}
      bgcolor={"#fff"}
      borderRadius={1}
      px={2}
      py={1}
    >
      <Box width={"100%"} position={"relative"} height={"150px"}>
        <Image
          src={thumbnail}
          alt={description}
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography variant="h6" textAlign={"center"}>
        {title}
      </Typography>
      <Typography variant="h6">{price}</Typography>
    </Box>
  );
}

export default ProductCard;
