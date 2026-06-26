import { Injectable } from "@nestjs/common";
import { PricingRepository } from "./pricing.repository";
import type { GuideSummary, Paginated, PricingResult } from "./types";

/**
 * THE CORE OF THE TEST.
 *
 * Price the guide applying the porte/route reduction:
 *  - select the applicable rule by payerId (precedence: payer override > default);
 *  - group by access route; sort by base value desc; apply the % by position;
 *  - sum/round in cents; produce an AUDITABLE result (with a trace).
 *
 * Open decisions (decide and document in NOTES.md): porte ties, qty > 1,
 * rounding, % list shorter than the group, override replaces vs merges, null route.
 */
@Injectable()
export class PricingService {
  constructor(private readonly repo: PricingRepository) {}

  async priceGuide(_guideId: number, _payerId?: string): Promise<PricingResult> {
    // TODO: implement.
    throw new Error("TODO: implement priceGuide");
  }

  // Paginated list for the guide selector (there are ~500 guides — paginate).
  async listGuides(
    _page: number,
    _limit: number,
  ): Promise<Paginated<GuideSummary>> {
    // TODO: implement.
    throw new Error("TODO: implement listGuides");
  }
}
