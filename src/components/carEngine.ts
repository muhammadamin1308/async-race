import { getCar } from "@/api/cars-api";


export async function startEngine() {
    document.querySelectorAll('.start-btn').forEach((btn) => {
        btn.addEventListener('click', (event) => {
            console.log('Engine started');
            const carId = (event.target as HTMLElement).dataset.id;
            getCar(Number(carId)).then((car) => {
                console.log(car);
                const carName = car.name;
                const carColor = car.color;
            });
        });
    })
}