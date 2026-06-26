import { Controller, Get, Param, Query } from "@nestjs/common";
import { PricingService } from "./pricing.service";

@Controller("guides")
export class PricingController {
  constructor(private readonly pricing: PricingService) {}

  // GET /guides?page=1&limit=20  → paginated list for the guide selector
  @Get()
  async list(@Query("page") page?: string, @Query("limit") limit?: string) {
    return this.pricing.listGuides(Number(page ?? 1), Number(limit ?? 20));
  }

  // GET /guides/:id/pricing?payerId=payer-x
  @Get(":id/pricing")
  async price(@Param("id") id: string, @Query("payerId") payerId?: string) {
    return this.pricing.priceGuide(Number(id), payerId);
  }
}
