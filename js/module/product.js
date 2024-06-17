import { connection } from "./connection.js";

export const getAllProductsDescription = async() =>{
    let [result] = await connection.query('SELECT productLine, productDescription from products;')
    return result
}