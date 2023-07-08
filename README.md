# <p align="center">Aequat Omnis cinis</p>

Aequat Omnis cinis é um sistema de compra de chaves de jogos que podem ser utilizados em outras plataformas, permitindo que os clientes tenham acesso a uma gama de jogos a disposição em um único lugar, facilitando assim a busca e obtenção destes produtos de uma maneira prática e acessível.<br>
O sistema preve e implementa funcionalidades para 3 possiveis usuários: Usuário, Cliente, Administrador.<br>

<div align="center">
  <p>
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/zSchwi/AequatOmnis?color=39C2D8&logoColor=39C2D8&style=for-the-badge">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/zSchwi/AequatOmnis?color=39C2D8&logoColor=39C2D8&style=for-the-badge">
  </p>
</div>

## 🖥 Principais Funcionalidades:
- Login (Cliente/ADM) RF
- Cadastro (Cliente/ADM) RF
- Gerenciar perfil de usuário RF
   - Cadastrar
   - Atualizar 
   - Excluir 
   - Visualizar
- Gerenciar Produto RF
   - Cadastrar
   - Atualizar 
   - Excluir 
   - Visualizar
- Gerenciar Vendas RF
   - Cadastra
   - Atualiza
   - Visualiza
   - Exclui
- Gerenciar Carrinho RF
   - Visualizar produtos adicionados
   - Excluir produtos
   - Alterar quantidade

## 👨🏾‍🦱 Usuários e entidades do sistema:
#### Usuários:
- Usuário(não logado/cadastrado)
- Cliente
- Administrador
#### Entidades:
- Cliente
- Produto
- Venda

## 🔧 Tecnologias utilizadas:
1. FrontEnd:
```
   ◉ VueJs 3
   ◉ Vuetify 3.3 (Icarus)
   ◉ HTML 5
   ◉ CSS 3
   ◉ JS
```
2. BackEnd:
 ```
   ◉ NodeJS 18.16
   ◉ Nodemon 2.0
   ◉ Multer 1.4
   ◉ Bcryptjs (*)
   ◉ Crypto (*)
```
3. Banco de Dados:
```
   ◉ mongoDB 6.0
   ◉ mongoose
```
4. Servidor:
```
   ◉ npm serve
   ◉ Apache2
```

## Regras de uso do git
#### Regras de commit
```
   - Limite o assunto do commit a 50 caracteres.
   - Utilizar verbos no imperativo (atualizado, alterado, adicionado, etc.).
   - Procure ser direto e explicativo em seus commits.
   - Realize pequenos commits, sempre mantendo a ultima versão mais estável para o commit atual.
   - Não utilizar pontos finais.
```

#### Uso de branches
```
   - Caso haja alteração na documentação, alterar diretamente na main.
   - Caso haja alteração no código, utilize uma branch separada.
   - Não realizar merge da branch para a main sem que o código esteja funcional ou ser apenas um teste.
```

#
Integrantes: [Lucas Gomes Colombo](https://github.com/LucasgColombo), [Guilherme Fabrício](https://github.com/GuiDev115), [Rafael Furtado](https://github.com/zSchwi)

(*) Se caso der tempo para aplicar, iremos colocar criptografia no projeto
