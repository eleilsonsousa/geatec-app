import { Entity } from "./Entity";

export  class Servico  extends Entity {
 
    nome: string;
    preco: string;
    observacao: string;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    readonly nome_length = 50;
    readonly preco_length = 7;
    readonly dobservacao_length = 100;
}
