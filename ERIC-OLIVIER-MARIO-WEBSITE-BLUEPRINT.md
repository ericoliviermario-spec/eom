# ERIC OLIVIER MARIO — Website Architecture & Brand Blueprint

---

## 1. BRAND POSITIONING

### Identity Statement
Eric Olivier Mario is a melodic electronic artist and guide in sonic self-discovery. His work sits at the intersection of cinematic electronic production, African-rooted rhythmic lineage, and contemplative inner work. He is not a music coach. He is a practitioner who transmits through sound and presence.

### Positioning Line
> "Guide in sonic self-discovery and artistic embodiment."

### Brand Pillars
| Pillar | Expression |
|---|---|
| Grounded Uplift | Music and teaching that begins in the body, not the mind |
| Spacious Authority | Presence over performance. Stillness over spectacle |
| African-Rooted Rhythm | Ancestral pulse underneath modern electronic textures |
| Cinematic Emotion | Every track, every page, every interaction is a scene |
| Spiritual Without Dogma | Inner work without doctrine. Feeling over framework |

### He Is
- A melodic electronic artist with a devotional arc
- A guide who has walked the path he teaches
- Minimal, intentional, unhurried
- Rooted in African rhythmic tradition and electronic innovation
- Someone who treats artistic development as inner work

### He Is NOT
- A producer coach selling templates
- A hustle-culture growth marketer
- A beat marketplace vendor
- A guru or spiritual authority figure
- A course mill operator

### Monetization Channels
1. 1:1 Immersive Mentorship (highest tier)
2. Small cohort programs (mid tier)
3. Artistic identity training modules
4. Sonic self-discovery modules
5. Future: retreats, live experiences, membership

---

## 2. DESIGN SYSTEM

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--bg-deep` | `#1A1A1A` | Primary background |
| `--bg-surface` | `#222222` | Card/section surfaces |
| `--bg-elevated` | `#2A2A2A` | Hover states, active areas |
| `--text-primary` | `#E8E0D4` | Warm off-white body text |
| `--text-secondary` | `#9A9088` | Subdued labels, metadata |
| `--text-muted` | `#6B6560` | Timestamps, fine print |
| `--horizon-warm` | `linear-gradient(180deg, #1A1A1A 0%, #2D1F1A 50%, #4A3228 80%, #8B5E3C 100%)` | Hero gradient — dawn from darkness |
| `--horizon-cool` | `linear-gradient(180deg, #1A1A1A 0%, #1A1F2D 50%, #2A3548 100%)` | Descent sections — deep water |
| `--accent-ember` | `#8B5E3C` | Sparse accent — warm earth tone |
| `--accent-gold` | `#C4A265` | Reserved for highest-tier elements only |
| `--border-subtle` | `#333333` | Dividers, card edges |

### Typography

| Role | Font | Weight | Size | Tracking |
|---|---|---|---|---|
| Display / Hero | Cormorant Garamond | 300 (Light) | 56–80px | +0.02em |
| Section Headings | Cormorant Garamond | 400 (Regular) | 32–40px | +0.01em |
| Sub-headings | Inter | 300 (Light) | 18–22px | +0.04em |
| Body | Inter | 300 (Light) | 16–17px | +0.01em |
| Labels / Meta | Inter | 400 (Regular) | 12–13px | +0.08em (uppercase) |
| Microcopy / Prompts | Cormorant Garamond | 300 Italic | 18–20px | +0.01em |

### Spacing System
- Base unit: 8px
- Section padding: 120px top/bottom minimum
- Content max-width: 720px for text, 1200px for layouts
- Between sections: 160–200px of breathing room
- Negative space is a design element, not wasted space

### Button System

| Style | Usage | Example Label |
|---|---|---|
| Ghost (border only) | Primary navigation CTAs | Explore / Enter / Continue |
| Text link with arrow | Inline progression | Begin the journey → |
| Filled subtle | Application form submit only | Apply |
| None | Never used | Buy Now / Sign Up / Subscribe |

Button specifications:
- Border: 1px solid `--text-secondary`
- Padding: 16px 40px
- Font: Inter Light, 13px, uppercase, tracking +0.12em
- Border-radius: 0 (sharp corners)
- Hover: border color transitions to `--text-primary`, 0.4s ease
- No shadows. No gradients. No fills except on application submit.

### Interaction Principles
- Scroll-triggered fade-ins (opacity 0 → 1, translateY 20px → 0, 0.8s ease)
- No parallax. No bounce. No snap-scroll.
- Page transitions: cross-fade, 0.6s
- Audio elements: waveform visualization in `--accent-ember`, minimal
- Cursor: default everywhere. No custom cursors.

