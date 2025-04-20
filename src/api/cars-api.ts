const BASE_URL = 'http://localhost:3000/';

interface Car {
    name: string;
    color: string;
}

export interface CarId extends Car{
    id: number;
}


// Get all cars
export async function getCars(page: number = 1, limit: number = 7): Promise<{ cars: CarId[]; total: number }> {
    const response = await fetch(`${BASE_URL}garage/`);
    const cars = await response.json();
    const total = cars.length;
    return { cars, total };
}

// Get a car
export async function getCar(id: number): Promise<CarId> { 
    const response = await fetch(`${BASE_URL}garage/${id}`);
    const data = await response.json();
    return data;
}                                   

// Create a car
export async function createCar(car: Car): Promise<CarId>{
    const response = await fetch(`${BASE_URL}garage/`, {
        method: 'POST',
        headers:    {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    });
    return response.json();
}

// Update a car
export async function updateCar(id:number, car: Car): Promise<CarId> {
    const response = await fetch(`${BASE_URL}garage/${id}`, {
    method: 'PUT',
        headers:    {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(car)
    });
    return response.json()
}

// Delete Car
export async function deleteCar(id: number | string): Promise<void> {
    await fetch(`${BASE_URL}garage/${id}`, {
        method: 'DELETE'
    });
}