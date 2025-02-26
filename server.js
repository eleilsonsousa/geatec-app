var express  = require('express');
var app      = express();                                         
var bodyParser = require('body-parser');  
const path = require("path");  
 var cors = require('cors');  

                                        
app.use(bodyParser.urlencoded({'extended':'true'}));            
app.use(bodyParser.json());                                     
app.use(cors());
 
const configs = {
    caminho: "www", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos. Troque "myapp" pelo nome da sua aplicação
    forcarHTTPS: false, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3000
}

if (configs.forcarHTTPS) //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
    app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
        if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP
            res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
        else //Se a requisição já é HTTPS
            next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    });

app.use(express.static(configs.caminho)); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get("*", (req, res) => {// O wildcard '*' serve para servir o mesmo index.html independente do caminho especificado pelo navegador.
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.listen(configs.port, () => {
    console.log(`Escutando na ${configs.port}!`);
});

