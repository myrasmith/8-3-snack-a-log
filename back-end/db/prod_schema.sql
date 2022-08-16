\c d3ugc9nba7l14r; 

CREATE TABLE snacks (
    id          SERIAL   NOT NULL    PRIMARY KEY,
    name        TEXT,
    fiber       INT,
    protein     INT,
    added_sugar INT,
    is_healthy  BOOLEAN,
    image       TEXT
);