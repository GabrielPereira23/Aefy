# Aefy

## Introdução

 Olá! Fiz alguns cursos e chegou a hora de criar projetos para colocar meus conhecimentos a prova. Essa é uma implementação bem simples que tem o objetivo de facilitar as requisições assíncronas feitas através do Ajax, e sim, eu tenho noção que já existem soluções para isso, porém, gosto de implementar coisas "do zero", por isso estarei desenvolvendo essa de minha autoria, inicialmente ela se chamará Aefy, sigla para "Ajax easier for you", "Ajax mais fácil para você" em português.



## Como funciona?

É uma implementação realmente simples, ela consiste em uma classe com alguns métodos que facilitam as requisições pelo Ajax, por exemplo, você não precisa digitar ```var exemplo = new XMLHttpRequest();```, a classe possui métodos que fazem isso por você.



## Como utilizar?

 #### Passo 1
  Primeiro você deve adicionar uma tag script com o atributo src apontado para: **https://cdn.jsdelivr.net/gh/GabrielPereira23/aefy@main/Aefy.js**, 
 
 #### Passo 2
  Você instância a classe do Aefy ```const aefy = new Aefy();```, a partir de agora você só utilizara dois métodos.
  
 #### Passo 3 
  Agora você utiliza o método ```aefy.prepare(url, método, conteudo)``` para preparar a requisição, para ele você passa como parâmetros a **URL** da sua requisição, depois o **Método** (POST ou GET), e por fim, um **Objeto** com o conteúdo da sua requisição, exemplo: ```aefy.prepare('urlexemplo.php', 'get', {nome: 'Pedro', sobrenome: 'Silva'})```, veja como ficaria o url da requisição: ```urlexemplo.php?nome=Pedro&sobrenome=Silva```, com isso a sua requisição está preparada.

 #### Passo 4 
  Por fim, você utiliza o método ```aefy.request(callback)```, ele irá fazer a requisição utilizando os parâmetros que você passou no método "prepare", para captar a reposta do Backend, você utiliza a função de **Callback** passada, assim que obtiver uma resposta do Backend, essa função será chamada e a resposta será passada como um parâmetro dela.