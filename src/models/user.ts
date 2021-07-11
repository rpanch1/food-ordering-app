import { Food } from "./food";
import { Order } from "./order";

export interface User {
    id?: number;
    fullname: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    card: string;
    cart: Food[];
    order: Order[];
    
}