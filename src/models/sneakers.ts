
export interface Sneakers {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface SneakersState {
    sneaker: Sneakers[];
    status: boolean;
    error: string | null;
}

