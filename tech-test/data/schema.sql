-- Schema (plain SQL). Use it with an ORM or raw SQL — your call.

CREATE TABLE access_routes (
  id   TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE payers (
  id   TEXT PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE procedures (
  tuss_code        TEXT PRIMARY KEY,
  description      TEXT NOT NULL,
  base_value_cents INTEGER NOT NULL, -- CBHPM "porte" value, in cents
  access_route_id  TEXT REFERENCES access_routes(id)
);

-- reduction_pct is a JSON array, e.g. "[100,70,50]".
-- payer_id NULL = default rule (applies to any payer without an override).
CREATE TABLE pricing_rules (
  id            TEXT PRIMARY KEY,
  payer_id      TEXT REFERENCES payers(id),
  reduction_pct TEXT NOT NULL,
  group_by      TEXT NOT NULL
);

CREATE TABLE guides (
  id           INTEGER PRIMARY KEY,
  patient_name TEXT NOT NULL
);

CREATE TABLE guide_items (
  id                        INTEGER PRIMARY KEY,
  guide_id                  INTEGER NOT NULL REFERENCES guides(id),
  position                  INTEGER NOT NULL,
  tuss_code                 TEXT NOT NULL REFERENCES procedures(tuss_code),
  qty                       INTEGER NOT NULL DEFAULT 1,
  base_value_override_cents INTEGER -- optional per-item override of the catalog value
);

CREATE INDEX idx_guide_items_guide ON guide_items(guide_id);
CREATE INDEX idx_procedures_route ON procedures(access_route_id);
CREATE INDEX idx_rules_payer ON pricing_rules(payer_id);
