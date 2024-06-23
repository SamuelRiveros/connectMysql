import { connection } from "../../db/connection.js";

//Contar la cantidad de oficinas en cada país
export const getAllQuantityOfficesForEachCountry= async()=>{
    let [result] = await connection.query(`SELECT country, COUNT(*) AS cantidad_oficinas FROM offices GROUP BY country;`);
    return result;
}

//Encontrar el total de ventas realizadas por cada oficina
export const TotalSalesPerOffice= async()=>{
    let [result] = await connection.query(`SELECT offices.city, offices.country, SUM(orderdetails.quantityOrdered * orderdetails.priceEach) AS VentasTotales FROM  offices JOIN  employees ON offices.officeCode = employees.officeCode JOIN  customers ON employees.employeeNumber = customers.salesRepEmployeeNumber JOIN  orders ON customers.customerNumber = orders.customerNumber JOIN  orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY offices.city, offices.country;`);
    return result;
}