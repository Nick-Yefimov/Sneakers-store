import { Sneakers } from '../models/sneakers';



export const useHttp = () => {
    const request = async (
        url: string,
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
        body = null,
        headers = { Accept: 'application/json' }
    ): Promise<Sneakers[] | string[]> => {
        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Error! status: ${response.status}`);
            }

            const result = (await response.json()) as Sneakers[];

            return result;
        } catch (error) {
            if (error instanceof Error) {
                return [error.message];
            } else {
                return ['An unexpected error occurred'];
            }
        }

    }
    return { request }
}