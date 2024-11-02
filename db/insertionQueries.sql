-- przystanki
insert into mpk.przystanek (name) values
    ('Chelmonskiego Petla'),
    ('Stawowa'),
    ('Rondo Ofiar Katynia'),
    ('Bronowice SKA'),
    ('Zarzecze'),
    ('Przybyszewskiego'),
    ('Miasteczko Studenckie AGH'),
    ('Czarnowiejska'),
    ('Plac Inwalidow'),
    ('Nowy Kleparz'),
    ('Politechnika'),
    ('Uniwersytet Ekonomiczny'),
    ('Rondo Mogilskie'),
    ('Pilotow'),
    ('Miechowity');

-- linie autobusowe
insert into mpk.linia (linia_nr, kierunek) values
    (501, 'Miechowity'),
    (501, 'Chelmonskiego Petla');

-- 501 -> Miechowity
insert into mpk.linia_przystanek (linia_id, przystanek_id, numer_kolejnosci) VALUES
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Chelmonskiego Petla'), 1),   -- Chelmonskiego Petla
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Stawowa'), 2),   -- Stawowa
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Rondo Ofiar Katynia'), 3),   -- Rondo Ofiar Katynia
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Bronowice SKA'), 4),   -- Bronowice SKA
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Zarzecze'), 5),   -- Zarzecze
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Przybyszewskiego'), 6),   -- Przybyszewskiego
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miasteczko Studenckie AGH'), 7),   -- Miasteczko Studenckie AGH
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Czarnowiejska'), 8),   -- Czarnowiejska
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Plac Inwalidow'), 9),   -- Plac Inwalidow
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Nowy Kleparz'), 10), -- Nowy Kleparz
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Politechnika'), 11), -- Politechnika
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Uniwersytet Ekonomiczny'), 12), -- Uniwersytet Ekonomiczny
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Rondo Mogilskie'), 13), -- Rondo Mogilskie
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Pilotow'), 14), -- Pilotow
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miechowity'), 15); -- Miechowity

-- 'Miechowity'
INSERT INTO mpk.godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miechowity')), '08:05:00'),
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miechowity')), '08:30:00');

-- 'Stawowa'
INSERT INTO mpk.godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Stawowa')), '08:00:00'),
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Stawowa')), '08:25:00');

-- 'Chelmonskiego Petla'
INSERT INTO mpk.godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Chelmonskiego Petla')), '07:00:00'),
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Miechowity' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Chelmonskiego Petla')), '07:20:00');





-- 501 -> Chelmonskiego Petla
INSERT INTO mpk.linia_przystanek (linia_id, przystanek_id, numer_kolejnosci) VALUES
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miechowity'), 1),     -- Miechowity
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Pilotow'), 2),        -- Pilotow
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Rondo Mogilskie'), 3),-- Rondo Mogilskie
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Uniwersytet Ekonomiczny'), 4), -- Uniwersytet Ekonomiczny
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Politechnika'), 5),   -- Politechnika
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Nowy Kleparz'), 6),   -- Nowy Kleparz
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Plac Inwalidow'), 7), -- Plac Inwalidow
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Czarnowiejska'), 8),  -- Czarnowiejska
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miasteczko Studenckie AGH'), 9), -- Miasteczko Studenckie AGH
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Przybyszewskiego'), 10), -- Przybyszewskiego
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Zarzecze'), 11),      -- Zarzecze
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Bronowice SKA'), 12), -- Bronowice SKA
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Rondo Ofiar Katynia'), 13), -- Rondo Ofiar Katynia
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Stawowa'), 14),       -- Stawowa
    ((SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla'), (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Chelmonskiego Petla'), 15); -- Chelmonskiego Petla

-- 'Miechowity'
INSERT INTO mpk.godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miechowity')), '07:04:00'),
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Miechowity')), '07:21:00');

-- 'Stawowa'
INSERT INTO mpk.godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Stawowa')), '08:07:00'),
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Stawowa')), '08:30:00');

-- 'Chelmonskiego Petla'
INSERT INTO mpk.godzina_odjazdu (linia_przystanek_id, godzina_odjazdu) VALUES
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Chelmonskiego Petla')), '08:14:00'),
    ((SELECT linia_przystanek_id FROM mpk.linia_przystanek WHERE linia_id = 
        (SELECT linia_id FROM mpk.linia WHERE kierunek = 'Chelmonskiego Petla' AND linia_nr = 501) AND przystanek_id = (SELECT przystanek_id FROM mpk.przystanek WHERE name = 'Chelmonskiego Petla')), '08:40:00');

