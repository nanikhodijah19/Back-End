import { Request, Response } from "express";
import { QueryError } from "mysql2";
import { IExpense } from "../type";
import db from "../config/db";



export const getExpenseV2=(req:Request, res:Response) => {
    db.query("SELECT * FROM expense", (err: QueryError, result: IExpense[])=>{
        if (err) {
            return res.status(400).send({
                status:"error",
                msg: err,
            });
        }
        return res.status(200).send({
            status:"ok",
            expense:result,
        });
    });
}

    