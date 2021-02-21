import { Entity } from "./Entity";

export class Cliente extends Entity {

   
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
    public readonly nome_length = 100;
    public readonly endereco_length = 150;
    public readonly cidade_length = 30;
    public readonly uf_length = 2;
    public readonly cep_length = 10;
    public readonly cpf_length = 14;
    public readonly cnpj_length = 18;
    public readonly razaoSocial_length = 100;
    public readonly fantasia_length = 100;
    public readonly telefone_length = 15;
    public readonly celular_length = 15;
    public readonly email_length = 100;
    public readonly complemento_length = 100; 
    
}