### Mood Board Keywords
Cinematic. Spacious. Calm authority. Emotionally intentional. Premium but minimal. Dawn over desert. Deep water surfacing. A temple with no walls.

### Avoid
- Corporate SaaS grid layouts
- Tech startup language or patterns
- Bright UI accent colors
- Overcrowded sections or information density
- Stock photography
- Social proof counters ("10,000+ students")
- Countdown timers or urgency tactics
- Popup modals or email capture overlays

---

## 3. WEBSITE STRUCTURE — SITEMAP

```
/                          → Homepage
/music                     → Music Journey Page
/music/[track-slug]        → Individual Track Page (future)
/the-journey               → Training & Mentorship Overview
/the-journey/rooted-creation    → Module 1
/the-journey/presence-and-sound → Module 2
/the-journey/artist-to-universe → Module 3
/apply                     → Application Page
/about                     → About Page
/listen                    → Future: Exclusive Listening Sessions
/retreats                  → Future: Retreat Experiences
/membership                → Future: Inner Circle Membership
```

---

## 4. HOMEPAGE — Full Structure

### Section 1: Hero — The Threshold

**Layout:** Full-viewport height. Centered content. `--horizon-warm` gradient background. Optional subtle grain texture overlay at 3% opacity.

**Emotional Purpose:** Create the sensation of entering a space. Not selling. Arriving.

**Content:**
```
[Thin horizontal line, 60px wide, centered]

ERIC OLIVIER MARIO

[Spacer: 32px]

Sound as a path inward.
Music as remembrance.

[Spacer: 48px]

[ Enter ]
```

**Copy Tone:** Poetic. Declarative. No explanation. No justification. The visitor either feels it or they scroll.

**Technical Notes:**
- Background: slow ambient gradient shift (4% hue rotation over 30s, barely perceptible)
- Text fades in on load: name first (0.6s delay), tagline second (1.2s delay), button third (1.8s delay)
- "Enter" button scrolls to Section 2 with smooth 1.2s ease

---

### Section 2: Three Pathways

**Layout:** Three columns on desktop, stacked on mobile. Each pathway is a tall card with generous padding. No borders. Separated by vertical hairlines.

**Emotional Purpose:** Let the visitor self-select their entry point without being sold to.

**Content:**

| Pathway | Label | Microcopy | CTA |
|---|---|---|---|
| Music | The Music | A six-chapter arc from darkness into union. | Listen → |
| The Journey | The Journey | Training for artists ready to create from who they are. | Explore → |
| Work With Me | Work With Me | Private mentorship for those called to go deeper. | Learn more → |

**Copy Tone:** Each pathway is one sentence. No paragraphs. No bullet points. Let the white space do the work.

**Interaction:** On hover, the pathway card background shifts from `--bg-deep` to `--bg-surface` over 0.6s. The CTA arrow translates 4px right.

---

### Section 3: The Album Arc — Journey Visualization

**Layout:** Horizontal timeline on desktop. Vertical on mobile. Six nodes connected by a thin gradient line that moves from `--horizon-cool` (left) to `--horizon-warm` (right), representing the movement from C minor to D major.

**Emotional Purpose:** Show the visitor there is a story here. This is not a playlist. It is a passage.

**Content:**

```
THE ARC

I ── II ── III ── IV ── V ── VI
Self-Discovery → Awakening → Presence → Embodiment → Devotion → Union

From C minor to D major.
From darkness held — to light arrived.
```

**Copy Tone:** Sparse. Ceremonial. Like chapter headings in a book you haven't opened yet.

**Technical Notes:**
- Each node reveals its title on hover
- The gradient line animates subtly on scroll (draws itself left to right as user scrolls into view)
- Below the timeline: two lines of italic microcopy, centered

---

### Section 4: Positioning Statement

**Layout:** Single column, narrow (max 600px). Centered. Generous vertical padding (160px top/bottom).

**Emotional Purpose:** Establish who Eric Olivier Mario is, for those who need words before they feel.

**Content:**
```
Eric Olivier Mario makes electronic music rooted in African rhythmic
tradition, built for inner landscapes. His compositions move through
six emotional chapters — from the weight of self-discovery to the
openness of union.

He also guides other artists through this same arc. Not as a coach.
As someone still walking it.
```

**Copy Tone:** Third person. Grounded. No superlatives. No claims. Simple declarative sentences. Each sentence earns its space.

---

