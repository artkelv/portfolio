//IMPORTAÇÕES NECESSÁRIAS
import express, { Express, Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { formPortRouter } from "./router/formPort";
import { FormPortData } from "./data/FormPortData";
import { FormPortDTO } from "./dto";

const app: Express = express()
app.use(express.json());
app.use(cors());

app.use("/portfolio", formPortRouter)
//CRIAÇÃO DO SERVIDOR
export async function getHome(req: Request, res: Response): Promise<void>{
   res.status(200).send({
      feitoPorArthur:"Arthur Kelvim :)"
   })
 }
export async function teste(req: Request, res: Response) {
   const {nome, email, telefone, mensagem} = req.body
   const testeForm: FormPortDTO = {
      nome,
      email,
      telefone,
      mensagem
   }
   await new FormPortData().formPortfolio(testeForm)
   res.status(201).send("veja se inseriu")
} 
app.get("/", getHome);

app.post("/mess", teste)

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});