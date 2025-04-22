import { createCar, deleteCar, updateCar } from '../api/cars-api';
import { renderGarage } from '../views/garage';
export function createCarHandler(): void {
    const form = document.getElementById('create-form') as HTMLFormElement;
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const nameInput = document.getElementById('create-name') as HTMLInputElement;
      const colorInput = document.getElementById('create-color') as HTMLInputElement;
  
      const formData = new FormData(form);
  
      const car = {
        name: nameInput.value,
        color: colorInput.value,
      };
      alert(`Car created: ${car.name}, Color: ${car.color}. Your car is in the bottom of the garage!`);
      await createCar(car);
      nameInput.value = '';
      colorInput.value = '#000000';
  
      await renderGarage();
    });
  }
  
  
  export function updateCarHandler(): void {
    const form = document.getElementById('update-form') as HTMLFormElement;
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const nameInput = document.getElementById('update-name') as HTMLInputElement;
      const colorInput = document.getElementById('update-color') as HTMLInputElement;
  
      const selectedButton = document.querySelector('.selected') as HTMLButtonElement;
      const carId = selectedButton.dataset.id;
  
      const updatedCar = {
        name: nameInput.value,
        color: colorInput.value,
      };
  
      await updateCar(Number(carId), updatedCar);
      console.log(`Car updated: ${updatedCar.name}, Color: ${updatedCar.color}.`);
      nameInput.value = '';
      colorInput.value = '#000000';
  
      await renderGarage();
    });
  }
  
  export function deleteCarHandler(): void {
    const carList = document.getElementById('car-list') as HTMLElement;
  
    carList.addEventListener('click', async (event) => {
      if ((event.target as HTMLElement).classList.contains('remove-btn')) {
        const button = event.target as HTMLButtonElement;
        const carId = button.dataset.id;
        if (!carId) {
          return;
        }
        await deleteCar(carId);
        console.log(`Car with ID ${carId} has been deleted.`);
        await renderGarage();
      }
    });
  }