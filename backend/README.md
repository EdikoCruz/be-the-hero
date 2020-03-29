# *BE THE HERO (BACKEND)*

## Entidades

### ONG (Organização não governamental)

No código essa entidade será chamada de *NGO (Non-Governmental Organization)*.

Atributos:

- *id*
- *name*
- *email*
- *whatsapp*
- *city*
- *state*
- *createdAt*

### pedido de ajuda monetária

No código essa entidade será chamada de *Request (monetary help request)*.

Atributos:

- *title*
- *description*
- *value*
- *ngoId*

## Rotas

VERBO    | *URN*          | RESPOSTA (FLUXO PRINCIPAL)
---      | ---            | ---
*GET*    | */ngos*        | Todas as ONGs
*POST*   | */ngos*        | Id da ONG criada (201 *Created*)
*POST*   | */sessions*    | Nome da ONG (201 *Created*)
*GET*    | */me/requests* | Todos os pedidos de ajuda da ONG logada
*POST*   | */me/requests* | O id do pedido de ajuda da ONG logada (201 *Created*)
*DETELE* | */me/requests* | Vazio (204 *No content*)
*GET*    | */requests*    | Todos os requests

## Roadmap

- [ ] refactor
    - [ ] URN
    - [ ] authorization
    - [ ] authentication
- [ ] complete
    - [ ] tests
    - [ ] validation
- [ ] add
    - [ ] documentation
    - [ ] lint