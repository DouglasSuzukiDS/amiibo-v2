import { useCart } from "@/store/useCart"
import { Button } from "./ui/button"
import { toast } from "sonner"

export const CartActions = () => {
   const { clearCart } = useCart()

   const handleFinishOrder = () => {
      toast.success('Comprar em finalização ...')
   }

   return (
      <div className="flex justify-between items-center p-2 border-b">
         <Button
            onClick={clearCart}
            className="bg-red-nitendo text-white hover:bg-red-nitendo/90">
            Limpar carrinho
         </Button>

         <Button
            className="bg-blue-border-nitendo text-white hover:bg-blue-border-nitendo/90"
            onClick={handleFinishOrder}>
            Finalizar compra
         </Button>
      </div>
   )
}