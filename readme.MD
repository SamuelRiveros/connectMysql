## Parte 1/2

### Consultas de una sola tabla

1. **Recuperar todas las líneas de productos con sus descripciones:**

   ```sql
   select * from products
   ```

2. **Encontrar todos los empleados que trabajan en la oficina de 'San Francisco':**

   ```sql
   SELECT employees.firstName FROM employees inner join offices on offices.officeCode = employees.officeCode and offices.city = 'San Francisco';
   ```

3. **Listar todas las órdenes que tienen un estado de 'Enviado':**

   ```sql
   select status from orders where status = 'Shipped'
   ```

4. **Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103:**

   ```sql
   SELECT * FROM payments where customerNumber = '103';
   ```

5. **Recuperar todos los clientes de 'USA' que tienen un límite de crédito superior a 50000:**

   ```sql
   select * from customers where country = 'USA' and creditLimit > 50000
   ```

### Consultas de múltiples tablas

1. **Listar todos los productos junto con las descripciones de sus líneas de productos:**

   ```sql
   select * from products --mirar
   ```

2. **Obtener los nombres y direcciones de correo electrónico de los empleados que reportan al empleado con el número de empleado 1143:**

   ```sql
   select * from employees and email from where employeeNumber = '1143'
   ```

3. **Encontrar todas las órdenes realizadas por clientes de 'Francia':**

   ```sql
   select * from orders inner join customers on customers.country = 'France'
   ```

4. **Listar el monto total de los pagos recibidos de cada cliente:**

   ```sql
   SELECT customers.customerNumber, SUM(payments.amount) AS total_payments FROM payments INNER JOIN customers ON payments.customerNumber = customers.customerNumber GROUP BY customers.customerNumber;
   ```

5. **Recuperar los detalles de las órdenes, incluyendo los nombres de los productos, para todas las órdenes realizadas por el cliente con el número de cliente 101:**

   ```sql
   SELECT orders.orderNumber, orders.orderDate, orders.status, products.productName, orderdetails.quantityOrdered, orderdetails.priceEach FROM orders INNER JOIN orderdetails ON orders.orderNumber = orderdetails.orderNumber INNER JOIN products ON orderdetails.productCode = products.productCode INNER JOIN customers ON orders.customerNumber = customers.customerNumber WHERE customers.customerNumber = 101;
   ```



-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



## Parte 2/2

### Consultas de una sola tabla

1. **Obtener el promedio del límite de crédito de todos los clientes:**

   ```sql
   SELECT AVG(creditLimit) AS promedio_credito FROM customers;
   ```

2. **Calcular el total de productos en stock:**

   ```sql
   SELECT SUM(quantityInStock) AS total_productos_stock FROM products;
   ```

3. **Encontrar el precio medio de compra de todos los productos:**

   ```sql
   SELECT AVG(buyPrice) AS precio_medio_compra FROM products;
   ```

4. **Contar la cantidad de oficinas en cada país:**

   ```sql
   SELECT country, COUNT(*) AS cantidad_oficinas FROM offices GROUP BY country;
   ```

5. **Calcular el total de pagos recibidos:**

   ```sql
   SELECT SUM(amount) AS total_pagos_recibidos FROM payments;
   ```

6. **Obtener la cantidad total de empleados:**

   ```sql
   SELECT COUNT(*) AS total_empleados FROM employees;
   ```

7. **Calcular la cantidad media de productos pedidos en las órdenes:**

   ```sql
   SELECT AVG(quantityOrdered) AS media_productos_pedidos FROM orderdetails;
   ```

8. **Encontrar el precio total de todos los productos:**

   ```sql
   SELECT SUM(buyPrice) AS precio_total_productos FROM products;
   ```

9. **Calcular el promedio del precio sugerido (MSRP) de los productos:**

   ```sql
   SELECT AVG(MSRP) AS promedio_precio_sugerido FROM products;
   ```

10. **Contar la cantidad de empleados por título de trabajo:**

