create schema mpk;

-- Table przystanek
create table mpk.przystanek (
    przystanek_id bigint primary key auto_increment,
    name varchar(50) not null unique
);

-- Table linia
create table mpk.linia (
	linia_id bigint primary key auto_increment,
    linia_nr int not null,
    kierunek varchar(50) not null,

    unique key unique_linia_kierunek (linia_nr, kierunek) -- unique pair
);

-- Table linia_przystanek
CREATE TABLE mpk.linia_przystanek (
    linia_przystanek_id BIGINT PRIMARY KEY AUTO_INCREMENT,
    linia_id BIGINT NOT NULL,
    przystanek_id BIGINT NOT NULL,
    numer_kolejnosci INT NOT NULL,
    
    UNIQUE KEY unique_kolejnosc (linia_id, numer_kolejnosci),
    FOREIGN KEY (linia_id) REFERENCES mpk.linia(linia_id) ON DELETE CASCADE,
    FOREIGN KEY (przystanek_id) REFERENCES mpk.przystanek(przystanek_id) ON DELETE CASCADE
);


-- Table godzina_odjazdu
create table mpk.godzina_odjazdu (
    godzina_odjazdu_id bigint primary key auto_increment,
    linia_przystanek_id bigint not null references linia_przystanek(linia_przystanek_id) on delete cascade,

    godzina_odjazdu time not null,
    unique key unique_godzina_przystanek (godzina_odjazdu_id, linia_przystanek_id)
);