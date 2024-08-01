import { Router } from "express";
import { getExpenseV2 } from "../controllers/expense-v2.controller";


const expenseRouterV2 = Router()
expenseRouterV2.get("/", getExpenseV2)

export {expenseRouterV2}