import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";

function InfiniteList({
  itemCount,
  loadMoreItems,
  isItemLoaded,
  renderItem,
}: any) {
  const isLoading = useSelector((state: any) => state.products.logs.isLoading);

  const isItemLoading = (index: number) => !isItemLoaded(index);

  const loadMore = () => {
    if (!isItemLoading(itemCount - 1)) {
      loadMoreItems(itemCount);
    }
  };

  return (
    <InfiniteLoader
      itemCount={itemCount + 1}
      loadMoreItems={loadMore}
      isItemLoaded={isItemLoaded}
    >
      {({ onItemsRendered, ref }: any) => (
        <FixedSizeList
          height={500}
          itemCount={itemCount}
          itemSize={250}
          onItemsRendered={onItemsRendered}
          ref={ref}
          width={500}
        >
          {({ index, style }: any) => {
            const marginBottom = index < itemCount - 1 ? 5 : 0;
            return (
              <div
                style={{
                  ...style,
                  padding: "10px",
                }}
              >
                {renderItem(index)}
                {isLoading && index === itemCount - 1 && (
                  <Box display={"flex"} justifyContent={"center"}>
                    <CircularProgress thickness={4} />
                  </Box>
                )}
              </div>
            );
          }}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}

export default InfiniteList;
