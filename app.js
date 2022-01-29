const http = require('http') // Requerindo-importando modulo HTTP

// Criando Servidor com Node.js
http.createServer((req, res) =>{ // Criamos um Server e passamos uma callback, que no caso é uma arrow function.
    res.writeHead(200, {"Content-type":"text/plain; charset=utf-8"}) // Primeiro param desse metodo - .writeHead() - é um status code o, 200-significa: OK, segundo param é um objeto que diz qual tipo de conteudo vai nesse cabeçalho. Tipo uma configuração preparando o browser para receber a mensagem que queremos mostrar no Client-side. "charset=utf-8" - É a especifição de caracteres/letras que será usado ali.

        //Criando Rotas 
        switch(req.url){ //.url é uma propriedade que contem o que o User/Client digitou na URL do Browser.
            case "/": // Caso ela seja "/"...
                res.end('Você está na Home!') // Responde isso ao Client. Mesma coisa nos outros Case.
                break; 
            case "/contato":
                res.end("Você está na pagina Contato")
            default:
                res.end("Você está no Meu servidor!") // qualquer rota que não seja as citadas acima terá essa mensagem exibida no Client-side como resposta.
        }

}).listen(2022, "localhost"); // Aqui nos passamos como parms da função listen em qual porta estará nosso Server, e o hostname(Hostname não é necessario).