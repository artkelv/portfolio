import { FormPortData } from "../data/FormPortData";
import { FormPortDTO } from "../dto";

export class FormPortBusiness {
  constructor(private dataBasePort: FormPortData) {}
  async formPortfolio(input: FormPortDTO) {
    const { nome, email, telefone, mensagem } = input;

    if (!nome || !email || !telefone || !mensagem) {
      throw new Error("Os campos não foram preenchidos corretamente.");
    }
    await this.dataBasePort.formPortfolio(input);
    
    return {message:"Mensagem enviada com sucesso!"};
  }
}
