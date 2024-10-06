import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
    productId: number;
}

const initialState: ProductState = {
    productId: 0,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductId(state, action: PayloadAction<ProductState>) {
            state.productId = action.payload.productId;
            // 로컬스토리지에 저장 key, value
            localStorage.setItem('preproductId', action.payload.productId.toString());
        },
    },
});

export const productSliceActions = productSlice.actions;
export default productSlice.reducer;
