/**
 * Typdefinitionen für die Vertriebsfälle. Diese Datei enthält bewusst
 * KEINE Daten – der tatsächliche Datenbestand liegt serverseitig unter
 * `src/lib/server/sales-cases-data.ts` und wird ausschließlich über die
 * geschützte API-Route `/api/vertriebskarte-data` ausgeliefert.
 */
export type CaseStatus = "ROT" | "PIRAT" | "Verfahren aktiv" | "Standard";

export type CaseLocation = {
  address: string;
  lat: number;
  lng: number;
};

export type SalesCase = {
  kuerzel: string;
  summe: number;
  bemerkung: string;
  status: CaseStatus;
  locations: CaseLocation[];
};

export type SalesCasesPayload = {
  cases: SalesCase[];
  totalSumme: number;
  totalCases: number;
};
