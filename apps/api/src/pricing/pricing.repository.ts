import { Injectable } from "@nestjs/common";
import type { GuideItemRow, GuideSummary, PricingRule } from "./types";

/**
 * Data access. Skeleton provided — YOU implement the queries and wire the DB
 * (raw SQL via your own connection, or an ORM of your choice). The DB file path
 * comes from DB_PATH (see .env.example / data/README.md).
 */
@Injectable()
export class PricingRepository {
  constructor() {
    // wire up your DB connection / ORM here
  }

  async getGuideItems(_guideId: number): Promise<GuideItemRow[]> {
    throw new Error("TODO: implement getGuideItems");
  }

  async getRules(_payerId?: string): Promise<PricingRule[]> {
    throw new Error("TODO: implement getRules");
  }

  // Paginated guide summaries + total count (for the selector).
  async getGuides(
    _page: number,
    _limit: number,
  ): Promise<{ rows: GuideSummary[]; total: number }> {
    throw new Error("TODO: implement getGuides");
  }
}