### Section 5: The Invitation

**Layout:** Full-width section. `--horizon-warm` gradient background (subtle). Centered text block.

**Emotional Purpose:** Bridge from passive listening to active engagement. The first moment something is asked of the visitor.

**Content:**
```
If you make music and feel the pull toward something
deeper than technique — toward who you actually are
when you create —

this space was made for you.

[ Explore The Journey ]
```

**Copy Tone:** Second person. Intimate. Conditional ("if you feel..."). No pressure. The CTA is an invitation, not a directive.

---

### Section 6: Footer — Quiet Close

**Layout:** Minimal. Left-aligned name, right-aligned sparse links. Single horizontal hairline above.

**Content:**
```
─────────────────────────────────────────────────

Eric Olivier Mario                    Music · The Journey · Apply · About

                                      Listen on Spotify / Apple Music / YouTube
```

No newsletter signup. No social media icon row. No "stay connected" language. If a mailing list is added later, it should be a single text field with "Stay close" as placeholder text, placed on the About page, not the footer.

---

## 5. MUSIC JOURNEY PAGE — Full Structure

### Design Philosophy
This is NOT a discography grid. It is a scrollable narrative. Each track section is a full scene. The visitor moves through the album the way they would move through the chapters of a book — downward, one emotional shift at a time.

The page background gradient shifts as the user scrolls: beginning in deep blue-black (`--horizon-cool`) and arriving at warm amber-black (`--horizon-warm`) by the final section. This represents the harmonic journey from C minor to D major.

---

### Section 1: Page Entrance

**Layout:** Full viewport. Centered text. Deep background.

**Content:**
```
THE ARC

Six passages.
One movement from dark to light.

Begin below.

↓
```

---

### Section 2: Chapter I — The Descent (Self-Discovery)

**Layout:** Left-aligned artwork (square, 360px). Right-aligned text block. Full section background: darkest tone.

**Emotional Purpose:** Weight. Stillness. The feeling of being underground.

**Content Structure:**
```
I. THE DESCENT

[Album artwork — dark, subterranean]

[Track title]
[Duration]

[Embedded audio player — minimal waveform, single color]

"The first step is always down. Before you find anything,
you lose the story you were told about yourself."

[Optional journal prompt in muted italic:]
What did you believe about yourself before you started questioning?
```

**Copy Tone:** Reflective. Heavy. Short sentences.

---

### Section 3: Chapter II — The Awakening

**Layout:** Centered artwork. Text below. Background begins to shift slightly warmer.

**Emotional Purpose:** First light. Disorientation mixed with recognition.

**Content Structure:**
```
II. THE AWAKENING

[Album artwork — first hint of light]

[Track title]
[Duration]

[Embedded audio player]

"Something stirs. Not understanding yet — just the sense
that what was solid has begun to move."

[Journal prompt:]
When did you first feel that something in you was changing?
```

**Copy Tone:** Tentative. Emerging. Present tense.

---

### Section 4: Chapter III — The Encounter (Presence)

**Layout:** Full-width artwork as background (50% opacity), text overlaid center.

**Emotional Purpose:** Confrontation with the present moment. Raw. Unavoidable.

**Content Structure:**
```
III. THE ENCOUNTER

[Full-bleed artwork — face-to-face quality]

[Track title]
[Duration]

[Embedded audio player]

"Presence is not peace. It is the willingness
to feel what is actually here."

[Journal prompt:]
What are you avoiding feeling right now?
```

**Copy Tone:** Direct. Unflinching. No softening.

---

### Section 5: Chapter IV — The Embodiment

**Layout:** Artwork right, text left. Background now warm mid-tone.

**Emotional Purpose:** Settling into the body. Integration. Rhythm as anchor.

**Content Structure:**
```
IV. THE EMBODIMENT

[Album artwork — warm, grounded, tactile]

[Track title]
[Duration]

[Embedded audio player]

"The body already knows. The work is learning
to stop overriding it."

[Journal prompt:]
Where in your body do you feel your creative impulse begin?
```

**Copy Tone:** Physical. Grounded. Sentences you can feel in your chest.

---

### Section 6: Chapter V — The Devotion

**Layout:** Centered, narrower than previous sections. Intimate framing.

**Emotional Purpose:** Surrender. Commitment without conditions.

**Content Structure:**
```
V. THE DEVOTION

[Album artwork — open, reverent]

[Track title]
[Duration]

[Embedded audio player]

"Devotion is not loyalty to an outcome.
It is the willingness to keep showing up without one."

[Journal prompt:]
What would you continue creating even if no one ever heard it?
```

