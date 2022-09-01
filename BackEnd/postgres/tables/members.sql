BEGIN TRANSACTION;
CREATE TABLE members (
    id serial PRIMARY KEY,
    membername VARCHAR(100) NOT NULL,
    memberid VARCHAR(100),
    membertelephonenumber INT,
    memberemail TEXT,
    memberaddress VARCHAR(100),
    memberassociatedroles VARCHAR(100),
    memberaccumulatedexp VARCHAR(100)
);
COMMIT;