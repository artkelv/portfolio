import {Request, Response} from "express";
import { FormPortBusiness } from "../business/FormPortBusiness";
import { FormPortDTO } from "../dto";

export class FormPortController {
    constructor(
        private formPorfolioBusiness:FormPortBusiness
    ) {}
    async formPortfolio(
        req:Request,
        res:Response
    ){
        try {
            const {nome, email, telefone, mensagem} = req.body
            const form:FormPortDTO = {
                nome, 
                email,
                telefone,
                mensagem
            }
            const resultBusiness = await this.formPorfolioBusiness.formPortfolio(form)
            res.status(201).send({message:"Mensagem enviada com sucesso!", resultBusiness})
        } catch (error:any) {
            if(error){
                res.status(400).send({message:error.message})
            } else {
                res.status(500).send({message:"Erro no servidor"})
            }
        }
    }
}
//Att: correcao do back-end.