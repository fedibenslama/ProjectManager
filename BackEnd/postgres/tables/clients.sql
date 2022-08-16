BEGIN TRANSACTION;

CREATE TABLE clients(
    id serial PRIMARY KEY,
    clientname VARCHAR(100),
    type VARCHAR(100),
    activitysector VARCHAR(100),
    telephonenumber int,
    email text,
    website text,
    joined VARCHAR(100)

);

COMMIT;