```sql
SELECT jobTitle, COUNT(*) AS cantidad_empleados FROM employees GROUP BY jobTitle;
```

### Consultas de múltiples tablas

1. **Calcular el total de pagos recibidos por cada cliente:**

   ```sql
   SELECT customerNumber, SUM(amount) AS total_pagos FROM payments GROUP BY customerNumber;

   ```

2. **Obtener el promedio del límite de crédito de los clientes por país:**

   ```sql
   SELECT country, AVG(creditLimit) AS promedio_credito FROM customers GROUP BY country;

   ```

3. **Calcular el total de órdenes realizadas por cada cliente:**

   ```sql
   SELECT customerNumber, COUNT(orderNumber) AS total_ordenes FROM orders GROUP BY customerNumber;

   ```

4. **Encontrar la cantidad total de productos pedidos por cada cliente:**

   ```sql
   SELECT o.customerNumber, SUM(od.quantityOrdered) AS total_productos FROM orders o INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY o.customerNumber;

   ```

5. **Calcular el total de ventas (cantidad ordenada por precio cada uno) por cada cliente:**

   ```sql
   SELECT o.customerNumber, SUM(od.quantityOrdered * od.priceEach) AS total_ventas FROM orders o INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY o.customerNumber;

   ```

6. **Obtener el promedio de la cantidad de productos en stock por línea de productos:**

   ```sql
   SELECT productLine, AVG(quantityInStock) AS promedio_stock FROM products GROUP BY productLine;

   ```

7. **Calcular el total de pagos recibidos por cada país:**

   ```sql
   SELECT c.country, SUM(p.amount) AS total_pagos FROM payments p INNER JOIN customers c ON p.customerNumber = c.customerNumber GROUP BY c.country;

   ```

8. **Encontrar el promedio de ventas (cantidad ordenada por precio cada uno) por cada empleado:**

   ```sql
   SELECT e.employeeNumber, AVG(od.quantityOrdered * od.priceEach) AS promedio_ventas FROM employees e INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber INNER JOIN orders o ON c.customerNumber = o.customerNumber INNER JOIN orderdetails od ON o.orderNumber = od.orderNumber GROUP BY e.employeeNumber;

   ```

9. **Calcular el total de órdenes gestionadas por cada empleado:**

   ```sql
   SELECT e.employeeNumber, COUNT(o.orderNumber) AS total_ordenes FROM employees e INNER JOIN customers c ON e.employeeNumber = c.salesRepEmployeeNumber INNER JOIN orders o ON c.customerNumber = o.customerNumber GROUP BY e.employeeNumber;

   ```

10. **Obtener la cantidad total de productos vendidos por cada línea de productos:**

    ```sql
    SELECT p.productLine, SUM(od.quantityOrdered) AS total_productos_vendidos FROM products p INNER JOIN orderdetails od ON p.productCode = od.productCode GROUP BY p.productLine;

    ```

11. **Encontrar el promedio de la cantidad de productos ordenados por cada cliente:**

    ```sql
    
    ```

12. **Calcular el total de ventas realizadas en cada país:**

    ```sql
    
    ```

13. **Obtener el promedio del precio de compra de los productos por línea de productos:**

    ```sql
    
    ```

14. **Encontrar la cantidad total de productos vendidos por cada vendedor:**

    ```sql
    
    ```

15. **Calcular el total de pagos recibidos por cada vendedor:**

    ```sql
    
    ```

16. **Obtener el promedio del límite de crédito de los clientes atendidos por cada vendedor:**

    ```sql
    
    ```

17. **Encontrar el total de ventas realizadas por cada oficina:**

    ```sql
    
    ```

18. **Calcular la cantidad media de productos pedidos por cada cliente:**

    ```sql
    
    ```

19. **Obtener el total de pagos realizados en cada año:**

    ```sql
    
    ```

20. **Encontrar el promedio del precio de venta (priceEach) de los productos por línea de productos:**

    ```sql
    
    ```