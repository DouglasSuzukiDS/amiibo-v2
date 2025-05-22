import { useCart } from "@/store/useCart"
import { Button } from "./ui/button"

export const CartActions = () => {
   const { clearCart } = useCart()

   return (
      <div className="flex justify-between items-center p-2 border-b">
         <Button
            onClick={clearCart}
            variant="destructive">
            Limpar carrinho
         </Button>

         <Button className="bg-sky-600 text-white hover:bg-sky-600 hover:opacity-75">
            Finalizar compra
         </Button>
      </div>
   )
}