import { Entity } from "./Entity";

export class Cliente extends Entity {

    id: number;
    nome: string;
    endereco: string;
    cidade: string;
    uf: string;
    cep: string;
    cpf: string;
    cnpj: string;
    razaoSocial: string;
    fantasia: string;
    telefone: string;
    celular: string;
    email: string;
    complemento: string;
    isPessoaJuridica: boolean;
    criadoEm: string;
    atualizadoEm: string;

    /**  FIELDS LENGTH's */
    readonly nome_length = 100;
    readonly endereco_length = 150;
    readonly cidade_length = 30;
    readonly uf_length = 2;
    readonly cep_length = 10;
    readonly cpf_length = 14;
    readonly cnpj_length = 18;
    readonly razaoSocial_length = 100;
    readonly fantasia_length = 100;
    readonly telefone_length = 15;
    readonly celular_length = 15;
    readonly email_length = 100;
    readonly complemento_length = 100; 
    
}
