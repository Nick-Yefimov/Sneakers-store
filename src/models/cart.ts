export interface CartItem {
    id: number,
    title: string,
    price: number,
    image: string,
}

export interface CartState {
    items: CartItem[],
    totalPrice: number
}