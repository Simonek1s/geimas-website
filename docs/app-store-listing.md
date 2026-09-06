# App Store listing direction

Status: implemented on the marketing website; proposed for App Store Connect.
Decision date: 2026-09-06.

Drift Dash should sell one instantly legible fantasy: stay ahead of traffic and
escape the police for one more record. The first three screenshots carry the
sequence **survive the gap → dodge and boost → use power-ups**; later frames add
high-score pressure and the police chase. Copy stays in English to match the
current game UI. It must not claim ratings, awards, download counts, release
availability, or mechanics not verified in the shipping build.

## Proposed metadata

**Subtitle (27/30 characters):** `Endless arcade police chase`

**Promotional text:**

> The cops are closing in. Dodge traffic, hit the boost, and turn one quick
> escape into your next impossible-to-ignore record.

**Description:**

> The cops are on your tail. Traffic is everywhere. Your record is one clean
> move away.
>
> Drift Dash is a fast, endless arcade escape built for quick runs and serious
> one-more-try energy. Weave through traffic, collect coins, grab power-ups,
> complete missions, unlock cars, and upgrade engine, grip, boost, and nitro.
> Every run gets faster. Every mistake gets louder. How far can you make it?
>
> FEATURES
>
> - ENDLESS ESCAPES — no finish line, just your next high score
> - OUTRUN THE CHASE — keep control when the police show up
> - BUILD YOUR GARAGE — unlock cars and tune their performance
> - CHASE REWARDS — collect coins and complete missions
> - QUICK TO START — jump in whenever you have a minute

## Screenshot story

1. `NO ROAD? / NO PROBLEM.` — an immediate danger and survival beat.
2. `DODGE. BOOST. / REPEAT.` — the core loop at a glance.
3. `POWER UP. / PUSH FURTHER.` — visible run variety and advantage.
4. `FASTER. CLOSER. / NEW RECORD.` — endless score pressure.
5. `POLICE! / DON'T LOOK BACK.` — the chase payoff.

The website presents these hooks around the five unchanged development captures
and links every card to its original image. Its visual direction (implemented
2026-09-06) follows the store-page conventions of the most downloaded endless
runners: a single challenge question as the headline (“Can you outrun the
cops?”), ALL-CAPS imperative verbs, three-to-five-word screenshot hooks, and
saturated yellow, orange, pink, and cyan on a near-black purple. Every visual
element other than the icon and the five captures is CSS: the sunburst and
perspective road echo the icon, hazard stripes and crossing marquee strips carry
the “one more run” loop, and each gallery card shows the speed and distance
visible in that frame’s HUD. The icon uses only the existing car,
road, cyan chevron, and glow artwork. Its close crop, explosive warm backlight,
and cyan speed tunnel create a much stronger small-size silhouette. The final
1024-pixel marketing icon was produced with an AI-assisted edit constrained to
those existing elements; no new gameplay objects or third-party art were added.

## Evidence and validation direction

Current US App Store pages were reviewed on 2026-09-06. The closest proven
positioning examples were Subway Surfers (3.8M ratings, 4.6), Smashy Road:
Wanted 2 (109K, 4.8), and #DRIVE (31K, 4.6). Their strongest shared pattern is
plain-language action and a single recognizable fantasy, not feature-heavy
opening copy. Ratings are evidence for benchmark selection only and must never
appear as Drift Dash claims.

Apple recommends a simple, recognizable icon, says screenshots should show the
experience and lead with the strongest benefits, and notes that the first one to
three screenshots may appear in search results. Use Product Page Optimization
to test the new icon and first-frame message against the original after the app
has enough traffic; clickbait tone is a hypothesis, not proof of conversion.

References:

- [Apple product page guidance](https://developer.apple.com/app-store/product-page/)
- [Apple asset best practices](https://developer.apple.com/app-store/asset-best-practices/)
- [Apple App Review Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Subway Surfers](https://apps.apple.com/us/app/subway-surfers/id512939461)
- [Smashy Road: Wanted 2](https://apps.apple.com/us/app/smashy-road-wanted-2/id1371501878)
- [#DRIVE](https://apps.apple.com/us/app/drive/id1366180154)
