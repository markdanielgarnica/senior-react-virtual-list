import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ProductsState {
  data: any[];
  hasMoreProducts: boolean;
  logs: {
    isLoading: boolean;
  };
}
const initialState: ProductsState = {
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
    setProductsState: (state, action: PayloadAction<any[]>) => {
      console.log("hey", state.data.concat(action.payload));
      state.data = state.data.concat(action.payload);
    },
    setHasMoreProducts: (state, action: PayloadAction<boolean>) => {
      state.hasMoreProducts = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
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
