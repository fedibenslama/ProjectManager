BEGIN TRANSACTION;

CREATE TABLE dashboard(
    id serial PRIMARY KEY,
    entries BIGINT DEFAULT 0,
    joined TIMESTAMP NOT NULL,
    numberofprojects int,
    numberofusers int

);

COMMIT;