**Copy Tone:** Tender. Earnest. No irony.

---

### Section 7: Chapter VI — The Union

**Layout:** Full viewport. Artwork as subtle background. Text centered. Background arrives at full `--horizon-warm`.

**Emotional Purpose:** Arrival. Wholeness. The breath after the climb.

**Content Structure:**
```
VI. THE UNION

[Album artwork — luminous, expansive]

[Track title]
[Duration]

[Embedded audio player]

"Not the end. The beginning of creating
from a place you no longer need to explain."

[Journal prompt:]
What does your music sound like when you have nothing to prove?
```

**Copy Tone:** Open. Spacious. Present tense. Complete.

---

### Section 8: Closing — Bridge to The Journey

**Layout:** Centered text block. Warm background. Generous white space.

**Content:**
```
The arc does not end with listening.

If you are an artist moving through your own
version of this passage — there is a space
built for that work.

[ Explore The Journey → ]
```

---

### Audio Player Specifications
- Custom minimal player (not Spotify embed)
- Single horizontal waveform in `--accent-ember`
- Play/pause: small circle, border only
- Progress: thin line, `--accent-ember`
- Duration: small label in `--text-muted`
- No volume control on page (use system volume)
- No shuffle. No skip. This is sequential.

---

## 6. THE JOURNEY PAGE — Training & Mentorship Overview

### Page Philosophy
This is not a course catalog. It is a doorway. The visitor should feel like they are being assessed as much as they are assessing. The language is invitational but quietly selective.

---

### Section 1: Page Entrance

**Layout:** Full viewport. `--horizon-warm` gradient. Centered text.

**Content:**
```
THE JOURNEY

Training for artists who are ready to stop
performing and start arriving.

This is not education. It is excavation.
```

**Copy Tone:** Declarative. Sets the frame immediately. "This is not..." establishes what to leave at the door.

---

### Section 2: Philosophy Block

**Layout:** Narrow column (560px). Centered. Long vertical padding.

**Content:**
```
Most artist development focuses on skill, audience, and output.

This work focuses on something underneath all of that:
who you are when you create.

The Journey is a guided passage through three territories —
from finding your roots, to inhabiting presence,
to creating as an expression of something larger than yourself.

It is not for everyone. It is for artists who already
sense that their next evolution is not technical.
```

**Copy Tone:** Calm exclusion. "Not for everyone" is stated as fact, not as marketing scarcity. The reader qualifies themselves.

---

### Section 3: Three Modules — Overview Cards

**Layout:** Three vertical cards, stacked (not side by side). Each card is full-width with generous internal padding. Separated by 80px of space.

---

#### Module Card 1: Rooted Creation

```
MODULE I

ROOTED CREATION

Finding what is yours before you build anything else.

For artists who have been creating from influence,
expectation, or habit — and are ready to find
the pulse underneath.

This module strips away borrowed identity and reconnects
you to the rhythmic, emotional, and cultural foundations
that are authentically yours.

Transformation: From creating what you think you should →
to creating from what you actually carry.

Format: 4 weeks. Small cohort. Weekly live session.
Guided solo practices between sessions.

[ Explore Module I → ]
```

---

#### Module Card 2: Presence & Sound

```
MODULE II

PRESENCE & SOUND

Learning to stay with what emerges — before shaping it.

For artists who have technique but have lost (or never found)
the ability to create from a still, present place.

This module works at the intersection of somatic awareness
and sound design. You will learn to listen before you produce.
To feel before you arrange.

Transformation: From reactive creation →
to creation rooted in embodied presence.

Format: 4 weeks. Small cohort. Weekly live session.
Daily listening practices. One 1:1 session included.

[ Explore Module II → ]
```

---

#### Module Card 3: From Artist to Universe

```
MODULE III

FROM ARTIST TO UNIVERSE

When the work becomes larger than you.

For artists who have done the inner work and are ready
to let their creative output become an offering —
not a product, not a performance, but a transmission.

This is the most intimate module. It requires having
completed Modules I and II, or equivalent depth
of personal creative work.

Transformation: From self-expression →
to expression as devotion.

Format: 6 weeks. Maximum 4 participants.
Weekly live session. Two 1:1 sessions.
Final integration piece created and witnessed by the cohort.

[ Explore Module III → ]
```

---

### Section 4: Who This Is For / Not For

**Layout:** Two columns. Clean divider between them.

**Content:**

