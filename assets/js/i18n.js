(function () {
  "use strict";

  const STORAGE_KEY = "lupinLang";
  const DEFAULT_LANG = "en";
  const SUPPORTED = ["en", "ko"];

  const TRANSLATIONS = {
    en: {
      // ── Shared: nav (index) ──
      "nav.features": "Features",
      "nav.how_to_play": "How to Play",
      "nav.lp_economy": "LP Economy",
      "nav.roadmap": "Roadmap",
      "nav.faq": "FAQ",
      "nav.play_now": "Play Now",

      // ── Shared: landing footer ──
      "footer.copyright": "© 2026 DreamDo Games. All rights reserved.",
      "footer.tagline": "Grow together. Play together.",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",

      // ── Shared: docs sidebar ──
      "docs.brand_sub": "Documentation",
      "docs.section.overview": "Overview",
      "docs.section.getting_started": "Getting Started",
      "docs.section.support": "Support",
      "docs.section.legal": "Legal",
      "docs.nav.welcome": "Welcome",
      "docs.nav.features": "Features",
      "docs.nav.how_to_play": "How to Play",
      "docs.nav.faq": "FAQ",
      "docs.nav.privacy": "Privacy Policy",
      "docs.nav.terms": "Terms of Service",
      "docs.play_on_telegram": "Play on Telegram",
      "docs.mobile_title": "Lupin Spin Docs",
      "docs.footer.copyright": "© 2026 DreamDo Games",
      "docs.footer.tagline": "Grow together. Play together.",
      "docs.breadcrumb.docs": "Lupin Spin Docs",
      "docs.breadcrumb.getting_started": "Getting Started",
      "docs.breadcrumb.support": "Support",
      "docs.breadcrumb.legal": "Legal",

      // ── Meta titles ──
      "meta.title.index": "Lupin Spin — Slot RPG on Telegram",
      "meta.desc.index": "Spin. Raid. Build. Earn. Start with slots, grow with cards, compete with players. Your LP travels across games and grows with us.",
      "meta.title.features": "Features — Lupin Spin Docs",
      "meta.title.how_to_play": "How to Play — Lupin Spin Docs",
      "meta.title.faq": "FAQ — Lupin Spin Docs",
      "meta.title.privacy": "Privacy Policy — Lupin Spin Docs",
      "meta.title.terms": "Terms of Service — Lupin Spin Docs",

      // ── index: HERO ──
      "hero.badge": "🎰 Slot RPG on Telegram — Beta Live",
      "hero.h1.1": "Spin.",
      "hero.h1.2": "Raid.",
      "hero.h1.3": "Build.",
      "hero.h1.4": "Earn.",
      "hero.sub": "Start with slots, grow with cards, compete with players.<br><span class=\"text-yellow-400 font-semibold\">Your LP travels across games and grows with us.</span>",
      "hero.cta.primary": "Play on Telegram",
      "hero.cta.secondary": "How to Play",
      "hero.stat1.title": "Slot RPG",
      "hero.stat1.sub": "Play &amp; Build",
      "hero.stat2.title": "Cross-Game",
      "hero.stat2.sub": "LP Economy",
      "hero.stat3.title": "Grow with Us",
      "hero.stat3.sub": "DreamDo Games Series",
      "hero.scroll": "scroll",

      // ── index: Game Loop ──
      "gameloop.kicker": "Game Loop",
      "gameloop.h2": "One slot. Endless growth.",
      "gameloop.sub": "Lupin Spin isn't just a slot.<br>Every spin moves your journey forward.",
      "gameloop.step1.title": "SPIN",
      "gameloop.step1.desc": "Burn energy. Spin the slot.",
      "gameloop.step2.title": "WIN",
      "gameloop.step2.desc": "Earn gold, symbols, cards, and quests.",
      "gameloop.step3.title": "RAID",
      "gameloop.step3.desc": "Attack, defend, and raid other players.",
      "gameloop.step4.title": "BUILD",
      "gameloop.step4.desc": "Buy and upgrade stage-specific treasure cards.",
      "gameloop.step5.title": "EARN",
      "gameloop.step5.desc": "Every play earns LP.",
      "gameloop.anchor.kicker": "Win · Symbol Quest",
      "gameloop.anchor.h3": "Symbols align.<br>Cards burst.",
      "gameloop.anchor.p1": "Collect specific symbols from the slot to complete <span class=\"text-yellow-400 font-semibold\">card quests</span>. Every finished quest bursts bonus gold into your wallet.",
      "gameloop.anchor.p2": "Every spin pushes a quest forward. That gold grows your treasure cards, which build your <span class=\"text-yellow-400 font-semibold\">LP</span>.",

      // ── index: Get Started ──
      "getstarted.kicker": "Get Started",
      "getstarted.h2": "Start in three steps",
      "getstarted.cat_bubble": "Shall we start? 🐾",
      "getstarted.step1.title": "Open in Telegram",
      "getstarted.step1.desc": "Search for <span class=\"text-yellow-500 font-semibold\">@LupinSpinBot</span> in Telegram or tap the link.",
      "getstarted.step2.title": "Your first spin",
      "getstarted.step2.desc": "Spend energy on a spin and collect gold and symbols. Every spin counts.",
      "getstarted.step3.title": "Grow cards, stack LP",
      "getstarted.step3.desc": "Upgrade treasure cards and LP piles up on its own. Don't forget to compete with other players either.",
      "getstarted.cta.primary": "Play Now",
      "getstarted.cta.secondary": "Full Play Guide",

      // ── index: LP section ──
      "lp.kicker": "LP — Grow with Us",
      "lp.h2": "<span class=\"gold-text\">LP</span> — What you earn<br>doesn't disappear.",
      "lp.sub": "LP isn't just a game point.<br>It's your share, growing with the DreamDo Games ecosystem.",
      "lp.anchor.kicker": "The LP Moment",
      "lp.anchor.caption": "Every spin, every card, every raid — at the end, LP bursts.",
      "lp.card1.title": "Earn in Play",
      "lp.card1.desc": "Slots, raids, cards — every play earns LP.",
      "lp.card2.title": "Use Anywhere",
      "lp.card2.desc": "Use LP across other DreamDo Games titles through Lupin Hub.",
      "lp.card3.title": "Grow with Us",
      "lp.card3.desc": "Exchange for tickets and rewards at the right moment. As we grow, you grow.",
      "lp.quote": "\"LP is how we stay in this together.\"",
      "lp.quote_sub": "Even after the game ends, your LP remains.",

      // ── index: Roadmap ──
      "roadmap.kicker": "Roadmap",
      "roadmap.h2": "What's Next",
      "roadmap.sub": "Lupin Spin is just the beginning.<br>DreamDo Games is building multiple games connected by one economy.",
      "roadmap.now.badge": "NOW",
      "roadmap.next.badge": "NEXT",
      "roadmap.then.badge": "THEN",
      "roadmap.later.badge": "LATER",
      "roadmap.1.title": "Lupin Spin",
      "roadmap.1.desc": "Slot RPG · Beta Live",
      "roadmap.2.title": "Lupin Hub",
      "roadmap.2.desc": "The unified hub mini-app. Heart of the LP economy. Gateway to every DreamDo Games title.",
      "roadmap.3.title": "Lupin Casino",
      "roadmap.3.desc": "Full casino. 20+ slots, hold'em, blackjack, board games.",
      "roadmap.4.title": "Lupin Quest",
      "roadmap.4.suffix": "(working title)",
      "roadmap.4.desc": "RPG slot with a cascading battle system.",

      // ── index: Worlds in Motion ──
      "worlds.kicker": "Worlds in Motion",
      "worlds.h2": "Worlds coming soon",
      "worlds.sub": "Different stages, different treasures.<br>Lupin's collection keeps expanding.",
      "worlds.caption": "* Images are in development and may differ from final releases.",

      // ── index: Made by DreamDo Games ──
      "about.kicker": "Made by DreamDo Games",
      "about.h2.1": "Grow together.",
      "about.h2.2": "Play together.",
      "about.p1": "DreamDo Games is a publisher making games on Telegram. We make games where the time you put in turns into real value.",
      "about.p2": "Lupin Spin is our first title, and <span class=\"text-yellow-400 font-semibold\">the starting point of a larger ecosystem</span>.",
      "about.principle1.label": "Real Value",
      "about.principle1.desc": "LP isn't decoration — it's a promise. What you earn is real.",
      "about.principle2.label": "One Economy",
      "about.principle2.desc": "One LP, many games. What you've built lives everywhere.",
      "about.principle3.label": "Grow Together",
      "about.principle3.desc": "When we grow, you grow. That's why it stays, even when the game ends.",

      // ── index: FAQ teaser ──
      "faq_home.kicker": "FAQ",
      "faq_home.h2": "Frequently Asked Questions",
      "faq_home.q1": "Is Lupin Spin a gambling game?",
      "faq_home.a1": "No. Lupin Spin is a <strong>Slot RPG</strong> that uses slots as its core loop. There's no real-money betting — the point is in-game progression and growth.",
      "faq_home.q2": "When can LP be exchanged for tickets and rewards?",
      "faq_home.a2": "At a specific point on the roadmap, via <strong>Lupin Hub</strong>. The exact timing will be announced later.",
      "faq_home.q3": "Can I use LP in other DreamDo Games titles?",
      "faq_home.a3": "Yes, once Lupin Hub launches. One LP, many games.",
      "faq_home.see_all": "See all FAQ",

      // ── features.html ──
      "features.h1": "Features",
      "features.intro": "Lupin Spin is a <span class=\"gold\">Slot RPG</span> on Telegram. Slots are the core loop engine — on top sit treasure cards, raids, and the LP economy.",
      "features.coreloop.h2": "Core Loop",
      "features.coreloop.p": "Spend energy on spins to collect gold and symbols, grow treasure cards, earn LP — that's the basic flow.",
      "features.coreloop.diagram": "Energy → <span class=\"gold\">Spin</span> → Win (Gold / Symbol / Card / Quest)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ <span class=\"gold\">Raid</span> (attack · defend · raid)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ Gold → <span class=\"gold\">Treasure Card</span> (buy · upgrade)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ <span class=\"gold\">LP</span> (Lupin Points)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ [Future] Use in other games via Hub · Exchange for rewards",
      "features.f1.title": "Slot — Where it all begins",
      "features.f1.desc": "Spin the slot with energy and out come gold, symbols, cards, and quests. Collecting specific symbols earns bonus gold, and certain combinations trigger raid and defense opportunities.",
      "features.f2.title": "Treasure Card — A yield-bearing asset",
      "features.f2.desc": "Every stage features three treasure items that symbolize its world's <span class=\"gold\">wealth</span>. Buy and upgrade with gold to activate, and active cards automatically produce tokens every hour.",
      "features.f2.note": "A shared card UI with different treasure icons. A passive-yield structure.",
      "features.f3.title": "NOA — The manager",
      "features.f3.desc": "A cat proxying for the god of luck, and the keeper of your treasure cards. Mysterious but perpetually bothered — a tsundere companion who reluctantly supports your growth.",
      "features.f3.note": "Guide for the treasure card system and visual narrator of the token production and collection flow.",
      "features.f4.title": "Raid &amp; PvP",
      "features.f4.desc": "Slot outcomes can give you chances to attack other players' treasures, defend, or join raids. It's more than a slot — the <span class=\"gold\">social PvP layer</span> is alive here.",
      "features.f5.title": "LP (Lupin Points) — Cross-Game Asset",
      "features.f5.desc": "Every play earns LP. LP isn't a simple point — it's a composite asset.",
      "features.f5.item1": "<span class=\"text-slate-300 font-medium\">① In-game currency</span> — earn and spend inside Lupin Spin",
      "features.f5.item2": "<span class=\"text-slate-300 font-medium\">② Cross-game asset</span> — use in other DreamDo Games titles via Lupin Hub",
      "features.f5.item3": "<span class=\"text-slate-300 font-medium\">③ Exchangeable</span> — swap for tickets and rewards at a specific moment",
      "features.f5.item4": "<span class=\"text-slate-300 font-medium\">④ Growth-sharing</span> — DreamDo Games' growth, shared with you",
      "features.f6.title": "Telegram Native",
      "features.f6.desc": "Play directly in Telegram — no separate app install. Open <span class=\"gold\">@LupinSpinBot</span> and tap Play to start instantly.",
      "features.scenario.h2": "Lore — The great misunderstanding and the true treasure",
      "features.scenario.p1": "<span class=\"gold\">Lupin</span>, a genius thief who lusts after every rare thing in the world. His one life's purpose: filling his hideout with one-of-a-kind spoils.",
      "features.scenario.p2": "One day, drawn by the aura of wealth emanating from the treasures, a mysterious cat named <span class=\"gold\">NOA</span> appears. Perpetually bothered, NOA offers to manage the treasures — and an odd cohabitation begins.",
      "features.scenario.p3": "NOA refines the treasures' aura into round <span class=\"gold\">tokens</span>. Lupin dismisses them as mere \"shiny scraps,\" but in truth they're the purest essence of wealth — more precious than any gold.",
      "features.note": "<span class=\"font-semibold\">Note:</span> Base gameplay is free and available with just a Telegram account. There's no real-money betting.",
      "features.prev": "← Previous",
      "features.prev_title": "Welcome",
      "features.next": "Next →",
      "features.next_title": "How to Play",

      // ── how-to-play.html ──
      "hp.h1": "How to Play",
      "hp.intro": "Spend energy to spin the slot, grow cards, and compete with other players — the basic flow of the <span class=\"gold\">Slot RPG</span>.",
      "hp.step1.title": "Start Lupin Spin in Telegram",
      "hp.step1.desc": "In Telegram, search for <a href=\"https://t.me/LupinSpinBot\" target=\"_blank\" class=\"text-amber-500 hover:text-amber-400 underline underline-offset-2\">@LupinSpinBot</a> or tap the link. Pressing the Play button below the chat opens the Mini App. No separate installation — the game starts right away.",
      "hp.step2.title": "First spin — burn energy, spin the slot",
      "hp.step2.desc": "You're given energy when you start. Spend 1 energy for one spin. When the reels stop, the outcome moves gold, symbols, cards, and quest progress all at once.",
      "hp.step3.title": "Collect gold and symbols",
      "hp.step3.desc": "Gold from spins is automatically added to your wallet. Collecting specific symbols completes a <span class=\"gold\">card quest</span>, which rewards bonus gold.",
      "hp.step4.title": "Buy and upgrade treasure cards",
      "hp.step4.desc": "Use your gold to buy stage-specific <span class=\"gold\">treasure cards</span>. Active cards automatically produce tokens every hour. Upgrading increases the yield.",
      "hp.step4.note": "This is the step where NOA refines the treasures' aura into tokens for you.",
      "hp.step5.title": "Compete — Raid · Attack · Defend",
      "hp.step5.desc": "Slot outcomes can give you chances to attack another player or join a raid. Your treasures can also be attacked, so defense matters too.",
      "hp.step6.title": "Check your LP",
      "hp.step6.desc": "Every play converts into <span class=\"gold\">LP (Lupin Points)</span> and accumulates. Check your total LP on your in-game profile.",
      "hp.step6.note": "LP will later be usable in other DreamDo Games titles via Lupin Hub, and exchangeable for tickets and rewards.",
      "hp.tip.title": "🎩 Tip",
      "hp.tip.item1": "Energy recharges automatically over time. Drop in often and keep spinning.",
      "hp.tip.item2": "Activating all 3 treasure cards within the same stage triggers a synergy bonus.",
      "hp.tip.item3": "Invite friends for bonus energy and LP.",
      "hp.cta": "Play Now",
      "hp.prev": "← Previous",
      "hp.prev_title": "Features",
      "hp.next": "Next →",
      "hp.next_title": "FAQ",

      // ── faq.html ──
      "faq.h1": "Frequently Asked Questions",
      "faq.intro": "Answers to common questions about Lupin Spin and the LP economy.",
      "faq.group.about": "About the Game",
      "faq.group.lp": "LP &amp; Ecosystem",
      "faq.group.misc": "Misc",
      "faq.q1": "Is Lupin Spin a gambling game?",
      "faq.a1": "No. Lupin Spin is a <span class=\"gold font-semibold\">Slot RPG</span> that uses slots as its core loop. There's no real-money betting — the point is in-game progression and growth (treasure card upgrades, raids, LP accumulation).",
      "faq.q2": "Where do I play Lupin Spin?",
      "faq.a2": "Inside a Telegram Mini App. Open <a href=\"https://t.me/LupinSpinBot\" target=\"_blank\" class=\"text-amber-500 hover:text-amber-400 underline underline-offset-2\">@LupinSpinBot</a> in Telegram and tap the Play button to start instantly. No separate app install needed.",
      "faq.q3": "Is it free to play?",
      "faq.a3": "Yes, base gameplay is free. You just need a Telegram account.",
      "faq.q4": "How does energy recharge?",
      "faq.a4": "Energy recharges automatically over time. You can also get extra energy by inviting friends or through seasonal events.",
      "faq.q5": "How do I get treasure cards?",
      "faq.a5": "Buy and upgrade stage-specific treasure cards with the gold you earn from spins. Active cards automatically produce tokens every hour. Activating all 3 cards in the same stage triggers a synergy bonus.",
      "faq.q6": "Who is NOA, the manager?",
      "faq.a6": "A cat proxying for the god of luck, responsible for managing your treasure cards. A perpetually bothered tsundere — but the key helper who refines the treasures' aura of wealth into tokens for you.",
      "faq.q7": "What is LP?",
      "faq.a7": "<span class=\"gold font-semibold\">LP (Lupin Points)</span> is a composite asset, not a simple point: ① in-game currency, ② cross-game asset, ③ exchangeable value, ④ a way to share DreamDo Games' growth with you. Every play (spin · raid · card) accumulates LP.",
      "faq.q8": "When can LP be exchanged for tickets and rewards?",
      "faq.a8": "At a specific point on the roadmap, via <span class=\"gold font-semibold\">Lupin Hub</span>. The exact timing will be announced later.",
      "faq.q9": "Can I use LP in other DreamDo Games titles?",
      "faq.a9": "Yes, after Lupin Hub launches. A single LP balance will be usable in DreamDo Games titles launching later — Lupin Casino, Lupin Quest, and more.",
      "faq.q10": "What is DreamDo Games?",
      "faq.a10": "DreamDo Games is a publisher of games built as Telegram mini-apps. \"Grow together. Play together.\" — we build experiences where players take part in a game's growth and share in it. Lupin Spin is the first title of our first series (Lupin Series).",
      "faq.q11": "When is Lupin Hub launching?",
      "faq.a11": "It's the NEXT step after Lupin Spin Beta. The exact timing will be announced later; updates go out through our Telegram channel.",
      "faq.q12": "What is this site for?",
      "faq.a12": "The official introduction and documentation site for Lupin Spin — game overview, play guide, FAQ, and policies. Actual gameplay happens in the Telegram Mini App.",
      "faq.q13": "Where can I follow updates?",
      "faq.a13": "Updates and announcements go out through our Telegram channel. Major updates are also reflected on this docs site.",
      "faq.prev": "← Previous",
      "faq.prev_title": "How to Play",
      "faq.next": "Next →",
      "faq.next_title": "Privacy Policy",

      // ── privacy.html ──
      "priv.h1": "Privacy Policy",
      "priv.updated": "Last updated: March 2026",
      "priv.s1.h2": "1. Information We Collect",
      "priv.s1.p": "Lupin Spin collects Telegram account information (nickname, ID) in order to provide the service. Account linking happens automatically through your Telegram account — there's no separate sign-up.",
      "priv.s2.h2": "2. How We Use It",
      "priv.s2.p": "The information collected is used only for providing the game service, delivering rewards, and customer support. It is not used for marketing.",
      "priv.s3.h2": "3. Retention",
      "priv.s3.p": "Data is retained for the duration of your service use, and destroyed within 30 days of an account deletion request. Where retention is required by law, it is stored separately for that period.",
      "priv.s4.h2": "4. Third-Party Sharing",
      "priv.s4.p": "We do not share personal data with third parties except as required by law. Telegram's own privacy policy applies separately to the platform.",
      "priv.s5.h2": "5. Contact",
      "priv.s5.p": "For privacy-related inquiries, please reach out via Telegram. We'll respond within 7 business days.",
      "priv.prev": "← Previous",
      "priv.prev_title": "FAQ",
      "priv.next": "Next →",
      "priv.next_title": "Terms of Service",

      // ── terms.html ──
      "terms.h1": "Terms of Service",
      "terms.updated": "Last updated: March 2026",
      "terms.s1.h2": "1. Use of the Service",
      "terms.s1.p": "Lupin Spin is a Slot RPG service provided through a Telegram Mini App. Available to users aged 18 and over. By using the service you agree to these terms.",
      "terms.s2.h2": "2. Virtual Goods",
      "terms.s2.p": "All in-game goods (LP, gold, tokens, etc.) are virtual goods with no real-world monetary value. Virtual goods are non-refundable and non-transferable between accounts.",
      "terms.s3.h2": "3. Account Policy",
      "terms.s3.p": "Account sharing, use of automation (bots), and cheating may result in account suspension. Please follow the one-account-per-person rule.",
      "terms.s4.h2": "4. Usage Restrictions",
      "terms.s4.p": "Violations of operational policy may lead to service restrictions without prior notice. Repeated violations may result in permanent suspension.",
      "terms.s5.h2": "5. Disclaimer",
      "terms.s5.p": "DreamDo Games is not liable for damages caused by service interruptions, data loss, network errors, or similar. The service is provided as-is.",
      "terms.s6.h2": "6. Changes to Terms",
      "terms.s6.p": "Terms may be changed with prior notice. Continued use of the service after a change constitutes acceptance of the updated terms.",
      "terms.prev": "← Previous",
      "terms.prev_title": "Privacy Policy"
    },

    ko: {
      // ── Shared: nav (index) ──
      "nav.features": "기능",
      "nav.how_to_play": "플레이 가이드",
      "nav.lp_economy": "LP 경제",
      "nav.roadmap": "로드맵",
      "nav.faq": "FAQ",
      "nav.play_now": "플레이",

      // ── Shared: landing footer ──
      "footer.copyright": "© 2026 DreamDo Games. All rights reserved.",
      "footer.tagline": "Grow together. Play together.",
      "footer.privacy": "개인정보",
      "footer.terms": "이용약관",

      // ── Shared: docs sidebar ──
      "docs.brand_sub": "Documentation",
      "docs.section.overview": "개요",
      "docs.section.getting_started": "시작하기",
      "docs.section.support": "지원",
      "docs.section.legal": "약관",
      "docs.nav.welcome": "소개",
      "docs.nav.features": "기능",
      "docs.nav.how_to_play": "플레이 가이드",
      "docs.nav.faq": "FAQ",
      "docs.nav.privacy": "개인정보처리방침",
      "docs.nav.terms": "서비스 이용약관",
      "docs.play_on_telegram": "Telegram에서 플레이",
      "docs.mobile_title": "Lupin Spin Docs",
      "docs.footer.copyright": "© 2026 DreamDo Games",
      "docs.footer.tagline": "Grow together. Play together.",
      "docs.breadcrumb.docs": "Lupin Spin Docs",
      "docs.breadcrumb.getting_started": "시작하기",
      "docs.breadcrumb.support": "지원",
      "docs.breadcrumb.legal": "약관",

      // ── Meta titles ──
      "meta.title.index": "Lupin Spin — Telegram Slot RPG",
      "meta.desc.index": "Spin. Raid. Build. Earn. 슬롯으로 시작해, 카드로 키우고, 플레이어와 겨룬다. 쌓인 LP는 게임을 넘나들고, 우리와 함께 자란다.",
      "meta.title.features": "기능 — Lupin Spin Docs",
      "meta.title.how_to_play": "플레이 가이드 — Lupin Spin Docs",
      "meta.title.faq": "FAQ — Lupin Spin Docs",
      "meta.title.privacy": "개인정보처리방침 — Lupin Spin Docs",
      "meta.title.terms": "서비스 이용약관 — Lupin Spin Docs",

      // ── index: HERO ──
      "hero.badge": "🎰 Telegram Slot RPG — 베타 진행 중",
      "hero.h1.1": "Spin.",
      "hero.h1.2": "Raid.",
      "hero.h1.3": "Build.",
      "hero.h1.4": "Earn.",
      "hero.sub": "슬롯으로 시작해, 카드로 키우고, 플레이어와 겨룬다.<br>쌓인 <span class=\"text-yellow-400 font-semibold\">LP는 게임을 넘나들고, 우리와 함께 자란다.</span>",
      "hero.cta.primary": "Telegram에서 플레이",
      "hero.cta.secondary": "플레이 가이드",
      "hero.stat1.title": "Slot RPG",
      "hero.stat1.sub": "Play &amp; Build",
      "hero.stat2.title": "Cross-Game",
      "hero.stat2.sub": "LP Economy",
      "hero.stat3.title": "Grow with Us",
      "hero.stat3.sub": "DreamDo Games 시리즈",
      "hero.scroll": "scroll",

      // ── index: Game Loop ──
      "gameloop.kicker": "Game Loop",
      "gameloop.h2": "하나의 슬롯, 끝없는 성장",
      "gameloop.sub": "Lupin Spin은 단순한 슬롯이 아닙니다.<br>모든 스핀이 당신의 여정을 움직입니다.",
      "gameloop.step1.title": "SPIN",
      "gameloop.step1.desc": "에너지를 태워 슬롯을 돌린다.",
      "gameloop.step2.title": "WIN",
      "gameloop.step2.desc": "골드, 심볼, 카드, 퀘스트를 획득한다.",
      "gameloop.step3.title": "RAID",
      "gameloop.step3.desc": "다른 플레이어와 공격·방어·레이드.",
      "gameloop.step4.title": "BUILD",
      "gameloop.step4.desc": "스테이지별 트레저 카드 구매·업그레이드.",
      "gameloop.step5.title": "EARN",
      "gameloop.step5.desc": "모든 플레이가 LP로 쌓인다.",
      "gameloop.anchor.kicker": "Win · Symbol Quest",
      "gameloop.anchor.h3": "심볼이 모이면,<br>카드가 터진다.",
      "gameloop.anchor.p1": "슬롯에서 나온 특정 심볼을 모으면 <span class=\"text-yellow-400 font-semibold\">카드 퀘스트</span>가 완료됩니다. 퀘스트를 완성할 때마다 보너스 골드가 터져 나와 당신의 지갑으로 쏟아집니다.",
      "gameloop.anchor.p2": "모든 스핀이 퀘스트를 움직이고, 그 골드로 다시 트레저 카드를 키워 <span class=\"text-yellow-400 font-semibold\">LP</span>로 이어집니다.",

      // ── index: Get Started ──
      "getstarted.kicker": "Get Started",
      "getstarted.h2": "3단계로 시작하기",
      "getstarted.cat_bubble": "하암… 시작해볼래? 🐾",
      "getstarted.step1.title": "Telegram에서 열기",
      "getstarted.step1.desc": "Telegram에서 <span class=\"text-yellow-500 font-semibold\">@LupinSpinBot</span>을 검색하거나 링크를 누르세요.",
      "getstarted.step2.title": "첫 스핀",
      "getstarted.step2.desc": "에너지로 슬롯을 돌려 골드와 심볼을 모으세요. 모든 스핀이 기록됩니다.",
      "getstarted.step3.title": "카드를 키우고 LP를 모으세요",
      "getstarted.step3.desc": "트레저 카드를 업그레이드하면 LP가 자동으로 쌓입니다. 다른 플레이어와 겨루는 것도 잊지 말고요.",
      "getstarted.cta.primary": "지금 바로 시작하기",
      "getstarted.cta.secondary": "전체 플레이 가이드",

      // ── index: LP section ──
      "lp.kicker": "LP — Grow with Us",
      "lp.h2": "<span class=\"gold-text\">LP</span> — 당신이 쌓은 것은<br>사라지지 않는다",
      "lp.sub": "LP는 단순한 게임 포인트가 아닙니다.<br>DreamDo Games 생태계와 함께 자라는, 당신의 몫입니다.",
      "lp.anchor.kicker": "The LP Moment",
      "lp.anchor.caption": "모든 스핀, 모든 카드, 모든 레이드 — 그 끝에 LP가 터진다.",
      "lp.card1.title": "Earn in Play",
      "lp.card1.desc": "슬롯, 레이드, 카드 — 모든 플레이가 LP로 쌓입니다.",
      "lp.card2.title": "Use Anywhere",
      "lp.card2.desc": "Lupin Hub를 통해 DreamDo Games의 다른 게임에서 사용합니다.",
      "lp.card3.title": "Grow with Us",
      "lp.card3.desc": "특정 시점에 티켓과 리워드로 교환. 우리가 커지면, 당신도 커집니다.",
      "lp.quote": "\"LP is how we stay in this together.\"",
      "lp.quote_sub": "게임이 끝나도, 당신의 LP는 남습니다.",

      // ── index: Roadmap ──
      "roadmap.kicker": "Roadmap",
      "roadmap.h2": "What's Next",
      "roadmap.sub": "Lupin Spin은 시작입니다.<br>DreamDo Games는 하나의 경제로 연결된 여러 게임을 만들고 있습니다.",
      "roadmap.now.badge": "NOW",
      "roadmap.next.badge": "NEXT",
      "roadmap.then.badge": "THEN",
      "roadmap.later.badge": "LATER",
      "roadmap.1.title": "Lupin Spin",
      "roadmap.1.desc": "Slot RPG · Beta Live",
      "roadmap.2.title": "Lupin Hub",
      "roadmap.2.desc": "통합 허브 미니앱. LP 경제의 중심. 모든 DreamDo Games 게임의 관문.",
      "roadmap.3.title": "Lupin Casino",
      "roadmap.3.desc": "종합 카지노. 슬롯 20+종, 홀덤, 블랙잭, 보드 게임.",
      "roadmap.4.title": "Lupin Quest",
      "roadmap.4.suffix": "(가제)",
      "roadmap.4.desc": "RPG 슬롯, 캐스케이딩 전투 시스템.",

      // ── index: Worlds in Motion ──
      "worlds.kicker": "Worlds in Motion",
      "worlds.h2": "앞으로 추가될 세계들",
      "worlds.sub": "스테이지마다 다른 세계, 다른 보물.<br>루핀의 컬렉션은 계속해서 확장됩니다.",
      "worlds.caption": "* 이미지는 개발 중인 콘텐츠이며 실제 출시물과 다를 수 있습니다.",

      // ── index: Made by DreamDo Games ──
      "about.kicker": "Made by DreamDo Games",
      "about.h2.1": "Grow together.",
      "about.h2.2": "Play together.",
      "about.p1": "DreamDo Games는 Telegram 위에서 게임을 만드는 퍼블리셔입니다. 우리는 플레이어의 시간이 진짜 가치로 남는 게임을 만듭니다.",
      "about.p2": "Lupin Spin은 우리의 첫 작품이자, <span class=\"text-yellow-400 font-semibold\">더 큰 생태계의 시작점</span>입니다.",
      "about.principle1.label": "Real Value",
      "about.principle1.desc": "LP는 장식이 아니라 약속이다. 유저가 얻은 것은 진짜다.",
      "about.principle2.label": "One Economy",
      "about.principle2.desc": "하나의 LP, 여러 게임. 당신이 쌓은 것은 어디서나 살아있다.",
      "about.principle3.label": "Grow Together",
      "about.principle3.desc": "우리가 크면, 당신도 큰다. 그게 게임이 끝나도 남는 이유다.",

      // ── index: FAQ teaser ──
      "faq_home.kicker": "FAQ",
      "faq_home.h2": "자주 묻는 질문",
      "faq_home.q1": "Lupin Spin은 도박 게임인가요?",
      "faq_home.a1": "아닙니다. Lupin Spin은 슬롯을 코어 루프로 활용하는 <strong>Slot RPG</strong>입니다. 실제 현금 베팅이 없고, 게임 내 진행과 성장이 목적입니다.",
      "faq_home.q2": "LP는 언제 티켓·리워드로 전환되나요?",
      "faq_home.a2": "로드맵의 특정 시점에 <strong>Lupin Hub</strong>를 통해 교환이 가능해질 예정입니다. 구체적 시점은 추후 공지합니다.",
      "faq_home.q3": "다른 DreamDo Games 게임에서도 LP를 사용할 수 있나요?",
      "faq_home.a3": "네, Lupin Hub 출시 이후 가능합니다. 하나의 LP로 여러 게임을 넘나듭니다.",
      "faq_home.see_all": "모든 FAQ 보기",

      // ── features.html ──
      "features.h1": "기능",
      "features.intro": "Lupin Spin은 Telegram 위에서 돌아가는 <span class=\"gold\">Slot RPG</span>입니다. 슬롯은 코어 루프 엔진, 그 위에 트레저 카드 · 레이드 · LP 경제 레이어가 얹혀있습니다.",
      "features.coreloop.h2": "Core Loop",
      "features.coreloop.p": "에너지로 스핀을 돌려 골드와 심볼을 모으고, 트레저 카드를 키워 LP를 얻는 흐름이 기본 루프입니다.",
      "features.coreloop.diagram": "에너지 → <span class=\"gold\">Spin</span> → Win (Gold / Symbol / Card / Quest)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ <span class=\"gold\">Raid</span> (attack · defend · raid)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ Gold → <span class=\"gold\">Treasure Card</span> (구매 · 업그레이드)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ <span class=\"gold\">LP</span> (Lupin Points)<br>&nbsp;&nbsp;&nbsp;&nbsp;→ [Future] Hub에서 타 게임 사용 · 리워드 교환",
      "features.f1.title": "Slot — 모든 것의 시작",
      "features.f1.desc": "에너지를 태워 슬롯을 돌리면 골드, 심볼, 카드, 퀘스트가 나옵니다. 특정 심볼을 모으면 보너스 골드가, 조합에 따라 레이드·방어 기회가 발생합니다.",
      "features.f2.title": "Treasure Card — 수익형 자산",
      "features.f2.desc": "스테이지마다 그 세계관의 <span class=\"gold\">재화(Wealth)</span>를 상징하는 3종의 보물 아이템으로 구성됩니다. 골드로 구매·업그레이드하면 활성화되고, 활성 카드는 시간당 토큰을 자동 생산합니다.",
      "features.f2.note": "공통 카드 UI 안에 각기 다른 트레저 아이콘이 삽입되는 형태. 방치형 수익 구조.",
      "features.f3.title": "관리인 노아 (NOA)",
      "features.f3.desc": "행운의 신을 대리하는 고양이이자 트레저 카드 관리자. 신비롭지만 만사가 귀찮은 귀차니스트 — 당신의 성장을 귀찮아하면서도 은근히 챙기는 츤데레 조력자입니다.",
      "features.f3.note": "트레저 카드 시스템 가이드 및 토큰 생산·수령 프로세스의 시각적 화자.",
      "features.f4.title": "Raid &amp; PvP",
      "features.f4.desc": "스핀 결과에 따라 다른 플레이어의 보물을 공격하거나, 방어하거나, 레이드에 참여할 수 있습니다. 단순한 슬롯이 아닌 <span class=\"gold\">소셜 PvP 레이어</span>가 살아 있는 이유입니다.",
      "features.f5.title": "LP (Lupin Points) — Cross-Game Asset",
      "features.f5.desc": "모든 플레이가 LP로 쌓입니다. LP는 단순 포인트가 아닌 복합 자산입니다.",
      "features.f5.item1": "<span class=\"text-slate-300 font-medium\">① 게임 내 화폐</span> — Lupin Spin 내부 획득·소비",
      "features.f5.item2": "<span class=\"text-slate-300 font-medium\">② 크로스 게임 자산</span> — Lupin Hub로 다른 DreamDo Games 게임에서 사용",
      "features.f5.item3": "<span class=\"text-slate-300 font-medium\">③ 교환 가능</span> — 특정 시점에 티켓·리워드로 교환",
      "features.f5.item4": "<span class=\"text-slate-300 font-medium\">④ 성장 공유 수단</span> — DreamDo Games의 성장을 유저와 함께",
      "features.f6.title": "Telegram Native",
      "features.f6.desc": "별도 앱 설치 없이 Telegram 안에서 바로 플레이. <span class=\"gold\">@LupinSpinBot</span>을 열고 Play 버튼을 누르면 즉시 시작됩니다.",
      "features.scenario.h2": "세계관 — 위대한 착각과 진정한 보물",
      "features.scenario.p1": "세상의 모든 진귀한 물건을 탐내는 천재적인 도둑 <span class=\"gold\">루핀</span>. 그에게 인생의 유일한 목적은 자신의 은신처를 세상에 단 하나뿐인 전리품들로 가득 채우는 것입니다.",
      "features.scenario.p2": "어느 날, 보물에서 뿜어져 나오는 부의 기운에 홀려 정체불명의 고양이 <span class=\"gold\">노아</span>가 찾아옵니다. 만사가 귀찮은 노아는 보물을 관리해주는 대가로 루핀과 기묘한 동거를 시작합니다.",
      "features.scenario.p3": "노아는 보물의 부의 에너지를 정제해 동그란 <span class=\"gold\">토큰</span>으로 만듭니다. 루핀은 그저 \"반짝이는 찌꺼기\"로 여기지만, 사실 이 토큰은 세상 그 어떤 황금보다 귀한 '부의 정수' 그 자체입니다.",
      "features.note": "<span class=\"font-semibold\">참고:</span> 기본 플레이는 무료이며, Telegram 계정만 있으면 바로 시작할 수 있습니다. 실제 현금 베팅은 없습니다.",
      "features.prev": "← 이전",
      "features.prev_title": "소개",
      "features.next": "다음 →",
      "features.next_title": "플레이 가이드",

      // ── how-to-play.html ──
      "hp.h1": "플레이 가이드",
      "hp.intro": "에너지를 태워 슬롯을 돌리고, 카드를 키우고, 다른 플레이어와 겨루는 — <span class=\"gold\">Slot RPG</span>의 기본 플레이 흐름입니다.",
      "hp.step1.title": "Telegram에서 Lupin Spin 시작",
      "hp.step1.desc": "Telegram에서 <a href=\"https://t.me/LupinSpinBot\" target=\"_blank\" class=\"text-amber-500 hover:text-amber-400 underline underline-offset-2\">@LupinSpinBot</a>을 검색하거나 링크를 누르세요. 채팅창 하단의 Play 버튼을 누르면 Mini App이 실행됩니다. 별도 설치 없이 바로 게임이 시작됩니다.",
      "hp.step2.title": "첫 스핀 — 에너지를 태워 슬롯 돌리기",
      "hp.step2.desc": "게임을 시작하면 에너지가 주어집니다. 에너지 1만큼을 소모해 슬롯을 한 번 돌리세요. 릴이 멈추면 결과에 따라 골드, 심볼, 카드, 퀘스트 진행도가 한꺼번에 움직입니다.",
      "hp.step3.title": "골드와 심볼 수집",
      "hp.step3.desc": "슬롯에서 나온 골드는 자동으로 지갑에 쌓입니다. 특정 심볼을 모으면 <span class=\"gold\">카드 퀘스트</span>가 완료되며 보너스 골드를 받을 수 있습니다.",
      "hp.step4.title": "트레저 카드 구매 · 업그레이드",
      "hp.step4.desc": "모은 골드로 스테이지별 <span class=\"gold\">트레저 카드</span>를 구매하세요. 활성화된 카드는 시간당 토큰을 자동으로 생산합니다. 업그레이드할수록 생산량이 늘어납니다.",
      "hp.step4.note": "관리인 노아가 보물의 부의 기운을 정제해 토큰으로 바꿔주는 단계입니다.",
      "hp.step5.title": "다른 플레이어와 대결 (Raid · Attack · Defend)",
      "hp.step5.desc": "슬롯 결과에 따라 다른 플레이어를 공격하거나 레이드에 참여할 기회가 발생합니다. 반대로 당신의 보물이 공격당할 수도 있으니, 방어도 함께 신경 쓰세요.",
      "hp.step6.title": "LP 확인하기",
      "hp.step6.desc": "모든 플레이 활동은 <span class=\"gold\">LP (Lupin Points)</span>로 환산되어 쌓입니다. 게임 내 프로필 화면에서 누적 LP를 확인하세요.",
      "hp.step6.note": "LP는 향후 Lupin Hub를 통해 다른 DreamDo Games 게임에서도 사용하거나, 티켓·리워드로 교환할 수 있게 될 예정입니다.",
      "hp.tip.title": "🎩 Tip",
      "hp.tip.item1": "에너지는 시간이 지나면 자동으로 회복됩니다. 자주 들러서 스핀하세요.",
      "hp.tip.item2": "같은 스테이지의 트레저 카드 3종을 모두 활성화하면 시너지가 발생합니다.",
      "hp.tip.item3": "친구를 초대하면 보너스 에너지와 LP를 받을 수 있습니다.",
      "hp.cta": "지금 플레이하기",
      "hp.prev": "← 이전",
      "hp.prev_title": "기능",
      "hp.next": "다음 →",
      "hp.next_title": "FAQ",

      // ── faq.html ──
      "faq.h1": "자주 묻는 질문",
      "faq.intro": "Lupin Spin과 LP 경제에 대해 자주 묻는 질문들을 정리했습니다.",
      "faq.group.about": "게임에 대해",
      "faq.group.lp": "LP &amp; 생태계",
      "faq.group.misc": "기타",
      "faq.q1": "Lupin Spin은 도박 게임인가요?",
      "faq.a1": "아닙니다. Lupin Spin은 슬롯을 코어 루프로 활용하는 <span class=\"gold font-semibold\">Slot RPG</span>입니다. 실제 현금 베팅이 없고, 게임 내 진행과 성장(트레저 카드 업그레이드, 레이드, LP 축적)이 목적입니다.",
      "faq.q2": "Lupin Spin은 어디서 플레이하나요?",
      "faq.a2": "Telegram Mini App에서 플레이합니다. <a href=\"https://t.me/LupinSpinBot\" target=\"_blank\" class=\"text-amber-500 hover:text-amber-400 underline underline-offset-2\">@LupinSpinBot</a>을 Telegram에서 열고 Play 버튼을 누르면 바로 시작됩니다. 별도 앱 설치가 필요하지 않습니다.",
      "faq.q3": "무료로 플레이할 수 있나요?",
      "faq.a3": "네, 기본 플레이는 무료입니다. Telegram 계정만 있으면 즉시 시작할 수 있습니다.",
      "faq.q4": "에너지는 어떻게 회복되나요?",
      "faq.a4": "시간이 지나면 에너지가 자동으로 회복됩니다. 친구 초대나 시즌 이벤트로 추가 에너지를 받을 수도 있습니다.",
      "faq.q5": "트레저 카드는 어떻게 얻나요?",
      "faq.a5": "스핀으로 얻은 골드로 스테이지별 트레저 카드를 구매하고 업그레이드합니다. 활성화된 카드는 시간당 토큰을 자동으로 생산합니다. 같은 스테이지의 3종 카드를 모두 활성화하면 시너지가 발생합니다.",
      "faq.q6": "관리인 노아(NOA)는 누구인가요?",
      "faq.a6": "행운의 신을 대리하는 고양이로, 트레저 카드 관리자 역할을 합니다. 만사가 귀찮은 귀차니스트지만 보물의 부의 기운을 정제해 토큰으로 만들어주는 핵심 조력자입니다.",
      "faq.q7": "LP는 무엇인가요?",
      "faq.a7": "<span class=\"gold font-semibold\">LP (Lupin Points)</span>는 단순 포인트가 아닌 복합적 성격의 자산입니다 — ①게임 내 화폐, ②크로스 게임 자산, ③교환 가능한 가치, ④DreamDo Games의 성장을 유저와 함께 나누는 수단. 모든 플레이(스핀·레이드·카드)가 LP로 쌓입니다.",
      "faq.q8": "LP는 언제 티켓·리워드로 전환되나요?",
      "faq.a8": "로드맵의 특정 시점에 <span class=\"gold font-semibold\">Lupin Hub</span>를 통해 교환이 가능해질 예정입니다. 구체적 시점은 추후 공지합니다.",
      "faq.q9": "다른 DreamDo Games 게임에서도 LP를 사용할 수 있나요?",
      "faq.a9": "네, Lupin Hub 출시 이후 가능합니다. 하나의 LP로 Lupin Casino, Lupin Quest 등 향후 출시될 DreamDo Games 게임에서 사용할 수 있게 됩니다.",
      "faq.q10": "DreamDo Games는 어떤 회사인가요?",
      "faq.a10": "DreamDo Games는 Telegram 미니앱 기반 게임 퍼블리셔입니다. \"Grow together. Play together.\" — 플레이어가 게임의 성장에 함께 참여하고, 그 성장을 함께 나누는 경험을 만듭니다. Lupin Spin은 첫 시리즈(Lupin Series)의 첫 작품입니다.",
      "faq.q11": "Lupin Hub는 언제 출시되나요?",
      "faq.a11": "Lupin Spin 베타 이후 NEXT 단계로 준비 중입니다. 구체적 시점은 추후 공지하며, 업데이트는 Telegram 채널을 통해 안내됩니다.",
      "faq.q12": "이 사이트는 무슨 용도인가요?",
      "faq.a12": "Lupin Spin의 공식 소개 및 문서 사이트입니다. 게임 소개, 플레이 가이드, FAQ, 정책을 안내합니다. 실제 게임은 Telegram Mini App에서 진행됩니다.",
      "faq.q13": "업데이트 공지는 어디서 보나요?",
      "faq.a13": "업데이트 및 공지사항은 Telegram 채널을 통해 안내됩니다. 이 문서 사이트에서도 주요 업데이트를 반영합니다.",
      "faq.prev": "← 이전",
      "faq.prev_title": "플레이 가이드",
      "faq.next": "다음 →",
      "faq.next_title": "개인정보처리방침",

      // ── privacy.html ──
      "priv.h1": "개인정보처리방침",
      "priv.updated": "최종 업데이트: 2026년 3월",
      "priv.s1.h2": "1. 수집하는 개인정보",
      "priv.s1.p": "Lupin Spin은 서비스 제공을 위해 Telegram 계정 정보(닉네임, ID)를 수집합니다. 별도의 가입 절차 없이 Telegram 계정으로 자동 연동됩니다.",
      "priv.s2.h2": "2. 이용 목적",
      "priv.s2.p": "수집된 정보는 게임 서비스 제공, 보상 지급, 고객 지원에만 활용됩니다. 마케팅 목적으로 활용되지 않습니다.",
      "priv.s3.h2": "3. 보관 기간",
      "priv.s3.p": "서비스 이용 기간 동안 보관되며, 탈퇴 요청 후 30일 이내에 파기됩니다. 법령에 의해 보존이 필요한 경우 해당 기간 동안 별도 보관합니다.",
      "priv.s4.h2": "4. 제3자 제공",
      "priv.s4.p": "법령에 따른 경우를 제외하고 제3자에게 개인정보를 제공하지 않습니다. Telegram 플랫폼의 개인정보처리방침이 별도로 적용됩니다.",
      "priv.s5.h2": "5. 문의",
      "priv.s5.p": "개인정보 관련 문의는 Telegram을 통해 접수해 주세요. 최대 7영업일 이내에 답변드립니다.",
      "priv.prev": "← 이전",
      "priv.prev_title": "FAQ",
      "priv.next": "다음 →",
      "priv.next_title": "서비스 이용약관",

      // ── terms.html ──
      "terms.h1": "서비스 이용약관",
      "terms.updated": "최종 업데이트: 2026년 3월",
      "terms.s1.h2": "1. 서비스 이용",
      "terms.s1.p": "Lupin Spin은 Telegram Mini App을 통해 제공되는 Slot RPG 게임 서비스입니다. 만 18세 이상의 사용자만 이용 가능합니다. 서비스 이용 시 본 약관에 동의한 것으로 간주합니다.",
      "terms.s2.h2": "2. 가상 재화",
      "terms.s2.p": "게임 내 모든 재화(LP, 골드, 토큰 등)는 가상 재화이며 실제 금전적 가치가 없습니다. 가상 재화는 환불되지 않으며, 계정 간 양도가 불가능합니다.",
      "terms.s3.h2": "3. 계정 정책",
      "terms.s3.p": "계정 공유, 자동화 프로그램(봇) 사용, 부정 행위는 계정 정지 사유가 됩니다. 1인 1계정 원칙을 준수해 주세요.",
      "terms.s4.h2": "4. 이용 제한",
      "terms.s4.p": "서비스 운영 정책을 위반할 경우 사전 통보 없이 이용이 제한될 수 있습니다. 반복 위반 시 영구 이용 정지 처분이 내려질 수 있습니다.",
      "terms.s5.h2": "5. 면책 조항",
      "terms.s5.p": "DreamDo Games는 서비스 중단, 데이터 손실, 네트워크 오류 등으로 인한 손해에 대해 책임을 지지 않습니다. 서비스는 현재 상태(as-is)로 제공됩니다.",
      "terms.s6.h2": "6. 약관 변경",
      "terms.s6.p": "약관은 사전 공지 후 변경될 수 있습니다. 변경 후 서비스를 계속 이용할 경우 변경된 약관에 동의한 것으로 간주합니다.",
      "terms.prev": "← 이전",
      "terms.prev_title": "개인정보처리방침"
    }
  };

  // Inject switcher styles
  const style = document.createElement("style");
  style.textContent = `
    .lang-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 10px;
      background: rgba(8, 8, 15, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      backdrop-filter: blur(10px);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 0.08em;
      line-height: 1;
    }
    .lang-toggle button {
      background: none;
      border: none;
      padding: 3px 5px;
      color: rgba(255, 255, 255, 0.4);
      cursor: pointer;
      font: inherit;
      letter-spacing: inherit;
      transition: color 0.2s ease;
    }
    .lang-toggle button:hover { color: rgba(255, 255, 255, 0.8); }
    .lang-toggle button.active { color: #f5c842; }
    .lang-toggle .divider {
      color: rgba(255, 255, 255, 0.2);
      font-weight: 400;
      user-select: none;
    }
    .lang-toggle-fixed {
      position: fixed;
      top: 14px;
      right: 14px;
      z-index: 80;
    }
    @media (max-width: 767px) {
      .lang-toggle-fixed { top: 10px; right: 10px; }
    }
  `;
  document.head.appendChild(style);

  function t(key, lang) {
    const pack = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT_LANG];
    return pack && Object.prototype.hasOwnProperty.call(pack, key) ? pack[key] : undefined;
  }

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    document.documentElement.lang = lang;

    // Translate text content
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const v = t(key, lang);
      if (v !== undefined) el.innerHTML = v;
    });

    // Translate attribute values: data-i18n-attr="name:key;name2:key2"
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      const spec = el.getAttribute("data-i18n-attr");
      spec.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":").map((s) => (s || "").trim());
        if (!attr || !key) return;
        const v = t(key, lang);
        if (v !== undefined) el.setAttribute(attr, v);
      });
    });

    // Meta title / description based on body[data-page]
    const page = document.body && document.body.dataset ? document.body.dataset.page : null;
    if (page) {
      const titleKey = `meta.title.${page}`;
      const descKey = `meta.desc.${page}`;
      const titleV = t(titleKey, lang);
      if (titleV !== undefined) document.title = titleV;
      const descV = t(descKey, lang);
      if (descV !== undefined) {
        const m = document.querySelector('meta[name="description"]');
        if (m) m.setAttribute("content", descV);
      }
    }

    // Update switcher active state
    document.querySelectorAll(".lang-toggle [data-lang-btn]").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });
  }

  function initSwitcherBindings() {
    document.querySelectorAll(".lang-toggle [data-lang-btn]").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang-btn")));
    });
  }

  function init() {
    let saved = DEFAULT_LANG;
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v && SUPPORTED.includes(v)) saved = v;
    } catch (e) {}
    initSwitcherBindings();
    applyLang(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose for debugging
  window.Lupin = window.Lupin || {};
  window.Lupin.setLang = applyLang;
})();
