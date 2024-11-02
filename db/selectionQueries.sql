-- Znalezienie linii zatrzymujących się na wybranym przystanku
SELECT l.linia_id, l.linia_nr, l.kierunek
    FROM mpk.linia l
        JOIN mpk.linia_przystanek lp USING (linia_id)
        JOIN mpk.przystanek p USING (przystanek_id)
    WHERE p.name = 'Miechowity';


-- Znalezienie czasów odjazdu dla wybranego przystanku i linii
SELECT p.name, l.linia_nr, l.kierunek ,go.godzina_odjazdu
    FROM mpk.godzina_odjazdu go
        JOIN mpk.linia_przystanek lp USING (linia_przystanek_id)
        JOIN mpk.linia l USING (linia_id)
        JOIN mpk.przystanek p USING (przystanek_id)
    WHERE p.name = 'Stawowa'
        AND l.linia_nr = '501' AND l.kierunek = 'Chelmonskiego Petla';


-- Znalezienie przystanków i czasów odjazdu dla wybranej linii
SELECT p.name AS przystanek, go.godzina_odjazdu
    FROM mpk.godzina_odjazdu go
        JOIN mpk.linia_przystanek lp USING (linia_przystanek_id)
        JOIN mpk.linia l USING (linia_id)
        JOIN mpk.przystanek p USING (przystanek_id)
    WHERE l.linia_nr = '501' AND l.kierunek = 'Miechowity';

-- znalezienie przystanków dla danej linii
SELECT l.linia_nr, p.name, l.kierunek AS przystanek
    FROM mpk.przystanek p
        JOIN mpk.linia_przystanek lp USING (przystanek_id)
        JOIN mpk.linia l USING (linia_id)
    WHERE l.linia_nr = '501';

--------------------------------------------------------------------