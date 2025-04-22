interface Car {
    name: string;
    color: string;
}
export interface CarId extends Car {
    id: number;
}
export declare function getCars(page: number, limit: number): Promise<{
    cars: CarId[];
    totalCount: number;
}>;
export declare function getCar(id: number): Promise<CarId>;
export declare function createCar(car: Car): Promise<CarId>;
export declare function updateCar(id: number, car: Car): Promise<CarId>;
export declare function deleteCar(id: number | string): Promise<void>;
export {};
