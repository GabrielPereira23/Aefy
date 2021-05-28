# Aefy

## Introdução

 Olá! Fiz alguns cursos e chegou a hora de criar projetos para colocar meus conhecimentos a prova. Essa é uma implementação bem simples que tem o objetivo de facilitar as requisições assíncronas feitas através do Ajax, e sim, eu tenho noção que já existem soluções para isso, porém, gosto de implementar coisas "do zero", por isso estarei desenvolvendo essa de minha autoria, inicialmente ela se chamará Aefy, sigla para "Ajax easier for you", "Ajax mais fácil para você" em português.


 ## Como funciona?

 É uma implementação realmente simples, ela consiste em uma classe com alguns métodos que facilitam as requisições pelo Ajax, no caso você não precisa digitar ```var exemplo = new XMLHttpRequest();```, a classe possui métodos que fazem isso por você.

 ## Como utilizar?

 Primeiro você deve adicionar uma tag **script** com o atributo **src** apontando para o arquivo **Aefy.js** deste repositório, ao meu ver a melhor maneira é utilizando o CDN gratuito **JSDelivr**, ficaria assim: ```<script src="https://cdn.jsdelivr.net/gh/GabrielPereira23/aefy@main/Aefy.js"></script>```, após adicionar a tag, no seu arquivo .js, você instância a classe do Aefy ```const aefy = new Aefy();```, a partir de agora você só utilizara dois métodos, o ```aefy.prepare(url, método, conteudo)```.