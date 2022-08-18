BEGIN TRANSACTION;
CREATE TABLE requirements (
    id serial PRIMARY KEY,
    requirementtitle VARCHAR(100) NOT NULL,
    requirementidcode VARCHAR(100),
    requirementdescription TEXT,
    requirementstatus VARCHAR(100),
    requirementcreatedby VARCHAR(100),
    requirementassociatedproject VARCHAR(100),
    requirementmainrequirement VARCHAR(100)
);
COMMIT;