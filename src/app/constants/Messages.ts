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

    /** DIALOGS **************************************************/
    /************************************************************** */
    static dialogs_loading = 'Aguarde...';
    static dialogs_register_save = 'Registro salvo com sucesso.';
    static dialogs_register_no_exists = 'Registro já não existe.';
    static dialogs_register_delete = 'Registro excluído com sucesso.';
    static dialogs_register_delete_confirmation = 'Confirma a exclusão do registro?';

    static dialogs_confimation_title = 'Confirmação';
    static dialogs_confimation_yes = 'Sim';
    static dialogs_confimation_no = 'Não';
  

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
    static cliente_list_title = 'Dados do Cliente';
    static cliente_list_no_dados = 'Você ainda não tem clientes cadastrados. Comece a cadastrar!';




}
