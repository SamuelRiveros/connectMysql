//Customers

import { getAllOrderdetailsByCustomers } from "./module/customers.js";

//products
import { getAllProductsDescription, getAllProductsWithItsLinesDescription } from "./module/product.js";



console.log(await getAllProductsWithItsLinesDescription({}));