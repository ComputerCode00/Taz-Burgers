create database burgers_db;

use burgers_db;

create table burgers (
    id INTEGER (12) auto_increment NOT NULL,
    burger_name varchar (20) not null,
    devoured boolean not null,
    date timestamp,
    primary key (id)
);
