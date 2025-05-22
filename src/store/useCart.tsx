import { getStorage, saveStorage } from "@/lib/storage";
import { create } from "zustand";

type CartStore = {
   open: boolean
   setOpen: (open: boolean) => void

   cart: CartItem[]

   loadCart: () => void
   addToCart: (item: CartItem) => void
   removeItemCart: (name: string) => void
   cartValue: () => number

   clearCart: () => void
}
export const useCart = create<CartStore>((set, get) => ({
   open: false,
   setOpen: (open: boolean) => set(state => ({ ...state, open })),

   cart: [],

   loadCart() {
      let storage = getStorage('cart')



   },

   addToCart: (item: CartItem) => set(state => {
      let cloneCart = [...state.cart]

      // Aqui retorna o index do item, se ele não exitir ele retorna -1
      const itemIndex = cloneCart.findIndex((cartItem) => cartItem.name === item.name && cartItem.version === item.version)

      // Caso nao o item não existe no carrinho ele adiciona
      if (itemIndex === -1) {
         cloneCart.push(item)

         saveStorage('cart', cloneCart)

         return { ...state, cart: cloneCart }
      }

      // Caso o item já existe no carrinho, ele apanas aumenta a quatidade
      const itemCart = cloneCart[itemIndex]

      cloneCart[itemIndex] = {
         ...itemCart,
         quantity: itemCart.quantity + 1
      }

      saveStorage('cart', cloneCart)

      return { ...state, cart: cloneCart }
   }),

   removeItemCart: (name: string) => set(state => {
      const cloneCart = [...state.cart]

      // Aqui retorna o index do item, se ele não exitir ele retorna -1
      const itemIndex = cloneCart.findIndex((cartItem) => cartItem.name === name)

      // O item selecionado
      const itemCart = cloneCart[itemIndex]

      // Caso o item já existe no carrinho, ele remove 1 da quatidade
      if (itemCart.quantity >= 1) {
         cloneCart[itemIndex] = {
            ...itemCart,
            quantity: itemCart.quantity - 1
         }
      }

      if (cloneCart[itemIndex].quantity === 0) {
         const filtredItems = cloneCart.filter((item) => item.name !== name)

         saveStorage('cart', cloneCart)

         return { ...state, cart: filtredItems }
      }

      saveStorage('cart', cloneCart)

      return { ...state, cart: cloneCart }
   }),

   cartValue: () => get().cart.reduce((total, item) => total + (item.price * item.quantity), 0),

   clearCart: () => set({ cart: [] }),
}));