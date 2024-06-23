//Customers

import { getAllOrderdetailsByCustomers, getAllCustomersByCountryANdCreditLimit, getAverageCreditLimitOfAllCustomers, getAverageCreditLimitOfCustomersByCountry, getAverageCreditLimitOfCustomerForEachSeller} from "./module/customers.js";

//products
import { getAllProductsDescription, getAllProductsWithItsLinesDescription, getProductStock, AverageProductPrice, AverageProductOrderQuantity, TotalProductsPrice, getAverageSuggestedPriceOfProducts, AverageSuggestedProducts, EachCustomerProductBought, TotalProductQuantity, ProductAveragePerCustomer, TotalProductQuantityPerCustomer} from "./module/product.js";

import {EmployeesFromSanFrancisco, getAllEmployeesByreport, getTotalQuantityOfEmployees, getQuantityEmployeesByJobTitle, getAverageSalesForEachEmployee, getTotalManagedOrdersForEachEmployee} from "./module/employees.js"

import {getAllQuantityOfficesForEachCountry, TotalSalesPerOffice} from "./module/offices.js"

import {TotalPaymentAmmountFromCustomer, getTotalPayments, getTotalPaymentsFromEachCustomer, getTotalPaymentsForEachCountry, getTotalPaymentsForEachSeller, getTotalPaymentsEachYear} from "./module/payments.js"

import {AverageQuantityProductsInStockByProductsLine, AverageBuyPriceProductsfromProductsLine, AverageBuyPriceProductsForEachCustomer, getAverageBuyPriceProductsByProductLine} from "./module/productLines.js"

import {GetAllShippedOrders, AllOrdersByCustomersCountry, AllDetailsOrdersByCustomerNumber, TotalOrdersFromEachCustomer, getTotalSalesForEachCustomer, TotalSalesFromEachCountry} from "./module/orders.js"


console.log(await getAllProductsWithItsLinesDescription({}));