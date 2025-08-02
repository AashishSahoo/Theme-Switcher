import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

export interface Listing {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductState {
  listings: Listing[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  listings: [],
  loading: false,
  error: null,
};

export const fetchProductList = createAsyncThunk<
  Listing[],
  void,
  { rejectValue: string }
>("home/fetchProductList", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get<Listing[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue(err.message || "Failed to fetch product list");
  }
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProductList.fulfilled,
        (state, action: PayloadAction<Listing[]>) => {
          state.loading = false;
          state.listings = action.payload;
        }
      )
      .addCase(
        fetchProductList.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || "Failed to load data";
        }
      );
  },
});

export default productSlice.reducer;