| This space is for artists who... | This is not the right fit if you... |
|---|---|
| Sense their next growth is internal, not technical | Are primarily looking for production techniques |
| Are willing to slow down to go deeper | Want to grow your audience or streaming numbers |
| Have an existing creative practice they want to transform | Are at the very beginning of learning your craft |
| Can sit with discomfort and uncertainty | Need external validation to continue creating |
| Are drawn to this page for reasons they may not fully articulate yet | Want a structured curriculum with defined outcomes |

**Copy Tone:** No judgment in the "not for" column. Just honest clarity. The right person reads both columns and sees themselves only on the left.

---

### Section 5: Application Bridge

**Layout:** Centered. Warm background. Minimal.

**Content:**
```
Enrollment is by application only.

This is not about gatekeeping. It is about
ensuring the space holds what it needs to hold.

[ Apply → ]
```

**Copy Tone:** Matter-of-fact. The word "gatekeeping" is named and immediately reframed. Transparency over mystique.

---

## 7. INDIVIDUAL MODULE PAGE TEMPLATE

Each module page follows this structure:

### Section 1: Module Header
```
MODULE [I / II / III]

[MODULE NAME]

[Single-line poetic description]
```

### Section 2: The Transformation
```
WHERE YOU BEGIN:
[2–3 sentences describing the state the participant arrives in]

WHERE THIS LEADS:
[2–3 sentences describing the shift — not outcome, but orientation]
```

### Section 3: What Happens Inside
```
Week 1: [Theme — e.g., "Unearthing"]
[2 sentences on the focus]

Week 2: [Theme — e.g., "Sitting With"]
[2 sentences on the focus]

Week 3: [Theme — e.g., "First Movements"]
[2 sentences on the focus]

Week 4: [Theme — e.g., "Integration"]
[2 sentences on the focus]

(Week 5–6 for Module III only)
```

### Section 4: The Container
```
Format: [Cohort size, session frequency, 1:1 inclusion]
Commitment: [Time expectation per week]
Prerequisite: [If any]
```

### Section 5: Investment & Application

**Pricing Strategy — Do NOT list exact prices on the page.**

Instead, use language like:
```
Investment is shared during the application conversation.

This work is priced to reflect its depth, intimacy,
and the transformation it facilitates.

If cost is a genuine barrier and the readiness is real,
that conversation is welcome too.
```

This achieves:
- Premium positioning without sticker shock
- Filters for serious applicants (they must apply to learn the price)
- Opens the door for scholarship/sliding scale without cheapening the offer
- Keeps the page feeling like a space, not a checkout

**CTA:**
```
[ Apply for Module [I/II/III] ]
```

---

### Pricing Strategy Positioning by Tier

| Tier | Module | Positioning Language | Price Range Signal |
|---|---|---|---|
| Foundation | Rooted Creation | "An immersive cohort experience" | Mid four figures |
| Deepening | Presence & Sound | "Includes private mentorship" | Upper four figures |
| Mastery | Artist to Universe | "By application and prior completion" | Five figures |

Never frame as "courses." Use: immersive programs, guided passages, containers, spaces.

---

## 8. APPLICATION PAGE — Full Structure

### Design Philosophy
The application is not a checkout form. It is the first act of the relationship. The questions should feel like being seen, not being screened.

---

### Section 1: Page Entrance

**Layout:** Narrow centered column. Warm background.

**Content:**
```
APPLICATION

Before we begin working together,
a few questions — not to qualify you,
but to understand where you are.

There are no right answers. Only honest ones.
```

---

### Section 2: Intake Form

**Form Design:**
- One question per view (stepped form, not long scroll)
- Progress indicator: thin line at top, fills left to right
- "Continue" button advances to next question
- "Back" link (text only) allows return
- No required field asterisks. All fields feel optional even if they aren't.

**Questions:**

**Q1 — Identity**
```
What is your name, and what name do you create under (if different)?

[Text field]
```

**Q2 — Practice**
```
Describe your creative practice in a few sentences.
What do you make? How long have you been making it?

[Textarea]
```

**Q3 — Current State**
```
Where are you right now in your artistic life?
Not your career — your inner relationship to creating.

[Textarea]
```

**Q4 — The Pull**
```
What brought you to this page?
Be as specific or as abstract as you like.

[Textarea]
```

**Q5 — Readiness**
```
What would need to shift in your life to make space
for this kind of work over the next 4–6 weeks?

[Textarea]
```

**Q6 — Module Interest**
```
Which module resonates most right now?

○ Rooted Creation — Finding what is mine
○ Presence & Sound — Learning to stay
○ From Artist to Universe — Letting the work become larger
○ I am not sure yet — I would like guidance
```

