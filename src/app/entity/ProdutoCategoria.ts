import { Entity } from "./Entity";

export  class ProdutoCategoria  extends Entity {
 
    nome: string;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    public readonly nome_length = 30;
}
