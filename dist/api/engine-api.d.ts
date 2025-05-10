interface engine {
    velocity: number;
    distance: number;
}
export declare function startCarEngine(id: number): Promise<engine>;
export declare function driveCar(id: number): Promise<{
    success: boolean;
}>;
export declare function stopCarEngine(id: number): Promise<engine>;
export {};
