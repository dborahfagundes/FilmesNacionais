# Filmes Nacionais API
O acesso ao lazer e à cultura é um direito garantido pela Constituição, mas a desigualdade social ainda limita esse direito no Brasil.
O cinema, além de entretenimento, é uma poderosa ferramenta de educação e transformação social. Projetos como o Cinema de Rua buscam democratizar o acesso ao cinema, levando filmes nacionais a comunidades carentes. 
Inspirada por essa ideia, desenvolvi uma API de Filmes Nacionais, que permite gerenciar uma coleção de filmes brasileiros, como parte do meu projeto no curso Programadores do Amanhã.

## Tecnologias usadas

- **Node.js**: 14
- **Express**: 4.19.2
- **Cors**: 2.8.5

## Como rodar a API

### 1. Clone o repositório
```
git clone https://github.com/dborahfagundes/FilmesNacionais.git
```
### 2. Inicie a API
```
npm run dev
```

A Api deve rodar no http://localhost:3000/api/filmes.

![image](https://github.com/user-attachments/assets/fc7c7d30-5b85-4549-927d-39655802f80b)


### 3. Teste os EndPoints
Você pode usar o Postman ou o Insomnia para testar os EndPoints

Metodo| Descrição | Endpoint
---|---|---
`POST`| Criar filme | `/api/filmes`
`GET`| Retorna todos os filmes| `/api/filmes`
`GET`| Retorna filme por ID| `/api/filmes/:id`
`PUT`| Atualizar filme por ID| `/api/filmes/:id`
`DELETE`| Deleta filme por ID| `/api/filmes/:id`

* Body POST
```
{
  "titulo": "Novo Filme", STRING
  "diretor": "Diretor Exemplo", STRING
  "ano": 2024, INTEGER
  "imagem": "novo_filme.jpg" STRING (Opcional)
}
```

* Body PUT
```
{
  "titulo": "Filme Atualizado", STRING
  "diretor": "Novo Diretor", STRING
  "ano": 2023, INTEGER
  "imagem": "filme_atualizado.jpg" STRING (Opcional)
}
```

### Contribuição <3

Sinta se a vontade para contribuir e adicionar funcionalidades. Crie uma nova branch para suas alterações e faça a pull request.

Espero que goste!
