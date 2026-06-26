import type { GuideSummary, Paginated, PricingResult } from "./types";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export async function listGuides(
  page = 1,
  limit = 20,
): Promise<Paginated<GuideSummary>> {
  const res = await fetch(`${API}/guides?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

export async function getPricing(
  guideId: number,
  payerId?: string,
): Promise<PricingResult> {
  const qs = payerId ? `?payerId=${encodeURIComponent(payerId)}` : "";
  const res = await fetch(`${API}/guides/${guideId}/pricing${qs}`);
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}

// Payers available in the seed (hardcoding is fine for the test; or expose an endpoint).
export const PAYERS = [
  { id: "", label: "Tabela padrão" },
  { id: "payer-x", label: "Convênio X" },
];
