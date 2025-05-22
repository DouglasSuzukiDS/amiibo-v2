export const getStorage = (key: string) => {
   const data = localStorage.getItem(key)

   if (!data) return []

   return JSON.parse(data)
}

export const saveStorage = (key: string, value: CartItem[]) => {
   localStorage.removeItem(key)

   return localStorage.setItem(key, JSON.stringify(value))
}

