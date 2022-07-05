//IMPORTAÇÕES NECESSÁRIAS
import express, { Express, Request, Response } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { formPortRouter } from "./router/formPort";

const app: Express = express()
app.use(express.json());
app.use(cors());

app.use("/portfolio", formPortRouter)
//CRIAÇÃO DO SERVIDOR

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});