import { Cliente } from "./Cliente";
import { Entity } from "./Entity";
import { OrdemServicoItemProd } from "./OrdemServicoItemProd";
import { OrdemServicoItemServ } from "./OrdemServicoItemServ";
import { OrdemServicoItemStatus } from "./OrdemServicoItemStatus";

export class OrdemServico extends Entity {

    dataRecebimento: Date;    
    dataRealizacao: Date;   
    dataEntrega: Date;  
    valorTotalProdutos: number;  
    valorTotalServicos: number;  
    desconto: number;    
    totalOrdemServico: number;    
    equipamentos: string;  
    defeitos: string;  
    laudoTecnico: string;  
    garantia: string;       
    status: OrdemServicoItemStatus;
    itensProdutos: OrdemServicoItemProd[];
    itensServicos: OrdemServicoItemServ[]; 
    cliente: Cliente;  
    criadoEm: Date;
    atualizadoEm: Date;
}

  

