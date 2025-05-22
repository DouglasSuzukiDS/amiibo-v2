'use client'
import { useCart } from "@/store/useCart"

type Props = {
   item: CartItem
}
export const Counter = ({ item }: Props) => {
   const { addToCart, removeItemCart } = useCart()

   return (
      <div className="flex">
         <span
            onClick={() => removeItemCart(item.name)}
            className="flex justify-center items-center w-[24px] h-[24px] text-white font-bold rounded-l-md bg-red-600">
            -
         </span>

         <span className="flex justify-center items-center w-[24px] h-[24px] text-black font-bold bg-slate-200">
            {item.quantity}
         </span>

         <span
            onClick={() => addToCart(item)}
            className="flex justify-center items-center w-[24px] h-[24px] text-white font-bold rounded-r-md bg-green-600">
            +
         </span>
      </div>
   )
}