import { resolve } from "path"

export const getAppSettings = (): Promise<{theme:string, language:string}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                theme: "dark",
                language: "en"
            })
        }, 2000);
        
    });
    
}

export const getUserInfo = (): Promise<{
    name:string,
    email:string,
    age:number
}> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: "Maicon",
                email: "maicon@teste.com",
                age: 30
            });
        }, 2000);
        
    });
}

export async function getUserById(id: string): Promise<User> {
    const reponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await reponse.json();
    return user;

}

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    adress: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}