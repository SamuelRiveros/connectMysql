import { connection } from "../../db/connection.js";

//Listar todas las órdenes que tienen un estado de Enviado
export const GetAllShippedOrders= async()=>{
    let [result] = await connection.query(`SELECT * FROM orders WHERE status = 'Shipped';`);
    return result;
}

//Encontrar todas las órdenes realizadas por clientes de 'Francia'
export const AllOrdersByCustomersCountry= async()=>{
    let [result] = await connection.query(`select * from orders inner join customers on customers.country = 'France'`);
    return result;
}

//Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101
export const AllDetailsOrdersByCustomerNumber= async()=>{
    let [result] = await connection.query(`SELECT orders.orderNumber, orders.orderDate, orders.status, products.productName, orderdetails.quantityOrdered, orderdetails.priceEach FROM orders INNER JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber INNER JOIN products ON orderdetails.productCode = products.productCode INNER JOIN customers ON orders.customerNumber = customers.customerNumber WHERE customers.customerNumber = 101;`);
    return result;
}

//Calcular el total de órdenes realizadas por cada cliente
export const TotalOrdersFromEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT customerNumber, COUNT(orderNumber) AS total_ordenes FROM orders GROUP BY customerNumber;`);
    return result;
}

//Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente
export const getTotalSalesForEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT o.customerNumber, SUM(od.quantityOrdered * od.priceEach) AS total_ventas FROM orders o INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY o.customerNumber;`);
    return result;
}

//Calcular el total de ventas realizadas en cada país
export const TotalSalesFromEachCountry= async()=>{
    let [result] = await connection.query(`SELECT customers.country, SUM(orderdetails.quantityOrdered) AS VentasTotales FROM customers JOIN orders ON customers.customerNumber = orders.customerNumber JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY customers.country ORDER BY totalSales;`);
    return result;
}