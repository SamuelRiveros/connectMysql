import { connection } from "../../db/connection.js";

// Obtener los detalles de todos los pagos realizados por el cliente con el número de cliente 103
export const getAllOrderdetailsByCustomers = async({status=["Resolved", "Shipped"], id=103} = arg)=>{
    let [result] = await connection.execute(`
    select d.* 
    from customers c
    inner join orders o on c.customerNumber = o.customerNumber
    inner join orderdetails d on o.orderNumber = d.orderNumber
    where o.status in (${status.map((val,i) => (i+1 == status.length) ? `"${val}"` : `"${val}",`).join("")}) and c.customerNumber = ? 
    `, [id]);
    return result;
}
