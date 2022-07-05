import { FormPortDTO } from "../dto";
import { BaseDataBase } from "./UserDataBase";

export class FormPortData extends BaseDataBase {
    private TABLE_NAME = "Mensagens";

    async formPortfolio(input:FormPortDTO){
        try {
            const result = await this.connection()
            .insert(input)
            .into(this.TABLE_NAME)
            return result
        } catch (error:any) {
            throw new Error(error.message);
        }   
    }

}