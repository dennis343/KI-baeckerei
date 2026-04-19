import "server-only";

import type { SalesCase } from "../sales-cases";

/**
 * Server-only Datenbestand der Vertriebsfälle.
 *
 * WICHTIG: Diese Datei darf NIE in einem Client Component (Datei mit
 * "use client") importiert werden. Der `import "server-only"` oben
 * erzwingt einen Build-Fehler, falls das versehentlich passiert.
 *
 * Auslieferung ausschließlich über `/api/vertriebskarte-data`, geschützt
 * durch den httpOnly `vk-session` Cookie. Dadurch sind die Daten weder im
 * Client-JS-Bundle noch im HTML-Quellcode der Seite auffindbar und für
 * nicht authentifizierte Crawler/Besucher nicht lesbar.
 */
export const SALES_CASES: SalesCase[] = [
  {
    kuerzel: "GMBH_Konk_NAG_x67",
    summe: 132299.22,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Bahnhofstr. 1, 47574 Goch", lat: 51.6784, lng: 6.1622 },
      { address: "Fritz-Reuter-Straße 2a, 47623 Kevelaer", lat: 51.5833, lng: 6.2461 },
      { address: "Hausener Weg 29, 60489 Frankfurt am Main", lat: 50.1255, lng: 8.6127 },
    ],
  },
  {
    kuerzel: "CB-KK_Inso_x67c",
    summe: 42582.44,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Bahnhofstr. 1, 47574 Goch", lat: 51.6784, lng: 6.1622 },
      { address: "Hermann-Teuber-Str. 26, 47574 Goch", lat: 51.6740, lng: 6.1580 },
      { address: "Mühlenstraße 5, 29386 Hankensbüttel", lat: 52.7261, lng: 10.6133 },
    ],
  },
  {
    kuerzel: "SilJ_Ink_RäX417",
    summe: 11961.72,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Am Volkspark 1, 50321 Brühl", lat: 50.8284, lng: 6.9056 },
    ],
  },
  {
    kuerzel: "KFD_Gl250926",
    summe: 3280.64,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Hüsingstr. 31, 58239 Schwerte", lat: 51.4463, lng: 7.5672 },
    ],
  },
  {
    kuerzel: "KFD_Gl250807",
    summe: 10168.97,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Am Alten Erzstift 16, 47877 Willich", lat: 51.2634, lng: 6.5494 },
    ],
  },
  {
    kuerzel: "KaPus",
    summe: 66293.0,
    bemerkung: "PIRAT",
    status: "PIRAT",
    locations: [
      { address: "Graz, Österreich", lat: 47.0707, lng: 15.4395 },
    ],
  },
  {
    kuerzel: "Ahand",
    summe: 60000.0,
    bemerkung: "PIRAT",
    status: "PIRAT",
    locations: [
      { address: "Wilhelmstr. 6 1/2, 97421 Schweinfurt", lat: 50.0490, lng: 10.2263 },
      { address: "Drosselstr. 11, 97422 Schweinfurt", lat: 50.0407, lng: 10.2310 },
      { address: "Altmarkt 10 B/D, 01067 Dresden", lat: 51.0493, lng: 13.7381 },
    ],
  },
  {
    kuerzel: "OBFin",
    summe: 50000.0,
    bemerkung: "Verfahren aktiv",
    status: "Verfahren aktiv",
    locations: [
      { address: "Finanzstraße 10-12, 46145 Oberhausen", lat: 51.4731, lng: 6.8635 },
    ],
  },
  {
    kuerzel: "DavidB",
    summe: 20000.0,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Breite Str. 10, 57439 Attendorn", lat: 51.1263, lng: 7.9028 },
    ],
  },
  {
    kuerzel: "RenMud",
    summe: 64963.22,
    bemerkung: "PIRAT",
    status: "PIRAT",
    locations: [
      { address: "Rue de Wattrelos 17, 52249 Eschweiler", lat: 50.8185, lng: 6.2667 },
      { address: "Markt 18, 52249 Eschweiler", lat: 50.8180, lng: 6.2740 },
      { address: "Rheinstr. 109, 65185 Wiesbaden", lat: 50.0782, lng: 8.2398 },
    ],
  },
  {
    kuerzel: "GMBH_KüppShari",
    summe: 17041.0,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Rolander Weg 14, 40629 Düsseldorf", lat: 51.2509, lng: 6.8530 },
    ],
  },
  {
    kuerzel: "MixWor",
    summe: 12000.0,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Ostendstr. 25, 12459 Berlin", lat: 52.4836, lng: 13.4892 },
    ],
  },
  {
    kuerzel: "GMBH_HelFind",
    summe: 50000.0,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Niederbarnimstr. 16, 10247 Berlin", lat: 52.5133, lng: 13.4567 },
      { address: "Carl-Herz-Ufer 1, 10961 Berlin", lat: 52.4945, lng: 13.3932 },
    ],
  },
  {
    kuerzel: "GritHal",
    summe: 9000.0,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Sauerbruchstr. 33, 14109 Berlin", lat: 52.4166, lng: 13.1622 },
      { address: "Falkenstr. 4, 14656 Brieselang", lat: 52.5838, lng: 12.9973 },
      { address: "Seelingstr. 18, 14059 Berlin", lat: 52.5164, lng: 13.2955 },
    ],
  },
  {
    kuerzel: "NewBox",
    summe: 45000.0,
    bemerkung: "Verfahren aktiv",
    status: "Verfahren aktiv",
    locations: [
      { address: "Fallenbrunnen 14, 88045 Friedrichshafen", lat: 47.6571, lng: 9.4798 },
      { address: "Berger Str. 2, 88212 Ravensburg", lat: 47.7816, lng: 9.6123 },
      { address: "Ziegelstr. 15/2, 88214 Ravensburg", lat: 47.7789, lng: 9.6185 },
    ],
  },
  {
    kuerzel: "WorkX",
    summe: 35000.0,
    bemerkung: "Verfahren aktiv",
    status: "Verfahren aktiv",
    locations: [
      { address: "Cosimastr. 121, 81925 München", lat: 48.1579, lng: 11.6234 },
      { address: "Salzburg, Österreich", lat: 47.8095, lng: 13.0550 },
    ],
  },
  {
    kuerzel: "LinguaJ",
    summe: 6500.0,
    bemerkung: "",
    status: "Standard",
    locations: [
      { address: "Landsberger Str. 155, 80687 München", lat: 48.1415, lng: 11.5243 },
    ],
  },
  {
    kuerzel: "Taiko",
    summe: 340000.0,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Prinzenallee 74, 13357 Berlin", lat: 52.5530, lng: 13.3895 },
      { address: "Am Elseneck 20, 16562 Hohen Neuendorf, Bergfelde", lat: 52.6756, lng: 13.2789 },
    ],
  },
  {
    kuerzel: "ManuWieg",
    summe: 41640.0,
    bemerkung: "PIRAT",
    status: "PIRAT",
    locations: [
      { address: "Oberhausen", lat: 51.4700, lng: 6.8517 },
      { address: "Düsseldorf", lat: 51.2277, lng: 6.7735 },
      { address: "Paderborn", lat: 51.7189, lng: 8.7575 },
    ],
  },
  {
    kuerzel: "WalWeb",
    summe: 58500.0,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "John-F-Kennedy-Boulevard 3, 96052 Bamberg", lat: 49.9027, lng: 10.8718 },
      { address: "Krackhardtstr. 2, 96047 Bamberg", lat: 49.8929, lng: 10.8868 },
    ],
  },
  {
    kuerzel: "Scali",
    summe: 50000.0,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Große Bleichen 21, 20354 Hamburg", lat: 53.5537, lng: 9.9866 },
    ],
  },
  {
    kuerzel: "Völz",
    summe: 50000.0,
    bemerkung: "ROT",
    status: "ROT",
    locations: [
      { address: "Hafenstr. 26, 94469 Deggendorf", lat: 48.8320, lng: 12.9596 },
      { address: "Eichener Str. 30, 57258 Freudenberg, Büschergrund", lat: 50.8969, lng: 7.8684 },
    ],
  },
  {
    kuerzel: "AkaMit",
    summe: 0,
    bemerkung: "PIRAT",
    status: "PIRAT",
    locations: [
      { address: "Am Kuckhofer Feld 13d, 41470 Neuss", lat: 51.1985, lng: 6.6920 },
    ],
  },
];

export const TOTAL_SUMME = SALES_CASES.reduce((s, c) => s + c.summe, 0);
export const TOTAL_CASES = SALES_CASES.length;
