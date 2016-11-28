CREATE TABLE IF NOT EXISTS ACCOUNTS (
    ID SERIAL     PRIMARY KEY,
    USERNAME      VARCHAR(200),
    FIRSTNAME     VARCHAR(200),
    LASTNAME      VARCHAR(200)
);

CREATE TABLE IF NOT EXISTS BASIC_AUTH_MEMBERSHIPS (
    ID SERIAL       PRIMARY KEY,
    ACCOUNT_ID      INTEGER REFERENCES ACCOUNTS (ID),
    PASSWORD_HASH   VARCHAR(400),
    CREATED         TIMESTAMP
);

CREATE TABLE IF NOT EXISTS OAUTH_MEMBERSHIPS (
    ID SERIAL       PRIMARY KEY,
    ACCOUNT_ID      INTEGER REFERENCES ACCOUNTS (ID),
    IDENTIFIER      VARCHAR(400),
    PROVIDER        VARCHAR(100),
    CREATED         TIMESTAMP
);
