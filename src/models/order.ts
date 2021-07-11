import { Food } from "./food";

export interface Order {
    items: Food[]
    total: number;
}