**Q7 — Referral**
```
How did you find this space?

○ YouTube
○ Spotify / Apple Music
○ A friend or collaborator
○ Social media
○ Something else

[Text field for "something else"]
```

**Q8 — Contact**
```
Email address

[Email field]

Preferred way to have a conversation
(video call, voice call, written exchange):

○ Video call
○ Voice call
○ Written exchange
```

**Q9 — Anything Else**
```
Is there anything else you want to share
before we begin?

[Textarea — optional, clearly marked]
```

---

### Section 3: Submission

**Content:**
```
[ Submit Application ]

You will hear back within 7 days.
If there is alignment, we will schedule a conversation.
If not, you will receive an honest and respectful reply.

No automated responses. Every application is read personally.
```

**Copy Tone:** Warm. Specific. The promise of a personal read is the most premium thing on this page.

---

### Qualification Logic (Backend)

Applications are assessed on:
1. **Depth of self-reflection** — Do the answers show someone who has already begun the inner work?
2. **Specificity** — Vague answers ("I want to grow") vs. specific ones ("I notice I abandon tracks when they get emotionally uncomfortable")
3. **Readiness** — Can they actually make space for this? Honesty about constraints is valued over enthusiasm without grounding.
4. **Fit** — Not every good artist is right for this container. The question is resonance, not talent.

Red flags (not disqualifying, but noted):
- Language focused entirely on external outcomes (followers, streams, career)
- No current creative practice
- Inability to articulate what drew them here
- Answers that feel performed rather than felt

---

## 9. ABOUT PAGE — Full Structure

### Section 1: Opening Image

**Layout:** Full-width cinematic photograph. Eric in a studio or natural environment. Not posed. Caught in a moment of presence.

---

### Section 2: Bio — First Person

**Layout:** Narrow column (560px). Centered.

**Content:**
```
I make electronic music rooted in African rhythmic tradition.
My compositions are built for inner landscapes — not dance floors,
not playlists, not background listening.

The album I have been building for the past [X] years follows
a single arc: from self-discovery to union. From C minor to D major.
From the heaviness of not knowing who you are — to the stillness
of no longer needing to.

I also work with artists who are in their own version of that arc.
Not to teach them how to produce. To help them find out who they are
when they create — and to build from that place.

I am based in [location]. I work slowly. I take very few
private clients at a time. Everything I offer comes from
a practice I am still inside of.
```

**Copy Tone:** First person. Plain language. No third-person bio-speak. No accolades list. No "featured in" logos. If press mentions exist, they can live on a separate /press page later.

---

### Section 3: Influences & Lineage

**Layout:** Left-aligned text block.

**Content:**
```
LINEAGE

My work is shaped by West African polyrhythm,
the negative space of Japanese aesthetics,
the emotional architecture of film scoring,
and the contemplative traditions I practice daily.

I did not study music formally. I studied feeling formally —
through years of sitting, moving, listening,
and learning to stay with what is uncomfortable.
```

---

### Section 4: Bridge to The Journey

```
If any of this resonates — not with your mind,
but with something underneath it —

[ Explore The Journey → ]
```

---

## 10. MONETIZATION STRATEGY — 3-Tier Model

### Tier 1: Free Value — The Current
**Channel:** YouTube, Spotify, Apple Music, SoundCloud
**Purpose:** Attract aligned listeners. Build trust through art, not marketing.

**Content Strategy:**
- Full album available on streaming platforms
- YouTube: cinematic album visuals, studio process videos (not tutorials), short reflections on creative practice
- No lead magnets. No "free guides." The music IS the free value.
- Occasional written reflections (blog or newsletter) that read like journal entries, not content marketing

**Conversion Mechanism:** At the end of YouTube videos and in track descriptions:
```
If this resonates, there is more at ericoliviermario.com/the-journey
```
No pop-ups. No "link in bio" urgency. A quiet signpost.

---

### Tier 2: Mid-Tier — Immersive Cohort Programs
**Products:** Module I (Rooted Creation), Module II (Presence & Sound)
**Price Signal:** Mid to upper four figures
**Capacity:** 6–10 participants per cohort
**Frequency:** Offered 3–4 times per year

**Positioning:** These are not courses. They are containers. The value is in the intimacy of the group, the quality of the facilitation, and the transformation that happens when artists stop performing and start arriving.

**Entry:** Application required. No cart checkout. Every participant is personally reviewed.

---

