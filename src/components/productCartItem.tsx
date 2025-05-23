'use client'
import Image from "next/image"
import { Counter } from "./counter"
import { formatPrice } from "@/lib/formatPrice"
import { Button } from "./ui/button"
import { useCart } from "@/store/useCart"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"

type Props = {
   item: CartItem
   index: number
}
export const ProductCartItem = ({ item, index }: Props) => {
   const { removeItemCart } = useCart()

   return (
      <div className={`flex h-[120px] gap-4 items-center border border-bg-border-nitendo rounded-md p-2 
      ${index % 2 === 0 ? 'border-blue-nitendo' : 'border-red-nitendo'}
      `}>
         <div className={`flex h-full flex-col justify-center items-center p-4 border rounded-md
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
                  className="text-red-nitendo bg-transparent cursor-pointer border-0 hover:bg-transparent hover:text-red-nitendo"
                  onClick={() => removeItemCart(item.name, item.version)}>
                  <Tooltip>
                     <TooltipTrigger asChild className="border-0">
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