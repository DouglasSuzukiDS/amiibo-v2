'use client'

import { Amiibo } from "@/types/amiibo"
import { Card } from "./card"
import { Dialog, DialogTrigger } from "./ui/dialog"

import { ProductModal } from "./productModal"

type Props = {
   marioSerie: Amiibo[]
}
export const ProductsContainer = ({ marioSerie }: Props) => {

   return (
      <div className="container w-full h-full flex flex-wrap justify-center my-10 p-10 gap-4 border border-bg-border-nitendo  rounded-md overflow-y-auto">
         {marioSerie.map((char, index) => (

            <Dialog key={index}>
               <DialogTrigger>
                  <div className="w-[200px]">
                     <Card key={`${char.name} - ${index}`} data={char} index={index} />
                  </div>
               </DialogTrigger>

               <ProductModal char={char} />
            </Dialog>
         ))}
      </div>
   )
}