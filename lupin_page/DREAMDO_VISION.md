# DreamDo Games — Company Vision & Lupin Spin Landing Copy

> 이 문서는 DreamDo Games의 회사 비전과 첫 제품 Lupin Spin 랜딩 페이지(`leehyogun.github.io/lupin_page`)의 카피·구조 최종본입니다. Claude Code CLI에서 이 문서를 기준으로 HTML/CSS 구현을 이어갑니다.

---

## 1. Company Overview

### Company Name
**DreamDo Games**

### Company Type
Telegram 미니앱 기반 게임 퍼블리셔

### Brand Structure
```
DreamDo Games (퍼블리셔)
└─ Lupin Series (첫 IP)
    ├─ Lupin Spin    — Slot RPG (현재 MVP/Beta)
    ├─ Lupin Hub     — 통합 허브 미니앱
    ├─ Lupin Casino  — 종합 카지노 (슬롯 20+, 홀덤, 블랙잭)
    └─ Lupin Quest   — RPG 슬롯 (가제, 퍼즐앤드래곤 × 캐스케이딩)
```

Lupin은 **첫 시리즈명**이며 DreamDo Games의 유일한 IP가 아님. 향후 다른 IP 추가 가능.

---

## 2. Vision Framework

### Tagline
> **Grow together. Play together.**

### Mission
> 플레이어가 게임의 성장에 함께 참여하고, 그 성장을 함께 나누는 경험을 만든다.

### Vision
> DreamDo Games의 모든 게임이 하나의 경제로 연결된다. 유저가 한 게임에서 쌓은 것이 다른 게임에서 살아있고, 우리가 성장하면 유저도 함께 성장한다.

### Three Principles

**1. Real Value**
LP는 장식이 아니라 약속이다. 유저가 얻은 것은 진짜다.

**2. One Economy**
하나의 LP, 여러 게임. 당신이 쌓은 것은 어디서나 살아있다.

**3. Grow Together**
우리가 크면 당신도 큰다. 그게 게임이 끝나도 남는 이유다.

---

## 3. Product: Lupin Spin

### Category
**Slot RPG** (Social Slot RPG on Telegram)

- "소셜 카지노" 아님 — 슬롯은 코어 루프 엔진, 위에 RPG 메타게임 얹혀있음
- 레퍼런스: Coin Master의 진화형 + Web3 LP 경제 레이어

### Core Game Loop

```
에너지 소모
    ↓
Spin (슬롯)
    ↓
Win — 여러 갈래로 분기
    ├─ 골드 획득
    ├─ 심볼 퀘스트
    ├─ 심볼 카드 수집
    └─ PvP (레이드 / 어택 / 방어)
    ↓
골드
    ↓
Treasure Card 구매·업그레이드 (스테이지별)
    ↓
LP (Lupin Points) 획득
    ↓
[미래] Hub를 통해 타 게임에서 사용 / 티켓·리워드 교환 / 생태계 성장 공유
```

### 5-Stage Loop (랜딩 페이지용 단순화)
1. **SPIN** — 에너지를 태워 슬롯을 돌린다
2. **WIN** — 골드, 심볼, 카드, 퀘스트 획득
3. **RAID** — 다른 플레이어와 공격·방어·레이드
4. **BUILD** — 스테이지별 트레저 카드 구매·업그레이드
5. **EARN** — 모든 플레이가 LP로 쌓인다

### LP (Lupin Points) 정체

LP는 단순 포인트가 아닌 복합적 성격의 자산:

- **① 게임 내 화폐** — Lupin Spin 내부 획득·소비
- **② 크로스 게임 자산** — Lupin Hub를 통해 다른 DreamDo Games 게임에서 사용
- **③ 교환 가능** — 특정 시점에 티켓 등으로 교환
- **④ 성장 공유 수단** — DreamDo Games의 성장을 유저와 함께 나누는 장치

**핵심 내러티브:** Play-to-Earn이 아니라 **Play-to-Grow (Together)**.

---

## 4. Landing Page Structure

페이지 URL: `leehyogun.github.io/lupin_page`
방향: **하이브리드** — Lupin Spin 중심 + 하단에 DreamDo Games 소개 섹션

