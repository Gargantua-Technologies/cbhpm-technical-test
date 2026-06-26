# Banco (SQLite)

Você monta o banco. Aplique a estrutura (`schema.sql`) e os dados (`test.sql` — os mesmos da tabela abaixo) do jeito que preferir (CLI `sqlite3`, script, migration/seed de ORM). O app espera o arquivo em `apps/api` via `DB_PATH` (default `../../data/test.sqlite`).

## Modelo
- `access_routes` — vias de acesso (grupos independentes na redução).
- `payers` — convênios.
- `procedures` — catálogo: `base_value_cents` (o "porte" em centavos) e via de cada TUSS.
- `pricing_rules` — `reduction_pct` é JSON (`"[100,70,50]"`); `payer_id` NULL = default; com `payer_id` = override do convênio.
- `guides` / `guide_items` — a guia; `qty` e `base_value_override_cents` (opcional) por item.

## Dataset pra seedar (mantenha estes valores — os casos difíceis estão aqui)

`access_routes`
| id | name |
|----|------|
| route-a | Anterior |
| route-b | Posterior |

`payers`
| id | name |
|----|------|
| payer-x | Convênio X |

`procedures` (Tenotomia e Sutura têm o **mesmo** `base_value_cents` → empate)
| tuss_code | description | base_value_cents | access_route_id |
|-----------|-------------|------------------|-----------------|
| 30602246 | Artrodese de grande articulacao | 80000 | route-a |
| 30602050 | Tenotomia | 33333 | route-a |
| 30715016 | Sutura de tendao | 33333 | route-a |
| 40808152 | Radiografia | 30000 | route-b |

`pricing_rules`
| id | payer_id | reduction_pct | group_by |
|----|----------|---------------|----------|
| default | (null) | [100,70,50] | accessRoute |
| payer-x | payer-x | [100,50] | accessRoute |

`guides`: `(1, "Joao da Silva")`

`guide_items` (`guide_id`=1)
| id | position | tuss_code | qty | base_value_override_cents |
|----|----------|-----------|-----|---------------------------|
| 1 | 1 | 30602246 | 1 | (null) |
| 2 | 2 | 30602050 | 1 | (null) |
| 3 | 3 | 30715016 | 1 | (null) |
| 4 | 4 | 40808152 | 2 | (null) |

## Casos difíceis embutidos
- route-a: 3 procedimentos, **2 com porte empatado** (33333) → tie-break + arredondamento.
- route-b: 1 procedimento com **qty 2** → decisão de como a quantidade entra na fila.
- Regra **default** `[100,70,50]` + **override** `payer-x` `[100,50]` → precedência.

Troque o `payerId` na chamada (`?payerId=payer-x` vs sem) pra ver as duas regras.
