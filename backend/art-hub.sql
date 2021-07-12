\echo 'Delete and recreate art_hub db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE art_hub;
CREATE DATABASE art_hub;
\connect art_hub

\i art-hub-schema.sql

\echo 'Delete and recreate art_hub_test db?'
\prompt 'Return for yes or control-C to cancel > ' answer

DROP DATABASE art_hub_test;
CREATE DATABASE art_hub_test;
\connect art_hub_test


\i art-hub-schema.sql