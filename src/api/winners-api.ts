const BASE_URL = 'http://127.0.0.1:3000/';

export interface Winner {
    time: number,
    wins: number,
    id: number
}

export async function getWinners(page: number = 1, limit: number = 10, sort: string = 'id', order: 'ASC' | 'DESC' = 'ASC'): Promise<{ winners: Winner[]}> {
    const response = await fetch(`${BASE_URL}winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    const winners = await response.json();

    return winners;
}