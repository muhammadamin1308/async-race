import { createCar } from "@/api/cars-api";
import { renderGarage } from "@/views/garage";

export const carNames: string[] = [
    'Tesla Model S', 'Mercedes-Benz EQS', 'BMW i8', 'Audi e-tron GT', 'Lucid Air',
    'Porsche Taycan', 'Rivian R1T', 'Nissan Leaf', 'Chevrolet Bolt EV', 'Ford Mustang Mach-E',
    'Hyundai Ioniq 5', 'Kia EV6', 'Volkswagen ID.4', 'Volvo XC40 Recharge', 'Jaguar I-PACE',
    'Polestar 2', 'Mazda MX-30', 'Honda e', 'Fiat 500e', 'Mini Electric',
    'BYD Han', 'XPeng P7', 'NIO ES6', 'Genesis GV60', 'Toyota bZ4X',
    'Subaru Solterra', 'Skoda Enyaq iV', 'Peugeot e-208', 'Renault Zoe', 'Opel Corsa-e',
    'Citroën ë-C4', 'SEAT Mii Electric', 'Dacia Spring', 'Chevrolet Volt', 'Tesla Model 3',
    'Tesla Model X', 'Tesla Model Y', 'BMW i3', 'Audi Q4 e-tron', 'Mercedes-Benz EQA',
    'Hyundai Kona Electric', 'Kia Niro EV', 'Ford F-150 Lightning', 'GMC Hummer EV', 'Lucid Gravity',
    'Fisker Ocean', 'Cadillac Lyriq', 'Toyota Mirai', 'Honda Clarity', 'Mazda RX-Vision'
];



export default async function generateRandomCar(): Promise<void> {
    const randomCar = document.getElementById('generate-cars') as HTMLElement;
    randomCar.addEventListener('click', async () => {
        const carsToGenerate = 100;
        for (let i = 0; i < carsToGenerate; i++) {
            const randomIndex = Math.floor(Math.random() * carNames.length);
            const randomName = carNames[randomIndex];
            const color = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
            const car = {
                name: randomName,
                color: color,
            };
            await createCar(car);
        }
        await renderGarage();
    });
}

