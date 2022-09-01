BEGIN TRANSACTION;
CREATE TABLE tasks (
    id serial PRIMARY KEY,
    tasktitle VARCHAR(100) NOT NULL,
    taskidcode VARCHAR(100),
    taskdescription TEXT,
    taskmaintask VARCHAR(100),
    taskspecification VARCHAR(100),
    tasknature VARCHAR(100),
    taskstatus VARCHAR(100),
    taskpriority VARCHAR(20),
    taskexpectedduration VARCHAR(20),
    taskcompletiontime VARCHAR(100),
    taskmembincharge VARCHAR(100)
);
COMMIT;