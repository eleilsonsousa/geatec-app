import { Entity } from "./Entity";

export default class Produto extends Entity {

    nome: string;
    precoCompra: number;
    precoVenda: number;
    observacao: string;
    unidade: string;
    categoria: string;
    criadoEm: Date;
    atualizadoEm: Date;

      /**  FIELDS LENGTH's */
      readonly nome_length = 50;
      readonly observacao_length = 100;
      readonly precoCompra_length = 6;
      readonly precoVenda_length = 6;
      readonly unidade_length = 3;
      readonly categoria_length = 30;    

}
