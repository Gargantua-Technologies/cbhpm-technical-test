// Mirror here (or share) the shape your API returns.
// Minimal suggestion — adjust to your output design.

export interface PricedItem {
  tussCode: string;
  billedCents: number;
  finalCents: number;
  appliedPct: number;
  groupKey: string;
  position: number;
  ruleId: string;
}

export interface PricingResult {
  items: PricedItem[];
  totals: { billedCents: number; finalCents: number };
  trace: string[];
}

export interface GuideSummary {
  id: number;
  patientName: string;
  itemCount: number;
}

export interface Paginated<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
}
