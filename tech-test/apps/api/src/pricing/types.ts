// Suggested types — adjust/expand as you see fit. The output shape is YOUR design.

export interface GuideItemRow {
  id: number;
  tussCode: string;
  description: string;
  baseValueCents: number; // catalog value, or the per-item override when present
  accessRouteId: string | null;
  qty: number;
}

export interface PricingRule {
  id: string;
  payerId: string | null;
  reductionPct: number[]; // e.g. [100, 70, 50]
  groupBy: string; // e.g. "accessRoute"
}

// Suggested per-item output — you decide the final shape (fields, trace, etc.).
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
  totals: {
    billedCents: number;
    finalCents: number;
  };
  // human-readable lines explaining why each item was reduced
  trace: string[];
}

// For the guide list/selector.
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
