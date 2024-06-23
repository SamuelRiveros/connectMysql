import { connection } from "../../db/connection.js";

// Encontrar todos los empleados que trabajan en la oficina de 'San Francisco'
export const EmployeesFromSanFrancisco = async()=>{
    let [result] = await connection.query(`SELECT employees.firstName FROM employees inner join offices on offices.officeCode = employees.officeCode and offices.city = 'San Francisco';`)
    return result;
}

//Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143
export const getAllEmployeesByreport = async(id = 1143)=>{
    let [result] = await connection.query(` SELECT firstName, email FROM employees WHERE reportsTo = ?`, [id]);
    return result;
}

//Obtener la cantidad total de empleados
export const getTotalQuantityOfEmployees = async()=>{
    let [result] = await connection.query(`SELECT COUNT(*) AS total_empleados FROM employees;`);
    return result;
}

//Contar la cantidad de empleados por título de trabajo
export const getQuantityEmployeesByJobTitle = async()=>{
    let [result] = await connection.query(`SELECT jobTitle, COUNT(*) AS cantidad_empleados FROM employees GROUP BY jobTitle;`);
    return result;
}


//Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado
export const getAverageSalesForEachEmployee = async()=>{
    let [result] = await connection.query(`SELECT e.employeeNumber, AVG(od.quantityOrdered * od.priceEach) AS promedio_ventas FROM employees e INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber INNER JOIN orders o ON c.customerNumber = o.customerNumber INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY e.employeeNumber;`);
    return result;
}

//Calcular el total de órdenes gestionadas por cada empleado
export const getTotalManagedOrdersForEachEmployee = async()=>{
    let [result] = await connection.query(`SELECT e.employeeNumber, COUNT(o.orderNumber) AS total_ordenes FROM employees e INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber INNER JOIN orders o ON c.customerNumber = o.customerNumber GROUP BY e.employeeNumber;`);
    return result;
}