### Tier 3: High-Tier — 1:1 Mentorship & Module III
**Products:** From Artist to Universe (Module III), Private 1:1 ongoing mentorship
**Price Signal:** Five figures
**Capacity:** Maximum 4 per cohort (Module III), maximum 3–4 private clients at a time
**Frequency:** Module III offered 1–2 times per year. Private mentorship is rolling with a waitlist.

**Positioning:** This is the most intimate level. It requires prior work (Modules I–II or equivalent). It is not advertised — it is offered to those who demonstrate readiness.

**Entry:** Application + conversation. The conversation is part of the offering — even if someone does not continue, the call itself is valuable.

---

### Funnel Flow

```
YouTube / Streaming (wide, passive)
    ↓
Website — Music Page (emotional engagement)
    ↓
Website — The Journey Page (self-qualification)
    ↓
Application Page (active commitment)
    ↓
Personal Conversation (mutual assessment)
    ↓
Enrollment (by invitation after conversation)
```

**Key Principle:** Every step of the funnel deepens intimacy and narrows the audience. This is intentional. The goal is not volume. It is resonance.

---

### Future Revenue Streams (designed for but not launched)

| Stream | Tier | Notes |
|---|---|---|
| Retreats | Premium | 3–5 day immersive, limited to 12 people, annual |
| Live Events | Mid | Listening sessions, live performances with Q&A |
| Digital Programs | Entry/Mid | Self-paced versions of Module I (lower price, larger audience) |
| Membership | Entry | Monthly community space, exclusive releases, written reflections |
| Exclusive Listening Sessions | Premium | Advance album access, private virtual rooms |

---

## 11. TONE OF VOICE GUIDE

### Core Principles

1. **Say less.** If a sentence doesn't earn its space, cut it.
2. **Declare, don't convince.** State what is true. Do not argue for it.
3. **Second person is intimate.** Use "you" when speaking to the reader. Use "I" when sharing personal experience. Avoid "we" unless referring to a specific cohort.
4. **Present tense.** "This work focuses on..." not "This work will focus on..."
5. **Short paragraphs.** Maximum 3 sentences. Often 1.
6. **End on quiet.** The last line of any section should land softly.

### Sentence Rhythm
- Alternate between short and medium sentences
- Never more than two long sentences in a row
- Use fragments intentionally: "Not a course. A passage."
- End sections with a single short sentence that resonates

### Emotional Cadence
Every page follows this rhythm:
1. **Stillness** — Opening that creates space
2. **Recognition** — Language that makes the reader feel seen
3. **Tension** — Honest acknowledgment of difficulty or discomfort
4. **Opening** — Invitation forward without pressure
5. **Rest** — Closing that asks nothing

### Words to Use

| Category | Words |
|---|---|
| Movement | arrive, emerge, settle, surface, descend, return |
| Space | container, space, threshold, passage, arc |
| Body | rooted, grounded, embodied, held, felt |
| Process | practice, excavation, integration, devotion |
| Quality | intimate, intentional, unhurried, honest, quiet |
| Invitation | explore, enter, continue, begin, apply |

### Words to Avoid

| Category | Words |
|---|---|
| Marketing | unlock, transform (as verb), level up, scale, optimize, hack, crush it |
| Urgency | limited time, spots filling, don't miss, act now, exclusive offer |
| Hyperbole | revolutionary, game-changing, world-class, cutting-edge, best |
| Corporate | leverage, synergy, ecosystem (in business sense), stakeholder |
| Guru | master, guru, expert, authority, thought leader |
| Generic spiritual | manifest, vibration, frequency, quantum, alignment (overused) |
| Tech | onboard, funnel, convert, upsell, drip, sequence, automate |

### Spiritual Tone Without Dogma
- Reference inner experience, not doctrine
- Use physical/embodied language over metaphysical
- "Presence" over "mindfulness" (less commodified)
- "Devotion" over "purpose" (deeper, less corporate)
- "Practice" over "routine" (implies ongoing relationship)
- Never prescribe someone's spiritual experience. Describe conditions, not destinations.

### CTA Language Guide

