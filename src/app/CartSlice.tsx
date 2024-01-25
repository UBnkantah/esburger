import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import type {PayloadAction} from "@reduxjs/toolkit"

interface initialTypes {
    cartItems: any,
    cartTotalQuantity: number,
    cartTotalAmount: number
}

const initialState = {
    cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems") !) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0
} as initialTypes;

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item : any) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.cartItems[itemIndex].name} cart quantity`,
          {
            position: "bottom-left",
          }
        );
        // window.location.reload()
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
        // window.location.reload()
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action: PayloadAction<any>) {
      const nextCartItems = state.cartItems.filter(
        (cartItem : any) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.title} remove from cart`, {
        position: "bottom-left",
      });
    //   window.location.reload();
    },
    decreaseCart(state, action: PayloadAction<any>) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem: any) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.error(`Decreased ${action.payload.title} cart quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem : any) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error(`${action.payload.name} remove from cart`, {
          position: "bottom-left",
        });
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    clearCart(state) {
      state.cartItems = [];
      toast.error(`Cart Cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state){
            let {total, quantity} = state.cartItems.reduce(
                (cartTotal : any, cartItem : any)=>{
                const {price, cartQuantity} = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal;
            }, {
                total: 0,
                quantity: 0
            });

            console.log(total, "total")
            console.log(quantity, "quantity")

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
    }

    }
})

export const {addToCart, removeFromCart, decreaseCart, clearCart, getTotals} = cartSlice.actions;

export default cartSlice.reducer;