```
┌──────────────────────────────────────────────┐
│ NAV: Lupin Spin | Features | How to Play |   │
│      LP Economy | Roadmap | FAQ | Play Now   │
├──────────────────────────────────────────────┤
│ 1. HERO                                      │
│ 2. GAME LOOP                                 │
│ 3. HOW TO PLAY                               │
│ 4. LP — GROW WITH US   ⭐ 핵심 섹션          │
│ 5. ROADMAP                                   │
│ 6. MADE BY DREAMDO                           │
│ 7. FAQ                                       │
│ Footer                                       │
└──────────────────────────────────────────────┘
```

---

## 5. Section Copy — Final

### 5.1 HERO

**상단 뱃지**
> 🎰 Slot RPG on Telegram — Beta Live

**메인 카피** (H1)
> # Spin. Raid. Build. Earn.

- "Earn"에 골드 그라데이션 유지 (기존 디자인)

**서브 카피**
> 슬롯으로 시작해, 카드로 키우고, 플레이어와 겨룬다.
> 쌓인 **LP는 게임을 넘나들고, 우리와 함께 자란다.**

**CTA**
- Primary: `Telegram에서 플레이` (아이콘: 텔레그램 비행기)
- Secondary: `How to Play ›`

**통계 카드 3개 (기존 10K+/3+/∞ 교체)**

| 카드 1 | 카드 2 | 카드 3 |
|--------|--------|--------|
| **Slot RPG** | **Cross-Game** | **Grow with Us** |
| Play & Build | LP Economy | DreamDo Games 시리즈 |

> ⚠️ 기존 "10K+ Players"는 베타 단계에서 허수라 제거. 진짜 지표 확보 후 복구 가능.

---

### 5.2 GAME LOOP

**섹션 타이틀**
> ## 하나의 슬롯, 끝없는 성장

**서브 카피**
> Lupin Spin은 단순한 슬롯이 아닙니다.
> 모든 스핀이 당신의 여정을 움직입니다.

**5단계 루프 카드 (가로 배치 권장)**

| # | 단계 | 설명 |
|---|------|------|
| 1 | **SPIN** | 에너지를 태워 슬롯을 돌린다 |
| 2 | **WIN** | 골드, 심볼, 카드, 퀘스트 획득 |
| 3 | **RAID** | 다른 플레이어와 공격·방어·레이드 |
| 4 | **BUILD** | 스테이지별 트레저 카드 구매·업그레이드 |
| 5 | **EARN** | 모든 플레이가 LP로 쌓인다 |

**구현 힌트:** 각 카드에 아이콘 + 번호 뱃지. 호버 시 glow. 화살표로 연결되는 플로우 시각화.

---

### 5.3 HOW TO PLAY

*플레이 플로우 구체화 후 추가 예정 — 플레이스홀더로 섹션 구조만 준비*

예상 구성:
- Step 1: Telegram에서 Lupin Spin 시작
- Step 2: 첫 스핀
- Step 3: 골드·심볼 수집
- Step 4: 카드 업그레이드
- Step 5: 다른 플레이어와 대결
- Step 6: LP 확인하기

---

### 5.4 LP — GROW WITH US ⭐

> **이 섹션이 페이지의 하이라이트.** Lupin Spin을 다른 Telegram 게임과 구분 짓는 유일한 차별점이자, 유저·파트너·투자자 모두가 이 섹션을 보고 판단함.

**섹션 타이틀**
> ## LP — 당신이 쌓은 것은 사라지지 않는다

**서브 카피**
> LP는 단순한 게임 포인트가 아닙니다.
> DreamDo Games 생태계와 함께 자라는, 당신의 몫입니다.

**3 카드 그리드**

| 🎮 Earn in Play | 🔗 Use Anywhere | 🌱 Grow with Us |
|---|---|---|
| 슬롯, 레이드, 카드 — 모든 플레이가 LP로 쌓입니다. | Lupin Hub를 통해 DreamDo Games의 다른 게임에서 사용합니다. | 특정 시점에 티켓과 리워드로 교환. 우리가 커지면, 당신도 커집니다. |

**섹션 하단 강조 문구**
> **"LP is how we stay in this together."**
> 게임이 끝나도, 당신의 LP는 남습니다.

**디자인 힌트:**
- 배경에 LP가 여러 게임 아이콘 사이를 오가는 서브틀 애니메이션
- 3 카드는 다른 섹션 카드보다 더 프리미엄하게 (glassmorphism + 골드 accent)

