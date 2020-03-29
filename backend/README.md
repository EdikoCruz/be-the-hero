# BE THE HERO (BACKEND)

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

## Entities

- NGO (Non-Governmental Organization)
- Request (monetary help request)

## Routers

VERB   | URN          | RESPONSE
---    | ---          | ---
GET    | /ngos        | all NGOs
POST   | /ngos        | created NGO
GET    | /me          | logged-in NGO
GET    | /me/requests | all logged-in NGO's requests
POST   | /me/requests | created request
DETELE | /me/requests | deleted request
GET    | /requests    | all requests
POST   | /sessions    | created token session
