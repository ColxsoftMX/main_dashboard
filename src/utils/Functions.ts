import { ValidateTokenApi } from "./APIs";

export const validateToken = async (token: string) => {
    try {
        const response = await fetch(`${ValidateTokenApi}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Bearer': `${token}`
            },
            body: JSON.stringify({}),
        });
        const data = await response.json();
        console.log('Success:', data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const decodeJwt = (token: string) => {
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));

    if (localStorage.getItem('datosUsr')) {
        localStorage.removeItem('datosUsr');
    }

    localStorage.setItem('datosUsr', JSON.stringify(tokenPayload));
}