---

### 5.5 ROADMAP

**섹션 타이틀**
> ## What's Next

**서브 카피**
> Lupin Spin은 시작입니다.
> DreamDo Games는 하나의 경제로 연결된 여러 게임을 만들고 있습니다.

**타임라인 4단계**

| # | Phase | Product | Description |
|---|-------|---------|-------------|
| 🎰 | NOW | **Lupin Spin** | Slot RPG · Beta Live |
| 🔗 | NEXT | **Lupin Hub** | 통합 허브 미니앱. LP 경제의 중심. 모든 DreamDo Games 게임의 관문. |
| ♠️ | THEN | **Lupin Casino** | 종합 카지노. 슬롯 20+종, 홀덤, 블랙잭, 보드 게임. |
| ⚔️ | LATER | **Lupin Quest** | RPG 슬롯. 퍼즐앤드래곤 × 캐스케이딩 전투 시스템. (가제) |

**디자인 힌트:**
- 수평 타임라인 형식 추천 (모바일에선 수직)
- 현재 단계(NOW)에 active glow, 나머지는 dimmed
- Lupin Quest는 "(가제)" 또는 "Codename: Quest" 병기

---

### 5.6 MADE BY DREAMDO

**섹션 타이틀**
> ## Made by DreamDo Games

**본문**

> ### Grow together. Play together.
>
> DreamDo Games는 Telegram 위에서 게임을 만드는 퍼블리셔입니다.
> 우리는 플레이어의 시간이 진짜 가치로 남는 게임을 만듭니다.
>
> Lupin Spin은 우리의 첫 작품이자, 더 큰 생태계의 시작점입니다.

**3 Principles 블록**

| REAL VALUE | ONE ECONOMY | GROW TOGETHER |
|------------|-------------|---------------|
| LP는 장식이 아니라 약속이다. 유저가 얻은 것은 진짜다. | 하나의 LP, 여러 게임. 당신이 쌓은 것은 어디서나 살아있다. | 우리가 크면, 당신도 큰다. 그게 게임이 끝나도 남는 이유다. |

**소셜 링크**
> Follow DreamDo Games: [Telegram] [X/Twitter] [GitHub]

---

### 5.7 FAQ

*기존 FAQ 내용 기준으로 유지. 필요 시 추가 작성.*

**추가 권장 질문 예시:**
- Q. Lupin Spin은 도박 게임인가요?
  - A. 아닙니다. Lupin Spin은 슬롯을 코어 루프로 활용하는 RPG 게임입니다. 실제 현금 베팅이 없고, 게임 내 진행과 성장이 목적입니다.
- Q. LP는 언제 토큰으로 전환되나요?
  - A. 로드맵의 특정 시점에 Lupin Hub를 통해 티켓·리워드 교환이 가능해질 예정입니다. 구체적 시점은 추후 공지.
- Q. 다른 DreamDo Games 게임에서도 LP를 사용할 수 있나요?
  - A. 네, Lupin Hub 출시 이후 가능합니다.

---

### 5.8 Footer

```
© 2026 DreamDo Games. All rights reserved.
Grow together. Play together.

Legal | Privacy | Contact
```

---

## 6. Tone & Style Guide

### Voice
- **담백하고 정직** — 과장·허풍 금지 (특히 Web3 게임 업계 클리셰 피하기)
- **따뜻하지만 프로페셔널** — "우리", "함께" 같은 커뮤니티 언어 사용 OK
- **구체적** — "혁신적 블록체인 경험" 같은 추상어 금지

### 금지 단어·표현
- ❌ "소셜 카지노" (도박 프레임)
- ❌ "바카라", "탭 채굴" (실제 제품과 불일치)
- ❌ "Play to Earn" (과거 Web3 게임 클리셰)
- ❌ "혁신적인", "차세대", "게임 체인저" 같은 공허한 수식
- ❌ "10K+ Players" 등 베타 단계에서 허위일 수 있는 지표

### 권장 단어·표현
- ✅ "Slot RPG"
- ✅ "Grow together"
- ✅ "Cross-game economy"
- ✅ "LP" (약어로 사용, 풀네임 Lupin Points는 첫 등장에만)
- ✅ "DreamDo Games 생태계"

