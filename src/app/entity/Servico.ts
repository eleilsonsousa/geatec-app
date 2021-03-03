import { Entity } from "./Entity";

export  class Servico  extends Entity {
 
    nome: string;
    preco: string;
    observacao: string;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    public readonly nome_length = 50;
    public readonly preco_length = 9;
    public readonly observacao_length = 100;
}
