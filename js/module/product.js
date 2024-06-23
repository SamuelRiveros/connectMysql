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

//Calcular el total de productos en stock
export const getProductStock = async()=>{
    let [result] = await connection.query(`SELECT SUM(quantityInStock) AS total_productos_stock FROM products;`);
    return result;
}

//Encontrar el precio medio de compra de todos los productos
export const AverageProductPrice = async()=>{
    let [result] = await connection.query(`SELECT AVG(buyPrice) AS precio_medio_compra FROM products;`);
    return result;
}

//Calcular la cantidad media de productos pedidos en las órdenes
export const AverageProductOrderQuantity = async()=>{
    let [result] = await connection.query(`SELECT AVG(quantityOrdered) AS media_productos_pedidos FROM orderdetails;;`);
    return result;
}

//Encontrar el precio total de todos los productos
export const TotalProductsPrice = async()=>{
    let [result] = await connection.query(`SELECT SUM(buyPrice) AS precio_total_productos FROM products;`);
    return result;
}

//Calcular el promedio del precio sugerido (MSRP) de los productos
export const AverageSuggestedProducts = async()=>{
    let [result] = await connection.query(`SELECT AVG(MSRP) AS promedio_precio_sugerido FROM products;`);
    return result;
}


//Encontrar la cantidad total de productos pedidos por cada cliente
export const EachCustomerProductBought= async()=>{
    let [result] = await connection.query(`SELECT o.customerNumber, SUM(od.quantityOrdered) AS total_productos FROM orders o INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY o.customerNumber;`);
    return result;
}

//Obtener la cantidad total de productos vendidos por cada línea de productos
export const TotalProductQuantity= async()=>{
    let [result] = await connection.query(`SELECT p.productLine, SUM(od.quantityOrdered) AS total_productos_vendidos FROM products p INNER JOIN orderdetails od ON p.productCode = od.productCode GROUP BY p.productLine;`);
    return result;
}

//Encontrar el promedio de la cantidad de productos ordenados por cada cliente
export const ProductAveragePerCustomer= async()=>{
    let [result] = await connection.query(`SELECT customers.customerName, AVG(orderdetails.quantityOrdered) AS promedio_productos_ordenados FROM orderdetails JOIN orders ON orders.orderNumber = orderdetails.orderNumber JOIN customers ON customers.customerNumber = orders.customerNumber GROUP BY customers.customerName;`);
    return result;
}

//Encontrar la cantidad total de productos vendidos por cada vendedor
export const TotalProductQuantityPerCustomer = async()=>{
    let [result] = await connection.query(`SELECT  employees.employeeNumber, employees.firstName, SUM(orderdetails.quantityOrdered) AS CantidadTotalVendida FROM  employees JOIN  customers ON employees.employeeNumber = customers.salesRepEmployeeNumber JOIN  orders ON customers.customerNumber = orders.customerNumber JOIN  orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY  employees.employeeNumber, employees.firstName;`);
    return result;
}