| Instead of... | Use... |
|---|---|
| Sign up now | Apply |
| Buy / Purchase | Investment is discussed during application |
| Subscribe | Stay close |
| Download free guide | (Don't offer one) |
| Book a call | We will schedule a conversation |
| Enroll today | Enrollment is by application |
| Don't miss out | (Never say this) |
| Join our community | (Let the community emerge organically) |

---

## 12. SCALABILITY — Future-Proofing the Architecture

### URL Structure Reserved

```
/retreats              → Retreat landing pages
/retreats/[slug]       → Individual retreat detail
/events                → Live events calendar
/events/[slug]         → Individual event
/programs              → Self-paced digital programs
/programs/[slug]       → Individual program
/membership            → Inner circle / membership
/listen                → Exclusive listening sessions
/listen/[slug]         → Individual session
/journal               → Written reflections (blog alternative)
/journal/[slug]        → Individual entry
/press                 → Press mentions and features
```

### Component Modularity

Design the following as reusable components:
- **Module Card** — Used on The Journey page, individual module pages, and future programs
- **Audio Player** — Used on Music page, individual track pages, and listening sessions
- **Application Form** — Reusable with different question sets for different programs/retreats
- **Testimonial Block** — Not used at launch (no social proof language), but ready for future quotes from past participants. Format: quote + first name only + one-word descriptor ("musician," "producer," "vocalist")
- **Event Card** — For retreats and live events. Includes date, location, capacity, and single CTA
- **Journal Entry** — For the /journal section. Long-form text with optional embedded audio

### Database / CMS Entities

| Entity | Fields |
|---|---|
| Track | title, chapter, artwork, audio_url, reflection_text, journal_prompt, duration, order |
| Module | title, number, tagline, description, transformation, format, weeks, cohort_size, prerequisites |
| Application | applicant_name, artist_name, email, responses (JSON), module_interest, referral_source, status, reviewer_notes |
| Retreat | title, location, dates, capacity, description, pricing_tier, status |
| Event | title, type, date, location, description, capacity, registration_url |
| Journal Entry | title, body, date, associated_track (optional), audio_url (optional) |
| Membership | tier, benefits, status |

### Analytics — What to Track

| Metric | Why |
|---|---|
| Music page scroll depth by chapter | Which emotional chapters resonate most |
| Time on individual chapter sections | Where visitors pause and sit with the music |
| Application completion rate | Where in the form do people drop off |
| Application quality score (manual) | Over time, which referral sources produce the most aligned applicants |
| Pathway click distribution (homepage) | Music vs. Journey vs. Work With Me — where do visitors self-select |
| YouTube → website referral rate | Is the content-to-website bridge working |

Do NOT track: vanity metrics (page views, bounce rate without context). Do NOT display any metrics publicly.

---

## 13. TECHNICAL RECOMMENDATIONS

### Stack Suggestions

| Layer | Recommendation | Reasoning |
|---|---|---|
| Framework | Next.js (App Router) or Astro | SSR for SEO, smooth transitions, component architecture |
| Styling | Tailwind CSS + custom design tokens | Rapid implementation of the design system |
| CMS | Sanity or Contentstack | Structured content for tracks, modules, journal entries |
| Audio | Custom player with Howler.js or Web Audio API | Full control over player aesthetics |
| Forms | Multi-step form with React Hook Form | Stepped application experience |
| Hosting | Vercel or Netlify | Edge deployment, fast globally |
| Analytics | Plausible or Fathom | Privacy-first, no cookie banners needed |
| Email | Resend or Postmark | Transactional emails only (application confirmations) |

### Performance Targets
- First Contentful Paint: under 1.2s
- Largest Contentful Paint: under 2.5s
- Cumulative Layout Shift: under 0.1
- Total page weight: under 500KB (excluding audio files)
- Audio: streamed, never preloaded in full

### Accessibility
- All text meets WCAG AA contrast against dark backgrounds
- Audio player is keyboard navigable
- Alt text on all artwork
- Reduced motion preference respected (disable scroll animations)
- Form fields have proper labels and ARIA attributes
- Skip-to-content link on every page

---

## 14. LAUNCH SEQUENCE

### Phase 1 — Foundation (Launch)
- Homepage
- Music Journey Page (all 6 chapters)
- The Journey Overview Page
- 3 Individual Module Pages
- Application Page
- About Page
- Basic analytics

### Phase 2 — Depth (Month 2–3)
- Journal section (written reflections)
- Newsletter integration ("Stay close")
- Individual track pages with extended content
- Testimonial components (after first cohort completes)

### Phase 3 — Expansion (Month 4–6)
- Retreat landing page template
- Events calendar
- Self-paced digital program (Module I adapted)
- Membership waitlist

### Phase 4 — Ecosystem (Month 6–12)
- Full membership platform
- Exclusive listening sessions
- Live event integration
- Community space (private, not public-facing)

---

*This blueprint is designed as a living document. Every element serves the positioning: premium, intimate, transformational. The website is not a marketing tool. It is the first room of the house.*
