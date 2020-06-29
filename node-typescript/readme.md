docker run --name postgres_bootcamp -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

yarn typeorm migration:create -n CreateAppointments
yarn typeorm migration:run
yarn typeorm migration:revert
