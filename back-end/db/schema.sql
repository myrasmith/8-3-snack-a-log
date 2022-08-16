DROP DATABASE IF EXISTS snack_a_log;
CREATE DATABASE snack_a_log; 

\c snack_a_log; 

CREATE TABLE snacks (
    id          SERIAL   NOT NULL    PRIMARY KEY,
    name        TEXT,
    fiber       INT,
    protein     INT,
    added_sugar INT,
    is_healthy  BOOLEAN,
    image       TEXT
);
