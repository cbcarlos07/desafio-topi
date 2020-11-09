# <a id="begin"> Desafio TOPi

## [1. Introdução](#intro)
## [2. O que foi usado](#uso)
## [3. Banco de dados](#db)
## [4. Script para inicialização do banco](#antes)
## [5. Executando o projeto](#run)
## [6. SOLID](#solid)
## [7. Sequelize](#sequelize)
## [8. Testes Rest](#rest)
## [9. Detalhes adicionais](#detail)




## <a id="intro">1. Introdução

Este projeto é para avaliação técnica de uma desafio FullStack para a TOPi.

Este projeto foi desenvolvido em NodeJS (v12.17.0) com TypeScript (^3.9.3)

## <a id="uso"> 2. O que foi usado

A seguir, serão apresentados os principais pacotes que foram usados no projeto

**NO BACKEND**

* <b>Restify</b>

Framework NodeJS para a criação de servidor 


* <b>Sequelize</b>

ORM para auxiliar na comunicação com o banco de dados

* <b>MySQL v8.0 </b>

* md5

Para criptografia de senha

O banco de dados usado no projeto

**NO FRONTEND**

* ReactJS


[Voltar ao inicio](#begin)

## <a id="db"> 3. O Banco de Dados

O Banco de dados utilizado no projeto foi o MySQL na versão 8.0.

O repositório do Docker Compose do banco de dados utilizado encontra-se [aqui](https://github.com/cbcarlos07/docker-mysql)

<b>NOTA</b>

Tenha o docker instalado antes

Antes de executar o comando do docker-compose, primeiro crie a rede interna do docker:

    docker network create -d bridge mysql-network


Certifique-se de primeiro deixar esse __container__ em execução antes de prosseguir com a inicalização do projeto

O comando para rodar após o __container__ mysql dentro do arquivo docker-compose.yml é preciso executar o seguinte texto no terminal:

    docker-compose up -d

Este comando deixará o banco de dados executando

[Voltar ao inicio](#begin)

## <a id="antes"> 4. Script para inicialização do banco

Antes de rodar o projeto faz-se necessária a execução do seguinte comando na pasta raiz

    npm i 

Isso irá instalar os pacotes necessários para o projeto


[Voltar ao inicio](#begin)

## <a id="run"> 5. Executando o projeto

**BACKEND**

Após o banco de dados estiver em execução, os pacotes estiverem instalados, o script de base ser executado, aí o projeto poderá entrar em operação. Para isso, dê o comando:

    npm run dev

**FRONTEND CLIENTE**

Depois que a API estiver inicializada e em execução, dentro da raíz do frontend é necessário rodar o comando:

        ng start



[Voltar ao inicio](#begin)


## <a id="solid"> 6. SOLID

Este projeto foi baseado na arquitetura SOLID de acordo com [este artigo](https://medium.com/@diomalta/como-organizar-e-estruturar-projetos-com-node-js-4845be004899)

[Voltar ao inicio](#begin)



## <a id="rest"> 7. Testes Rest    

Para o teste de API foi usada a ferramenta [Insomnia](https://insomnia.rest/download/)

Na pasta [rest](https://github.com/cbcarlos07/desafio-topi/tree/master/assets) deste projeto tem o arquivo com os testes

Basta importar dentro da ferramenta o arquivo `json` e as requisiçoes estão prontas

Execução dos testes é baseado no banco de dados de teste.

[Voltar ao inicio](#begin)


## <a id="detail"> 8. Detalhes adicionas

O frontend consulta a api. A API consulta o servidor de repositórios com os parâmetros necessários

![alt text](https://github.com/cbcarlos07/desafio-topi/blob/master/assets/Capturar.JPG)



[Voltar ao inicio](#begin)




