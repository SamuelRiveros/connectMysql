import { connection } from "../../db/connection.js";

// Recuperar todas las líneas de productos con sus descripciones
export const getAllProductsDescription = async()=>{
    let [result] = await connection.query(`SELECT productLine, productDescription FROM products`);
    return result;
}

//Listar todos los productos junto con las descripciones de sus líneas de productos

export const getAllProductsWithItsLinesDescription = async()=> {
    let [res] = await connection.query(`select products.productCode, products.productName, productlines.textDescription from products join productlines on products.productLine = productlines.productLine;`)
    return res;
}