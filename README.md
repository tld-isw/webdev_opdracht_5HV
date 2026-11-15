# WebDev – projectstart 5 havo

Dit is de **technische startomgeving**, geen uitgewerkte webapp. Je bouwt zelf je database, API-routes, HTML, CSS en JavaScript.

## 1. Ontwerp je database

Teken je tabellen, primary keys en foreign keys. Je uiteindelijke ontwerp heeft minimaal **drie betekenisvolle tabellen en twee foreign-keyrelaties**.

## 2. Schrijf de SQL in `database.sql`

Open `database.sql` en schrijf daarin je eigen `CREATE TABLE`-instructies. Het bestand is bewust leeg op commentaar na. Sluit iedere SQL-opdracht af met `;`.

## 3. Laad de database in

Open de terminal in Codespaces (in de hoofdmap van je project) en voer uit:

```bash
sqlite3 data/project.db < database.sql
```

De database wordt aangemaakt als die nog niet bestaat, en de SQL-opdrachten uit `database.sql` worden uitgevoerd. Het commando geeft bij succes vaak **geen melding**.

Controleer je tabellen met:

```bash
sqlite3 data/project.db ".tables"
```

Je kunt ook de structuur bekijken met:

```bash
sqlite3 data/project.db ".schema"
```

**Let op:** opnieuw uitvoeren maakt de database niet automatisch leeg. Als een tabel al bestaat, kan `CREATE TABLE` een fout geven. Gebruik zo nodig `CREATE TABLE IF NOT EXISTS`, of overleg voordat je bestaande data verwijdert. De database wordt niet automatisch gevuld: eventuele voorbeeldgegevens schrijf je zelf.

## 4. Start je webapp

```bash
npm start
```

Open de doorgestuurde poort **3000**. De pagina in `public/index.html` wordt nu getoond. Je maakt zelf routes in `server.js` en gebruikt `fetch()` in je frontend om gegevens op te vragen en te wijzigen.

## Wat is cadeau gekregen?

- Een werkende Express-server op poort 3000, inclusief JSON-verwerking en het aanbieden van `public/`.
- Een SQLite-verbinding in `server.js`, met foreign-keycontroles ingeschakeld.
- Het commando om je eigen `database.sql` naar SQLite te laden.
- Een lege HTML/CSS/JS-basis, Node-packagebestanden en een Codespaces-omgeving.

## Wat maak je zelf?

- Databasetabellen, relaties en SQL-query's.
- API-routes in Express.
- Gebruikersfunctionaliteiten (EP) en frontend met `fetch()`.
- Ontwerp, uitleg, tests en je projectdossier.

De bestaande **webwinkel uit de theorielessen** is naslagmateriaal, maar maakt geen deel uit van deze projecttemplate.
