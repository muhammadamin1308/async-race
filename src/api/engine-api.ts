const BASE_URL = 'http://127.0.0.1:3000/';

interface engine {
    velocity: number; // in m/s
    distance: number; // in m
}

export async function startCarEngine(id: number): Promise<engine> {
    const url = `${BASE_URL}engine?id=${id}&status=started`;
    const response = await fetch(url, {
        method: 'PATCH',
    });
    return response.json();
}

export async function driveCar(id: number): Promise<{success: boolean}> {
    const response = await fetch(`${BASE_URL}engine?id=${id}&status=drive`, { method: 'PATCH' });
    if (response.status !== 200) return { success: false };
    return { success: true };
}

export async function stopCarEngine(id: number): Promise<engine> {
    const response = await fetch(`${BASE_URL}engine?id=${id}&status=stopped`, { method: 'PATCH' });
    return response.json();
}