### 언어 정책
- **한국어 우선** (타겟 유저 한국 포함, Hyo님 기반)
- **영문 병기 허용** — 타이틀·태그라인·핵심 키워드
- 태그라인 "Grow together. Play together."는 영문 고정

---

## 7. Visual Direction (기존 페이지 분석 기반)

### 유지할 요소
- 다크 배경 + 주황/골드 포인트 컬러
- 도둑 여우 마스코트 (Lupin 시리즈 공용)
- "Spin. Win. Earn." 수직 타이포 스타일 (→ "Spin. Raid. Build. Earn."으로 확장)
- 캐릭터 카드 프레이밍 + LIVE 뱃지

### 개선 필요
1. **히어로 상단 여백 축소** — 현재 네비 아래 ~200px 과다
2. **배경 평면화 해소** — 왼쪽 순검정 영역에 noise texture 또는 subtle orb glow
3. **통계 카드 강화** — glassmorphism + 호버 glow
4. **Veo 워터마크 제거** — 캐릭터 이미지 우측 하단 크롭 필수
5. **미세 모션** — 캐릭터 float, 뱃지 pulse, Earn 그라데이션 shimmer
6. **"채팅 요청" 버튼** — 페이지 내 요소면 제거 (브라우저 익스텐션이면 무시)

### 새 섹션 디자인 톤
- **Game Loop 섹션** — 5단계를 플로우 차트처럼, 각 단계에 픽토그램
- **LP 섹션** — 페이지 내 가장 프리미엄하게. 골드 accent 강조, subtle motion
- **Roadmap 섹션** — 수평 타임라인, 현재 단계(NOW)에 active glow
- **DreamDo Games 섹션** — 오히려 차분하게. 회사 브랜드는 제품보다 조용한 톤.

---

## 8. Build Priority (Claude Code 작업 순서)

> 아래는 권장 순서. 우선순위 조정 가능.

### Phase 1 — 카피 반영 (최우선)
- [ ] 기존 HERO 섹션 카피 교체
  - 뱃지, H1, 서브 카피, CTA, 통계 카드
- [ ] 기존 "소셜 카지노" 관련 표현 전면 삭제
- [ ] Footer에 "© 2026 DreamDo Games" + 태그라인 추가

### Phase 2 — 신규 섹션 추가
- [ ] `#game-loop` — Game Loop 섹션 (5단계 카드)
- [ ] `#lp-economy` — LP — Grow With Us ⭐ (핵심 섹션)
- [ ] `#roadmap` — Roadmap 타임라인
- [ ] `#about-dreamdo` — Made by DreamDo Games

### Phase 3 — 기존 섹션 개선
- [ ] How to Play 내용 채우기
- [ ] FAQ 재검토 및 보강

### Phase 4 — 시각 꾸미기
- [ ] 히어로 배경 noise/glow 추가
- [ ] 통계 카드 glassmorphism
- [ ] 캐릭터 float 애니메이션
- [ ] Veo 워터마크 크롭
- [ ] 미세 모션 (pulse, shimmer)
- [ ] 모바일 반응형 최종 점검

### Phase 5 — 네비게이션 업데이트
- [ ] Nav 항목 추가: LP Economy, Roadmap
- [ ] 앵커 스크롤 스무딩

---

## 9. Open Questions (추후 결정)

랜딩 페이지 작업 중 또는 이후에 결정 필요:

- [ ] **도메인** — `leehyogun.github.io/lupin_page`를 언제까지 유지할지. 자체 도메인(`lupinspin.com`, `dreamdo.gg` 등) 확보 시점?
- [ ] **Lupin Hub 공개 시점** — 로드맵에 대략적 타임라인 표시할지 ("Q2 2026" 등)
- [ ] **LP ↔ 토큰 전환 시점** — 외부 공개 수위. "TBA" vs 구체 시점
- [ ] **DreamDo Games 소셜 채널** — Telegram 커뮤니티, X, GitHub 계정 준비 상태
- [ ] **분사 시점** — DreamDo Games 전용 페이지(`dreamdo.xxx`)를 언제 분리할지

---

## 10. Document History

| 날짜 | 변경 내용 |
|------|-----------|
| 2026-04-20 | 최초 작성. 회사 비전 + 랜딩 카피 최종본 확정. |

---

*이 문서는 DreamDo Games 내부 기준 문서입니다. 외부 공개용 카피는 이 문서에서 발췌·편집하여 사용.*
