import { Entity } from "./Entity";

export  class Fabricante extends Entity {
   
    nome: string;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    public readonly nome_length = 50;
}
