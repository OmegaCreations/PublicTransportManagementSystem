create schema mpk;

-- Table przystanek
create table mpk.przystanek (
    przystanek_id bigint primary key auto_increment,
    name varchar(50) not null
);

-- Table linia
create table mpk.linia (
	linia_id bigint primary key auto_increment,
    linia_nr int not null,
    kierunek varchar(50) not null
);

-- Table linia_przystanek
create table mpk.linia_przystanek (
    linia_przystanek_id bigint primary key auto_increment,
    linia_id bigint not null references linia(linia_id),
    przystanek_id bigint not null references przystanek(przystanek_id),

    numer_kolejnosci int not null
);

-- Table godzina_odjazdu
create table mpk.godzina_odjazdu (
    godzina_odjazdu_id bigint primary key auto_increment,
    linia_przystanek_id bigint not null references linia_przystanek(linia_przystanek_id),

    godzina_odjazdu time not null
);
