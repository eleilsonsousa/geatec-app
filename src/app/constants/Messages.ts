export abstract class Messages {

    /** VALIDAÇÕES  **************************************************/
    /*************************************************************** */

    static field_required = 'Campo obrigatório.';
    static cpf_invalid = 'Entre com um cpf válido.';

    /** MENUS **************************************************/
    /************************************************************** */
    static app_component_menu_dashboard = 'Dashboard';
    static app_component_menu_cadastro = 'Cadastro';
    static app_component_menu_relatorios = 'Relatórios';
    static app_component_menu_configuracoes = 'Configurações';
    static app_component_menu_ordem_servico = 'Ordens de Serviço';

    /** DIALOGS **************************************************/
    /************************************************************** */
    static dialogs_loading = '';
    static dialogs_register_save = 'Registro salvo com sucesso.';
    static dialogs_register_no_exists = 'Registro já não existe.';
    static dialogs_register_delete = 'Registro excluído com sucesso.';
    static dialogs_register_delete_confirmation = 'Confirma a exclusão do registro?';

    static dialogs_confimation_title = 'Confirmação';
    static dialogs_confimation_yes = 'Sim';
    static dialogs_confimation_no = 'Não';
    static selects_cancel_text = 'Cancelar';


    /** FORMULÁRIOS **************************************************/
    /************************************************************** */

    /** cliente-cad */
    static cliente_cad_title = 'Dados do Cliente';
    static cliente_cad_tab_pessoa_fisica_title = 'Pessoa Física';
    static cliente_cad_tab_pessoa_juridica_title = 'Pessoa Jurídica';
    static cliente_cad_field_label_nome = 'Nome';
    static cliente_cad_field_label_razao_social = 'Razão Social';
    static cliente_cad_field_label_fantasia = 'Fantasia';
    static cliente_cad_field_label_inscricao_estadual = 'Inscrição Estadual';
    static cliente_cad_field_label_cpf = 'CPF';
    static cliente_cad_field_label_cnpj = 'CNPJ';
    static cliente_cad_field_label_endereco = 'Endereço';
    static cliente_cad_field_label_cidade = 'Cidade';
    static cliente_cad_field_label_uf = 'UF';
    static cliente_cad_field_label_cep = 'CEP';
    static cliente_cad_field_label_complemento = 'Complemento';
    static cliente_cad_field_label_telefone = 'Telefone';
    static cliente_cad_field_label_celular = 'Celular';
    static cliente_cad_field_label_email = 'Email';

    /** cliente-list */
    static cliente_list_title = 'Clientes';
    static cliente_list_no_dados = 'Você ainda não tem clientes cadastrados. Comece a cadastrar!';

    /** unidade-list */
    static unidade_list_title = 'Unidades';
    static unidade_list_no_dados = 'Você ainda não tem unidades cadastradas. Vamos cadastrar?';

    /** unidade-cad */
    static unidade_cad_title = 'Dados da Unidade';
    static unidade_cad_field_label_nome = 'Nome';
    static unidade_cad_field_label_sigla = 'Sigla';
    static unidade_cad_field_label_descricao = 'Descrição';

    /** produto-categoria-list */
    static produto_categoria_list_title = 'Categ. Produtos';
    static produto_categoria_list_no_dados = 'Sem categorias de produtos? Vamos cadastrar?';
    

    /** produto-categoria-cad */
    static produto_categoria_cad_title = 'Dados da Categoria';
    static produto_categoria_cad_field_label_nome = 'Nome';

    /** produto-categoria-list */
    static fabricante_list_title = 'Fabricantes';
    static fabricante_list_no_dados = 'Sem fabricantes de produtos? Vamos cadastrar?';

    /** produto-categoria-cad */
    static fabricante_cad_title = 'Fabricantes';
    static fabricante_cad_field_label_nome = 'Nome';

    /** servico-list */
    static servico_list_title = 'Serviços';
    static servico_list_no_dados = 'Você ainda não tem serviços por aqui. Vamos cadastrar?';

    /** produto-categoria-cad */
    static servico_cad_title = 'Serviços';
    static servico_cad_field_label_nome = 'Nome';
    static servico_cad_field_label_preco = 'Preço R$';
    static servico_cad_field_label_observacao = 'Observação';

    /** produto-list */
    static produto_list_title = 'Produtos';
    static produto_list_no_dados = 'Você ainda não tem produtos cadastrados. Vamos cadastrar?';
    static produto_list_no_preco_venda = 'Não possui preço de venda';


    /** produto-cad */
    static produto_cad_title = 'Dados do Produto';
    static produto_cad_field_label_nome = 'Nome';
    static produto_cad_field_label_preco_venda = 'Preço R$ (Venda)';
    static produto_cad_field_label_preco_compra = 'Preço R$ (Compra)';
    static produto_cad_field_label_categoria_produto = 'Categoria Prod.';
    static produto_cad_field_label_fabricante = 'Fabricante';
    static produto_cad_field_label_unidade = 'Unidade';
    static produto_cad_field_label_observacao = 'Observação';
    


    /** ordem-servico-list */
    static ordem_servico_list_title = 'Ordens de Serviço';
    static ordem_servico_list_no_dados = 'Você ainda não tem ordens de serviços cadastradas. Vamos cadastrar?';

    static ordem_servico_list_field_data = 'Data';
    static ordem_servico_list_field_valor_total = ' Valor Total';

     /** ordem-servico-cad */
     static ordem_servico_cad_title = 'Dados da Ordem de Serviço ';
     static ordem_servico_cad_tab_cabecalho_title = 'Cabeçalho';
     static ordem_servico_cad_tab_cabecalho_cliente = 'Cliente';
     static ordem_servico_cad_tab_cabecalho_select_cliente = 'Selecione um cliente';

     static ordem_servico_cad_tab_servicos_title = 'Serviços';

     static ordem_servico_cad_tab_produtos_title = 'Produtos';
    


}
