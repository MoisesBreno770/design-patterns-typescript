import { CEOBudgetHandler } from "./ceo-budget-handler";
import { CustomerBudget } from "./customer-budget";
import { DirectorudgetHandler } from "./director-budget-handler";
import { ManagerBudgetHandler } from "./manager-budget-handler";
import { SellerBudgetHandler } from "./seller-budget-handler";

const customerBudget = new CustomerBudget(50001);

const seller = new SellerBudgetHandler();
seller.setNextHandler(new ManagerBudgetHandler()).setNextHandler(new DirectorudgetHandler()).setNextHandler(new CEOBudgetHandler());

seller.handle(customerBudget);