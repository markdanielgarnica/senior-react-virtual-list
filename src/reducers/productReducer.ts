import { createSlice, createSelector } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  hasMoreProducts: true,
  logs: {
    isLoading: false,
  },
};

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductsState: (state, action) => {
      console.log("hey", state.data.concat(action.payload));
      state.data = state.data.concat(action.payload);
    },
    setHasMoreProducts: (state, action) => {
      state.hasMoreProducts = action.payload;
    },
    setIsLoading: (state, action) => {
      state.logs.isLoading = action.payload;
    },
  },
});
export const { setProductsState, setHasMoreProducts, setIsLoading } =
  slice.actions;

export default slice.reducer;
// ------------------------------------- //
// const selectDomain = (state: any) => state.product || initialState;

// export const selectProduct = createSelector(
//   [selectDomain],
//   (productState) => productState.products
// );
