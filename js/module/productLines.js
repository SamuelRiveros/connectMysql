import { connection } from "../../db/connection.js";

//Obtener el promedio de la cantidad de productos en stock por línea de productos
export const AverageQuantityProductsInStockByProductsLine= async()=>{
    let [result] = await connection.query(`SELECT productLine, AVG(quantityInStock) AS promedio_stock FROM products GROUP BY productLine;`);
    return result;
}

//Obtener el promedio del precio de compra de los productos por línea de productos
export const AverageBuyPriceProductsfromProductsLine= async()=>{
    let [result] = await connection.query(`SELECT products.productLine, AVG(products.buyPrice) AS PromedioDeprecioDeCompra FROM products GROUP BY products.productLine;`);
    return result;
}

//Calcular la cantidad media de productos pedidos por cada cliente
export const AverageBuyPriceProductsForEachCustomer= async()=>{
    let [result] = await connection.query(`SELECT customers.customerName, AVG(totalProducts) AS CantidadMediaProductos FROM customers JOIN (SELECT orders.customerNumber, SUM(orderdetails.quantityOrdered) AS totalProducts FROM   orders JOIN   orderdetails ON orders.orderNumber = orderdetails.orderNumber GROUP BY   orders.customerNumber ) AS OrdenesDeCustomers ON customers.customerNumber = customer_orders.customerNumber GROUP BY customers.customerName;`);
    return result;
}

//Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos
export const getAverageBuyPriceProductsByProductLine= async()=>{
    let [result] = await connection.query(`SELECT products.productLine,  AVG(orderdetails.priceEach) AS PromediDePrecioDeVenta FROM  products JOIN  orderdetails ON products.productCode = orderdetails.productCode GROUP BY  products.productLine;`);
    return result;
}