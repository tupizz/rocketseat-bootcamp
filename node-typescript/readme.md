# Criar banco de dados

docker run --name postgres_bootcamp -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

```zsh
  yarn typeorm migration:create -n CreateAppointments
  yarn typeorm migration:run
  yarn typeorm migration:revert
```

# Comandos úteis

```zsh
  yarn typeorm migration:create -n CreateUsers
  yarn typeorm migration:run
  yarn typeorm migration:show
  yarn typeorm migration:revert
  yarn typeorm migration:run
  yarn typeorm migration:show
  yarn typeorm -h
  yarn typeorm migration:revert -h
  yarn typeorm migration:revert
  yarn typeorm migration:run
  yarn dev:server
  git commit -m "Criacao da tabela de usuario + createdAt and updatedAt"
  yarn typeorm migration:create AlterProviderFieldToProviderId
  yarn typeorm migration:create -n AlterProviderFieldToProviderId
  yarn typeorm migration:revert
  yarn typeorm migration:run
```
