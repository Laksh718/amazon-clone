import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Product } from "../types/Product";

// Define the shape of our cart state
interface CartState {
  items: Product[];
  totalAmount: number;
}

// Define the actions for our reducer
type CartAction =
  | { type: "ADD_TO_CART"; payload: Product }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "CLEAR_CART" };

// Initial state
const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

// Create Context
const CartContext = createContext<
  | {
      cart: CartState;
      addToCart: (item: Product) => void;
      removeFromCart: (id: string) => void;
      clearCart: () => void;
    }
  | undefined
>(undefined);

// Reducer function to handle state changes
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItemIndex = state.items.findIndex((i) => i.id === item.id);

      let updatedItems: Product[];

      if (existingItemIndex >= 0) {
        // If item exists, increase quantity
        updatedItems = [...state.items];
        const existingItem = updatedItems[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: (existingItem.quantity || 1) + 1,
        };
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // If item doesn't exist, add it with quantity 1
        updatedItems = [...state.items, { ...item, quantity: 1 }];
      }

      // Calculate new total
      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );

      return {
        items: updatedItems,
        totalAmount: updatedTotal,
      };
    }

    case "REMOVE_FROM_CART": {
      const updatedItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      // Calculate new total
      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.price * (item.quantity || 1),
        0
      );

      return {
        items: updatedItems,
        totalAmount: updatedTotal,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

// Provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Actions
  const addToCart = (item: Product) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
