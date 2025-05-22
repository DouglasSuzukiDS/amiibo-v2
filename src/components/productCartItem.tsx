'use client'
import Image from "next/image"
import { Counter } from "./counter"
import { formatPrice } from "@/lib/formatPrice"
import { Button } from "./ui/button"
import { useCart } from "@/store/useCart"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

type Props = {
   item: CartItem
}
export const ProductCartItem = ({ item }: Props) => {
   const { removeItemCart } = useCart()

   return (
      <div className="flex gap-4 items-center border-b border-b-slate-200 py-2">
         <div className={`flex flex-col items-center p-4 border rounded-md
         ${item.version === 1 && 'bg-transparent'}
         ${item.version === 2 && 'bg-red-300'}
         ${item.version === 3 && 'bg-green-300'}
         ${item.version === 4 && 'bg-blue-300'}
         `}>
            <Image
               src={item.image}
               alt={item.name}
               width={50}
               height={50} />
         </div>

         <div className="flex flex-col flex-1 gap-4">
            <p className="text-sm">Nome: {item.name} - Versão: {item.version}</p>

            <div className="flex justify-between items-center">
               <p>{formatPrice(item.price * item.quantity)}</p>

               <Counter item={item} />

               <Button
                  variant="destructive"
                  className="text-red-600 bg-transparent cursor-pointer hover:bg-transparent hover:text-red-600"
                  onClick={() => removeItemCart(item.name)}>
                  <Tooltip>
                     <TooltipTrigger asChild>
                        <p>X</p>
                     </TooltipTrigger>

                     <TooltipContent >
                        <p>Remover item</p>
                     </TooltipContent>

                  </Tooltip>
               </Button>

            </div>
         </div>

      </div>
   )
}