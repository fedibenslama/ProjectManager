-- Deploy fresh database tabels:
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'
\i '/docker-entrypoint-initdb.d/tables/projects.sql'
\i '/docker-entrypoint-initdb.d/tables/clients.sql'
\i '/docker-entrypoint-initdb.d/tables/requirements.sql'

-- For testing purposes only. This file will add dummy data
-- \i '/docker-entrypoint-initdb.d/seed/seed.sql'


-- order matters