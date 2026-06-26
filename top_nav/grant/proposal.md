# Valet Bitcoin — Grant Proposal

## Executive Summary

Valet Bitcoin is a fully open-source, mobile-first Bitcoin and Lightning wallet that puts a self-custodial, privacy-preserving Lightning node in every pocket — without requiring users to run a full Bitcoin node or pre-fund channels. Built on the lightweight **Immortan** library, Valet adds two novel channel types:

- **Hosted Channels** — an on-the-fly, zero-liquidity, anonymous Lightning channel type.
- **Fiat Channels** — a variant of Hosted channels that tracks a constant fiat value for Bitcoin, shielding merchants who accept Bitcoin payments from short-term BTC volatility.

These innovations remove the UX, liquidity, and volatility frictions that block everyday adoption, especially in emerging Bitcoin circular economies. This grant will let us:

1. Harden and extend the overall project codebase.
2. Extend our Hosted/Fiat-Channel plugins to other major Lightning implementations (LND & Core-Lightning), as they are currently designed only for Eclair.
3. Continue our hands-on outreach across African and Latin-American Bitcoin circular communities.
4. Continue and deepen research on a prototype cryptographic mitigation against the "Host exit-scam" problem in the Hosted channels protocol.

Valet is already live on F-Droid and Zapstore; a Play Store relaunch will follow once we establish a non-profit entity and complete Google's developer-verification (KYC) process. All code is and will remain Apache 2.0 licensed.

## Why This Matters

- **Liquidity hurdle:** Opening a typical Lightning channel ties up on-chain funds — typically unrealistic for low-income users.
- **Fear of volatility:** Merchants who want to accept Bitcoin dread losing working capital if the BTC price drops between sale and spend.
- **Hardware barrier:** Running a full node on mobile is still impractical; high data and device costs challenge widespread Lightning adoption.
- **UX gap:** High onboarding friction pushes newcomers toward custodial, KYC-heavy wallets that compromise Bitcoin's ethos.

Valet's mobile approach — Hosted & Fiat Channels — tackles each of these: instant, zero-funding, private channels that can optionally stabilize purchasing power, while keeping users in control of their keys and routing information.

## Milestones Reached

**Community outreach** — we have reached and extensively educated these Bitcoin communities about Valet and the project stack:

- MonteLibero Community (Montenegro — 2022)
- Bitcoin Kitui (Kenya — 2025)
- Bitcoin Boma (Namibia — 2025–present)
- Bitcoin Guanthai (Kenya — 2025–present)

**Wallet metrics:**

- 100+ active installs
- 700+ Hosted/Fiat channels opened
- 36 GitHub stars
- 140 Telegram members and 300+ followers across social platforms

## Project Objectives

1. New major release of the Immortan library and the Valet application.
2. Research a Bolt12 implementation in the underlying LN library, Immortan.
3. Continue our active education initiative through community outreach, workshops, and seminars on the importance of Bitcoin.
4. Research and publish a cryptographic mitigation against the Host exit-scam risk.

## Measurable Outcomes

- Quarterly public reports and tagged code releases.
- At least 2 external wallet projects integrating Hosted/Fiat channels.
- 1,000–3,000 Valet installs across all platforms (up from 100s today).
- 2–5 community public nodes with Hosted and Fiat channel support.
- New external contributors to the Valet and Immortan repositories.

## Budget / Direct Usage

**Asking amount: ₿0.65 ≈ $50,000** (for an initial 6-month period)

- Core maintainer compensation (2 devs) for part-time work.
- Project manager, full-time (working with communities, organizing workshops and seminars, and general project-growth coordination).
- Travel expenses for the team (max 2 conferences, in target regions — Africa and Latin America).
- CI, test nodes, and infrastructure.

**Current funding:** Self-funded since 2022; no other grants secured. Should overlapping support appear, we will inform our funders immediately and adjust scope or return unspent funds per grant terms.

## Duration

The requested grant period is six months (renewable by mutual agreement).

## Team

- **Lead maintainer — Ilya Evdokimov** ([github.com/evd0kim](https://github.com/evd0kim)) · Engineer, Ph.D, ex-Bitcoin developer at Synonym, Eclair contributor.
- **Support developer — Anton Gutscha** ([github.com/NCrashed](https://github.com/NCrashed)) · Seasoned Bitcoin developer.
- **Project & community lead — Ugochukwu David** ([github.com/0orion](https://github.com/0orion)) · Ex-African Bitcoiners Community Manager.

All contributors work publicly on GitHub: [github.com/standardsats](https://github.com/standardsats)

## Sustainability & Long-Term Vision

- Valet, Immortan, and all plugins are Apache 2.0 licensed and will remain so.
- Revenue is neither sought nor embedded; the wallet will never monetize users.
- Once stable, maintenance costs drop to modest contributor bounties covered via donations or future ecosystem grants.

By emancipating users from custodial mobile wallets and expanding channel types across the dominant Lightning stacks, we expect broader wallet adoption, more merchant use cases, and new research into trust-minimized hosted systems.

## Alignment with FOSS / Bitcoin Grant Criteria

- ✔ **Open source / no profit motive** — Apache 2.0, public GitHub, reproducible builds.
- ✔ **Improves UX & onboarding** — one-scan channel creation, no liquidity or rate-volatility barrier.
- ✔ **Advances scaling & privacy** — lightweight Immortan node; per-peer random IDs; private channels.
- ✔ **Strengthens the Lightning & Bitcoin ecosystem** — cross-implementation plugins + formal RFCs.
- ✔ **Community standing** — original authors of Immortan & the Hosted-Channel spec; active maintainers; code adopted in Simple Bitcoin Wallet.

## Reporting & Communication

- Monthly progress notes on GitHub Discussions.
- Milestone demo videos on our YouTube channel.
- Quarterly full reports to our funders, including KPIs & budget burn-down.
- Acknowledgement of funders in release notes and at least one conference talk.

## Appendix — Links

- Valet Wallet — [github.com/standardsats/valet](https://github.com/standardsats/valet)
- Immortan Library — [github.com/standardsats/immortan](https://github.com/standardsats/immortan)
- Hosted Channel RFC — [github.com/standardsats/hosted-channels-rfc](https://github.com/standardsats/hosted-channels-rfc)
- Hosted Channel Plugin (Eclair) — [github.com/standardsats/plugin-hosted-channels](https://github.com/standardsats/plugin-hosted-channels)
- Fiat Channel RFC — [github.com/standardsats/fiat-channels-rfc](https://github.com/standardsats/fiat-channels-rfc)
- Fiat Channel Plugin (Eclair) — [github.com/standardsats/plugin-fiat-channels](https://github.com/standardsats/plugin-fiat-channels)
