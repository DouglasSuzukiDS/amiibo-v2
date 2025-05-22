'use client'

import { Button } from "./ui/button"
import { useCart } from "@/store/useCart"

export const Header = () => {
   const cart = useCart()

   return (
      <header className="flex justify-between items-center w-full px-10 py-4 bg-gray-200 rounded-md">
         <p>AMIIBO</p>

         <Button onClick={() => cart.setOpen(true)}>Carrinho</Button>
      </header>
   )
}