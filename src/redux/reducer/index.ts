import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../interface';

interface ProductsState {
  products: Product[];
  cart: Product[];
}

const initialState: ProductsState = {
  products: [],
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    addToCart(state, action: PayloadAction<Product>) {
      const product = action.payload;
      const existingProduct = state.cart.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({...product, quantity: 1});
      }
    },
    incrementQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const product = state.cart.find(item => item.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const productIndex = state.cart.findIndex(item => item.id === productId);
      if (productIndex !== -1) {
        if (state.cart[productIndex].quantity > 1) {
          state.cart[productIndex].quantity -= 1;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },
  },
});

export const {setProducts, addToCart, incrementQuantity, decrementQuantity} =
  productsSlice.actions;
export default productsSlice.reducer;
