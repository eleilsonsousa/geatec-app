import { Entity } from "./Entity";

export class Unidade extends Entity {

    nome: string;
    sigla: string;
    descricao: string;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    public readonly nome_length = 50;
    public readonly sigla_length = 3;
    public readonly descricao_length = 80;
}
