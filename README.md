# Aefy

## Introdução

 Olá! Fiz alguns cursos e chegou a hora de criar projetos para colocar meus conhecimentos a prova. Essa é uma implementação bem simples que tem o objetivo de facilitar as requisições HTTP feitas através do Ajax, e sim, eu tenho noção que já existem soluções para isso, porém, gosto de implementar coisas "do zero", por isso estarei desenvolvendo essa de minha autoria, inicialmente ela se chamará Aefy, sigla para **Ajax Easier For You**, "Ajax mais fácil para você" em português.

## Instalação
Existem três formas de instalar o Aefy:

1. Adicionando uma tag **script** no Html com o atributo **src** setado com o endereço do arquivo **Aefy.js** do repositório, recomendo a utilização do CDN gratuito **jsDelivr**, veja abaixo:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/GabrielPereira23/Aefy@main/Aefy.js"></script>
    ```

2. O Aefy também está presente no gerenciador de pacotes **NPM** como um módulo, use o comando abaixo para baixar:

    ```
    npm install aefy
    ```
    Depois é só importar a Classe para seu script
    ```javascript
    import Aefy from 'Aefy';
    ```
3. Você também pode simplesmente baixar o arquivo **Aefy.js** e importar ele através da tag **script**  (:

## Como utilizar?

A utilização é realmente simples, caso algo esteja errado será mostrado no console do navegador, sem mais delongas, veja como utilizar:
1. Primeiro você instância a Classe **Aefy**

    ```javascript
    const aefy = new Aefy();
    ```

  2. Agora você precisa preparar sua requisição, para isso, utiliza-se o método **prepare(url, método, objeto)**, o primeiro parâmetro é a URL para qual a requisição será feita, o segundo parâmetro é o método da requisição, os famosos GET e POST, e o ultimo parâmetro é um objeto com o conteúdo da sua requisição, sendo cada atributo um valor que será enviado através da requisição (me aprofundei nisso no tópico abaixo)

      ```javascript
      aefy.prepare('urlexemplo.php','get',{nome: 'Gabriel', sobrenome: 'Pereira'});
      ```
2. Por fim, você utiliza o método **request(callback)** para efetuar a requisição, nele você passa como parâmetro uma função de callback que irá receber os valores recebidos como resposta da requisição

    ```javascript
    aefy.request((resposta) => {
    	console.log(`A resposta da requisição foi: ${resposta}`);
    });
    ```
  ## Objeto de conteúdo

Um ponto que eu gosto muito dessa implementação, é o fato de você passar os valores do corpo da requisição através de um objeto, sendo cada atributo um valor, veja só:

Os valores deste objeto:
```javascript
{
	modelo: "Fusion",
	fabricante: "Ford"
}
```
Seriam enviados através do método GET assim:

```
 exemplo.com/exemplo.php?modelo=Fusion&fabricante=Ford
```

E do método POST assim:
```http
POST / HTTP/1.1
Host: exemplo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 29

modelo=Fusion&fabricante=Ford
```

## Erros e limitações

Como ainda estou entrando nesse mundo mágico da programação, é possível que hajam erros nessa implementação,  porém, pretendo corrigi-los e com o tempo ir aprimorando o código-, já estou ciente de algumas coisas nas quais irei melhorar e em outras que preciso corrigir, e por favor, se leu até aqui, me dê seu feedback (:
