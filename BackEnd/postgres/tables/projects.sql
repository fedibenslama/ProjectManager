BEGIN TRANSACTION;

CREATE TABLE projects (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    type VARCHAR(100),
    usedsolutions VARCHAR(100),
    associatedservers VARCHAR(100),
    associatedclient VARCHAR(100),
    status VARCHAR(100),
    projectprogress int,
    startdate VARCHAR(20),
    finishdate VARCHAR(20),
    projectdescription TEXT

);

COMMIT;