BEGIN TRANSACTION;
CREATE TABLE functionalities (
    id serial PRIMARY KEY,
    functitle VARCHAR(100) NOT NULL,
    funcidcode VARCHAR(100),
    funcdescription TEXT,
    funcstatus VARCHAR(100),
    funcassociatedreq VARCHAR(100),
    funcassociatedtasks VARCHAR(100),
    funcassociatedmemb VARCHAR(100),
    funcstartdate VARCHAR(20),
    funcfinishdate VARCHAR(20),
    funcduration VARCHAR(100)
);
COMMIT;