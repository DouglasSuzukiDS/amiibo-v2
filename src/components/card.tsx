'use client'
import { Amiibo } from "@/types/amiibo"
import Image from "next/image"

type Props = {
   data: Amiibo
}
export const Card = ({ data }: Props) => {
   return (
      <div
         className="flex flex-col justify-between w-[200px] p-4 gap-4 border rounded-md hover:bg-black/10 hover:cursor-pointer">
         <div className="flex justify-center">
            <Image
               src={data.image}
               alt={data.character}
               width={100}
               height={100}
               className="" />
         </div>

         <div className="text-center">
            <p>{data.name}</p>
            <p>{`R$ 30,00`}</p>
         </div>
      </div>
   )
}