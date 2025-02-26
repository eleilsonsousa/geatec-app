import { Entity } from "./Entity";
import { Fabricante } from "./Fabricante";
import { ProdutoCategoria } from "./ProdutoCategoria";
import { Unidade } from "./Unidade";

export class Produto extends Entity {

    nome: string;
    precoCompra: number;
    precoVenda: number;
    categoria: ProdutoCategoria = new ProdutoCategoria();
    unidade: Unidade = new Unidade();
    fabricante: Fabricante = new Fabricante();
    observacao: string;
    criadoEm: Date;
    atualizadoEm: Date;

    /**  FIELDS LENGTH's */
    public readonly nome_length = 50;
    public readonly observacao_length = 100;
    public readonly precoCompra_length = 7;
    public readonly precoVenda_length = 7;
    public readonly unidade_length = 3;
    public readonly categoria_length = 30;
    public readonly fabricante_length = 30;

}
