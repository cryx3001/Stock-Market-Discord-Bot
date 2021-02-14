CREATE DATABASE stockBotDb;
USE stockBotDb;

create table userdata (
    id varchar(255),
    money int,
    trades text,
    userID int,
    dailytime int
);

create table prefixserver(
    id bigint,
    prefix varchar(255), 
    primary key(id)
);

CREATE TABLE stats_bot(
    date int,
    server_count int,
    num_of_users int,
    money bigint
);