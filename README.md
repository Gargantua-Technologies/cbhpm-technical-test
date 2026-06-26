# Desafio técnico — Precificação de procedimentos (CBHPM)

Bem-vindo. Este é um starter **Next + Nest** já pronto pra rodar. Você implementa um slice real de ponta a ponta: a **precificação das guias** e a **tela de conferência** do auditor.

> Tempo sugerido: **~meio período (~4h)**. Queremos mais seu **julgamento** e suas **decisões**. Se faltar tempo, deixe uma nota do que faria a seguir. IA é **liberada** (e faz parte do que avaliamos).

---

## Contexto (domínio)

Uma **guia** (`guide`) é a cobrança que a clínica manda ao convênio: um ou mais procedimentos, cada um com código TUSS, um **valor** (o "porte", em **centavos**) e uma **via de acesso**.

Quando vários procedimentos caem na **mesma via de acesso**, o convênio não paga 100% de todos — aplica uma **redução por porte**: o procedimento de maior porte é o principal e paga integral; os demais pagam uma fração decrescente. **Vias de acesso diferentes são grupos independentes** (cada grupo tem o seu principal).

Essa tabela de redução **não é fixa**: existe uma **regra padrão** e cada **convênio pode ter a sua própria** (override). Qual regra vale depende do convênio da cobrança.

O **schema** do banco está em `data/schema.sql` e o **dataset** a popular em [data/README.md](data/README.md).

---

## O que você vai construir

### 1. Backend (NestJS) — `apps/api`

Dois endpoints, que carregam do banco (ORM ou SQL direto — **sua escolha**):

- **listagem** de guias, **paginada** (o banco tem ~500 guias);
- **precificação** de uma guia: retorna um resultado **auditável** — o auditor precisa conferir o que cada item virou e **por quê**.

O catálogo é grande (~200 procedimentos);

Complete: `src/pricing/pricing.service.ts` e `src/pricing/pricing.repository.ts`.

**Testes (obrigatório).** Cubra a lógica de precificação, incluindo os **casos de borda que você identificar**. Desenhe a lógica **testável sem o banco real** (ex: repositório fake/in-memory).

### 2. Frontend (Next.js) — `apps/web`

A **tela do auditor** que consome os endpoints e deixa a redução **legível num relance**. Com ~500 guias, inclua um **seletor/lista paginada** pra escolher qual conferir. Inclua **uma interação que agregue valor** (ex: trocar o convênio e recalcular).

Complete: `app/page.tsx`. Libs de front à sua escolha.

Empreenda esforço para fazer uma UX bem feita além de uma UI bonita.

---

## A spec é aberta de propósito

Como num ticket real, há pontos que **não** estão 100% especificados. **Decida, implemente e documente o porquê** no `NOTES.md` — perceber o que precisa ser decidido faz parte da avaliação. Você **não** poderá nos perguntar durante; reserve pro fim só as perguntas **genuínas** de negócio.

---

## Setup

```bash
nvm use            # Node 20+
pnpm install
# crie e popule o banco (data/test.sql) — é com você (ver data/README.md)
pnpm dev           # sobe API (:3001) e Web (:3000) em paralelo
```

- API: http://localhost:3001
- Web: http://localhost:3000

Criar e seedar o banco é parte do teste — escolha a abordagem (CLI, script, migration/seed de ORM). A API só sobe com o banco existente em `DB_PATH`.

---

## Entregáveis

- Código (`apps/api` + `apps/web`) + **testes** da lógica de precificação.
- **`NOTES.md`** na raiz (template pronto): suas premissas e decisões, com o porquê.
