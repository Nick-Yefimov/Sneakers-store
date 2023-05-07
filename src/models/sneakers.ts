
export interface Sneakers {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface SneakersState {
    data: Sneakers[]
    status: boolean;
    error: string | null;
}

