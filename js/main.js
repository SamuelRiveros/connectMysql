//Customers

import { getAllOrderdetailsByCustomers, getAllCustomersByCountryANdCreditLimit, getAverageCreditLimitOfAllCustomers, getAverageCreditLimitOfCustomersByCountry, getAverageCreditLimitOfCustomerForEachSeller} from "./module/customers.js";

//products
import { getAllProductsDescription, getAllProductsWithItsLinesDescription,  } from "./module/product.js";

import {EmployeesFromSanFrancisco, getAllEmployeesByreport, getTotalQuantityOfEmployees, getQuantityEmployeesByJobTitle, getAverageSalesForEachEmployee, getTotalManagedOrdersForEachEmployee} from "./module/employees.js"

import {getAllQuantityOfficesForEachCountry, TotalSalesPerOffice} from "./module/offices.js"



console.log(await getAllProductsWithItsLinesDescription({}));