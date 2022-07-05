import Express from "express";
import { FormPortBusiness } from "../business/FormPortBusiness";
import { FormPortData } from "../data/FormPortData";
import { FormPortController } from "../controller/FormPortController";

const formPortData = new FormPortData()
const formPortBussiness = new FormPortBusiness(
    formPortData
)

export const formPortRouter = Express.Router() 
const formPortController = new FormPortController(formPortBussiness)

formPortRouter.post("/mensagem", (req, res) => {
    formPortController.formPortfolio(req, res)
})