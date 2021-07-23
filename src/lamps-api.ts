import axios from 'axios';

const lampsAxios = axios.create({
	baseURL: 'https://casa.sidharta.xyz/api/lamp/lamp',
});

export async function sendLampAction(targets: number[], method: string, args: any[]) {
	return await lampsAxios.post('/rawmethod', { targets, method, args });
}
