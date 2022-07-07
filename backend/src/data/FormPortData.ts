import { FormPortDTO } from "../dto";
import { BaseDataBase } from "./UserDataBase";

export class FormPortData extends BaseDataBase {
    private TABLE_NAME = "Mensagens";

    async formPortfolio(input:FormPortDTO):Promise<void>{
        try {
            await this.connection(this.TABLE_NAME).insert(
                {
                    nome:input.nome,
                    email:input.email,
                    telefone:input.telefone,
                    mensagem:input.mensagem
                }
                )
        } catch (error:any) {
            throw new Error(error.message);
        }   
    }
}