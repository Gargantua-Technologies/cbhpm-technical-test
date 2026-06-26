"use client";

/**
 * THE AUDITOR SCREEN (frontend part of the test).
 *
 * Build the pricing review here, consuming the API (`getPricing(1, payerId)`
 * from `lib/api.ts`). Make the reduction LEGIBLE: which item is the principal
 * (100%) and how much each one was reduced, grouped by access route. Add an
 * interaction that adds value (e.g. switch payer and recompute) and handle
 * loading / empty / error. UI libs are your choice.
 *
 * This stub only proves the app boots — replace it freely.
 */
export default function Page() {
  return (
    <main>
      <h1>Pricing review</h1>
      <p>
        Build this screen. The API is at{" "}
        <code>GET /guides/1/pricing?payerId=payer-x</code>. See{" "}
        <code>lib/api.ts</code> and the root <code>README.md</code>.
      </p>
    </main>
  );
}
