export interface Winner {
    time: number;
    wins: number;
    id: number;
}
export declare function getWinners(page?: number, limit?: number, sort?: string, order?: 'ASC' | 'DESC'): Promise<{
    winners: Winner[];
}>;
