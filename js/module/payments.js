import { connection } from "../../db/connection.js";


//Listar el monto total de los pagos recibidos de cada cliente
export const TotalPaymentAmmountFromCustomer = async()=>{
    let [result] = await connection.execute(` SELECT customers.customerNumber, SUM(payments.amount) AS total_payments FROM payments INNER JOIN customers ON payments.customerNumber = customers.customerNumber GROUP BY customers.customerNumber;`);
    return result;
}

//Calcular el total de pagos recibidos
export const getTotalPayments = async()=>{
    let [result] = await connection.execute(`SELECT SUM(amount) AS total_pagos_recibidos FROM payments;`);
    return result;
}

//Calcular el total de pagos recibidos por cada cliente
export const getTotalPaymentsFromEachCustomer = async()=>{
    let [result] = await connection.execute(`SELECT customerNumber, SUM(amount) AS total_pagos FROM payments GROUP BY customerNumber;`);
    return result;
}

//Calcular el total de pagos recibidos por cada país
export const getTotalPaymentsForEachCountry = async()=>{
    let [result] = await connection.execute(`SELECT c.country, SUM(p.amount) AS total_pagos FROM payments p INNER JOIN customers c ON p.customerNumber = c.customerNumber GROUP BY c.country;`);
    return result;
}

//Calcular el total de pagos recibidos por cada vendedor
export const getTotalPaymentsForEachSeller = async()=>{
    let [result] = await connection.execute(`SELECT employees.employeeNumber, employees.firstName, COUNT(*) AS PagosTotales FROM payments JOIN customers ON customers.customerNumber = payments.customerNumber JOIN employees ON employees.employeeNumber = customers.salesRepEmployeeNumber GROUP BY employees.employeeNumber, employees.firstName;`);
    return result;
}

//Obtener el total de pagos realizados en cada año
export const getTotalPaymentsEachYear = async()=>{
    let [result] = await connection.execute(`SELECT YEAR(paymentDate) AS PagoAnual,  SUM(amount) AS totalPayments FROM  payments GROUP BY  YEAR(paymentDate);`);
    return result;
}