# Evaluatie

## Verloop

- Onderzoek gedaan naar de opbouw van een Angular app
- CLI geinstalleerd
- Angular docs globaal gelezen
- Youtube tutorial gekeken, voor een Todo List
- _Hard coded_ afspraken-array
- Formulier gemaakt voor nieuwe afspraak
- Nieuwe afspraak wordt toegevoegd aan afspraken-array (Submit)
- Besloot _angular-calendar_ (npm) week-view te gebruiken als kalender
- Afspraak-formulier en Type van Event (afspraak) gewijzigd, zodat de kalender de afspraken kan weergeven
- Tussendoor wat styling gedaan

## Opmerkingen

- Ben begonnen aan de router, met drie views, maar ik besloot dat dit te lang zou duren.
- De nieuwe afspraak wordt weergegeven in de afsprakenlijst, maar niet direct op de kalender. Pas als je navigeert tussen de weken komt de nieuwe afspraak in de kalender.
- De nieuwe afspraak wordt gelogd in console. Er is geen form validation.
- De nieuwe afspraak is weg na een refresh, dus niet opgeslagen in bijvoorbeeld cache of localstorage.
- Had graag bij de afsprakenlijst een simpeler 'Begint' en 'Eindigt' -string gehad, i.p.v de hele Date string. Dit was het einde van de dag, ik kwam er zo snel niet uit.
- Halverwege bedacht ik dat alles in het Engels was, uit gewoonte. Ik heb zoveel mogelijk naar het Nederlands veranderd.
- Had me achteraf beter moeten houden aan de Semantic Commit Messages voor Git.
- Zomer-/wintertijd: Ik zou van Date-fns overstappen op Moment.js, want Date-fns heeft geen opties daaromtrent. Moment.js heeft moment().isDST(). Daarmee kan worden gecheckt of het Zomertijd is, voor elke Locale. Voor zomertijd zou ik eerst (in onSubmit()) checken of de afspraak op zondag is in week 12 of 13; dan of the afspraak valt tussen 2:00 en 3:00. Als dat allemaal het geval is kijk ik of het einde van de afspraak .istDST() === true. Dan zou ik er een melding van geven, en vragen of de afspraak een uur mag opschuiven. Voor de wintertijd zou ik waarschijnlijk overlapping tussen afspraken toestaan, ieder met een eigen kleur, een voor zomertijd 2:00 en een voor wintertijd 2:00.

## Ten einde

In ons telefoongesprek meldde Bas dat ik, bij voorkeur, maximaal zes uur over de opdracht mocht doen. Hier heb ik mij aan gehouden. Liever had ik het tot in de puntjes verzorgd, want ik vond het leuk om met Angular te klussen en het leek me wel zo netjes.

Om het volledig op te leveren, had ik waarschijnlijk nog vier uur nodig - denk ik.

In die vier uur zou ik:

- De styling op orde brengen. Nu is het lelijk.
- Routing toevoegen.
- Form validation toevoegen, waarbij ik overlap van afspraken zou verbieden. Dit zou ik doen door in **addEvent()** (EventService) te kijken of er al een afspraak staat op dat tijdstip, middels zoiets (Date-fns):

```

 addEvent(event) {
    const conflict: any = this.events.filter((e) => {
      return (
        isWithinInterval(new Date(e.start), {
          start: new Date(event.start),
          end: new Date(event.end),
        }) ||
        isWithinInterval(new Date(e.end), {
          start: new Date(event.start),
          end: new Date(event.end),
        })
      );
    });
    console.log('conflict', conflict);
    conflict.length !== 0
      ? alert('Er staat al een afspraak op dit tijdstip.')
      : this.events.push(event);
  }

```

- Zorgen dat de nieuwe afspraak direct wordt weergegeven op de kalender en dat het formulier wordt geleegd.
- De nieuwe afspraak opslaan in een store (misschien met NgRx).

  Als ik het haal:

- Standaard een eindtijd bieden, half/heel uur na de opgegeven starttijd.
- De afspraken in de afsprakenlijst alleen weergeven per gekozen week, waarschijnlijk met array.filter zolang het _hard coded_ afspraken zijn. Van een API zou ik alleen per week de afspraken fetchen.

# Opdracht

## Case: Weekplanner

Een zorgverlener wil graag een overzicht van alle afspraken voor de komende week. We vragen jou
om een simpele implementatie te maken van deze weekplanner.

## Functies

- De huidige week wordt getoond van maandag t/m vrijdag.
- Alle geplande afspraken zijn zichtbaar op een logische wijze.
- Afspraken mogen elkaar niet overlappen.
- Nieuwe afspraken zijn in te voeren.
- Afspraken hebben ten minste:
  - Titel
  - Patiënt
  - Datum
  - Begintijd
  - Eindtijd of duur (kies welke je handiger vind)
- Zodra de applicatie opstart zijn er al een aantal afspraken te zien.

## Technisch

Je mag zelf bepalen welke frameworks je hiervoor wilt gebruiken. Wel vragen we je om de code te
schrijven in Typescript Angular.

Je hoeft geen backend te maken, de applicatie mag gebruik maken van een fictieve API, de local
storage van de browser of een andere store. Het is wel prettig om inzicht te hebben in de data die je
ophaalt/opstuurt.

## Design

Functioneel vraagt deze opdracht niet veel, we verwachten dan wel dat de applicatie een beetje
prettig voor het oog is.

## Tips

- Hoe ga je om met zomer-/wintertijd?
- Hoe laat je de gebruiker een datum invoeren?

# Calendar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
