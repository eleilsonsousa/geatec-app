import { Entity } from "./Entity";

export class Produto extends Entity {

    nome: string;
    precoCompra: number;
    precoVenda: number;
    categoria: string;
    unidade: string;
    observacao: string;
    criadoEm: Date;
    atualizadoEm: Date;

    /**  FIELDS LENGTH's */
    public readonly nome_length = 50;
    public readonly observacao_length = 100;
    public readonly precoCompra_length = 6;
    public readonly precoVenda_length = 6;
    public readonly unidade_length = 3;
    public readonly categoria_length = 30;

}
