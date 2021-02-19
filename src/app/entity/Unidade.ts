import { Entity } from "./Entity";

export  class Unidade  extends Entity {
 
    nome: string;
    sigla: string;
    descricao: string;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    readonly nome_length = 50;
    readonly sigla_length = 3;
    readonly descricao_length = 80;
}
