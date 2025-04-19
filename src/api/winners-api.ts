const BASE_URL = 'http://localhost:3000/';

interface Winner {
    time: number,
    wins: number,
    id: number
}

export async function getWinners(page: number = 1, limit: number = 10, sort: string = 'id', order: 'ASC' | 'DESC' = 'ASC'): Promise<{ winners: Winner[], totalCount: number }> {
    try {
        const response = await fetch(`${BASE_URL}winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
        const winners = await response.json();
        const totalCount = parseInt(response.headers.get('X-Total-Count') || '0');

        return { winners, totalCount };
    } catch (error) {
        console.error('Error fetching winners:', error);
        throw error;
    }
}