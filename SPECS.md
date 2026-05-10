# Magewa — Product Specification

> Brand rationale and story: [`BRAND.md`](BRAND.md)

## Working thesis

Magewa is a **creative intelligence platform** for teams that turn messy, high-volume knowledge into client-ready artifacts.

Not “a chatbot over documents.”
Not “another coding agent.”
Not “Notion plus AI.”

The stronger idea is:

> **A versioned knowledge and artifact production system for creative teams, where internal/client knowledge becomes reusable context, pipelines turn that context into outputs, and AI agents safely generate shareable artifacts like proposals, decks, wireframes, prototypes, and research deliverables.**

A possible shorthand:

> **GitHub + Notion + Figma prototypes + AI agents, purpose-built for creative/client work.**

Or more sharply:

> **Context infrastructure for agencies and creative operators.**

---

# 1. The core product idea

Magewa has four main layers:

## 1. Knowledge layer

Teams upload and manage internal/client knowledge:

* Client interviews
* Brand guidelines
* Strategy docs
* Meeting transcripts
* Existing websites
* Competitor references
* Pricing models
* Proposal templates
* Research notes
* Past winning pitches
* Internal agency frameworks
* Design principles
* Legal/commercial constraints
* Previous project artifacts

The key is that this knowledge is not just “uploaded files.” It becomes a **managed corpus** with:

* Ownership
* Permissions
* Versioning
* Mutability status
* Tags
* Taxonomy
* Source metadata
* Client/project association
* Validity period
* Confidence level
* Derived summaries
* Evidence links
* Usage restrictions

The big insight: creative teams do not just need retrieval. They need **controlled context reuse**.

---

## 2. Context-pack layer

Instead of asking users to manually pick 30 files every time, Magewa lets them create **Context Packs**.

A Context Pack is a reusable, versioned bundle of knowledge.

Examples:

* `Client ABC / Brand Discovery / v1`
* `Agency Pricing Guidelines / 2026`
* `Healthcare Website Proposal Template / v3`
* `Client ABC / Interview Insights / v2`
* `Internal UX Heuristics / Stable`
* `Competitor Landscape / SaaS Websites / Mutable`

This is probably one of the most important product primitives.

A user should be able to say:

> “Use Client ABC Brand Discovery v1, Agency Pricing Guidelines 2026, and SaaS Website Proposal Template v3 to create a website proposal.”

That is much more powerful than “chat with these PDFs.”

---

## 3. Pipeline layer

A pipeline takes context packs and turns them into structured outputs.

Examples:

### Proposal pipeline

Input:

* Client brief
* Brand guidelines
* Pricing guidelines
* Past proposals
* Scope templates

Output:

* Strategic summary
* Recommended scope
* Pricing options
* Timeline
* Risks
* Proposal document
* Slide deck

### Website concept pipeline

Input:

* Client interviews
* Brand guidelines
* Existing site audit
* Competitor references
* UX heuristics

Output:

* Positioning summary
* Sitemap
* Content hierarchy
* Wireframes
* Design directions
* Prototype

### Research synthesis pipeline

Input:

* Interview transcripts
* Survey results
* Desk research
* Prior internal insights

Output:

* Themes
* Quotes
* Opportunity areas
* Personas
* Journey map
* Executive summary

### Pitch-deck pipeline

Input:

* Client context
* Internal templates
* Market references
* Case studies

Output:

* Narrative arc
* Slide outline
* Copy
* Visual direction
* Speaker notes
* Exportable deck

The user does not need to know there are agents, retrieval systems, sandboxes, or prompts underneath. They see a clean flow:

> Select context → choose output → review assumptions → generate → refine → share.

---

## 4. Artifact layer

The final result is not just text. It is a collection of versioned artifacts:

* Docs
* Slide decks
* Wireframes
* Design briefs
* Proposals
* Interactive prototypes
* Microsites
* Research reports
* Pricing models
* Strategy canvases
* Code repos
* Preview deployments

Each artifact should remember:

* Which context packs created it
* Which pipeline was used
* Which model/agent generated it
* Which files were cited
* Which human edited it
* Which version was sent to the client
* Which preview URL was shared
* Which comments or approvals happened afterward

This gives Magewa a strong audit trail and makes it useful for real client work.

---

# 2. Why now

There are already pieces of this ecosystem emerging.

Vercel Sandbox is positioned as a way to safely run untrusted or AI-generated code in short-lived isolated environments, including AI agent and code-generation use cases. ([Vercel][1]) E2B similarly focuses on giving coding agents secure execution environments with filesystem, terminal, internet, and tool access. ([E2B][2]) Daytona is taking a more persistent-workspace angle for AI agents and development environments. ([Daytona][3]) OpenAI’s Codex is already framed as a cloud software-engineering agent that can run tasks in parallel across codebases and environments. ([OpenAI][4])

On the workflow side, platforms like Dify are bundling agentic workflows, RAG pipelines, integrations, and observability. ([Dify][5]) Prompt-management platforms like Humanloop focus on team collaboration around prompts, versions, evaluations, and production behavior. ([Humanloop][6])

So the market is validating the primitives: RAG, agents, sandboxes, workflows, prompt/version management, and deployment. The gap is that most of these are built for developers or generic AI app builders. Magewa's opportunity is to package these primitives around **creative production, client work, and artifact delivery**.

That is the wedge.

---

# 3. The best positioning

I would not position this as:

> “AI document management.”

Too boring.

I would also avoid:

> “AI agent platform.”

Too generic and developer-heavy.

Better:

> **The AI production workspace for agencies and creative teams.**

Or:

> **Turn client knowledge into proposals, decks, websites, and prototypes.**

Or:

> **A versioned context and artifact platform for creative work.**

The emotional promise:

> “Stop starting from scratch every time. Turn your agency’s knowledge into reusable creative infrastructure.”

The practical promise:

> “Upload client inputs, combine them with internal playbooks, run production pipelines, and ship client-ready artifacts with provenance, versioning, and shareable previews.”

---

# 4. Core user personas

## Primary wedge: design and strategy agencies

They have exactly the pain you described:

* Lots of messy client inputs
* Lots of reusable internal IP
* Repeated deliverable types
* Need to create polished artifacts quickly
* Need to maintain separation between clients
* Need to reuse past knowledge without leaking confidential details
* Need to share outputs externally
* Need to version work across client rounds

This is probably the best first market.

## Secondary users

### Research teams

They collect interviews, transcripts, survey data, notes, desk research, and need to produce synthesis artifacts.

### Innovation teams

They create concepts, prototypes, experiments, internal pitches, and product explorations.

### Product/design teams inside companies

They need to synthesize customer knowledge, internal docs, brand/product constraints, and create prototypes.

### Consultants

They reuse frameworks, proposal templates, pricing models, and client-specific discovery inputs.

---

# 5. The product’s central objects

Magewa should be designed around a small number of first-class objects.

## Workspace

The top-level organization.

Example:

* `Acme Design Studio`

Contains users, permissions, billing, global templates, internal IP, and client spaces.

---

## Client space

A container for one client.

Example:

* `Client: Northstar Bank`

Contains all client-specific data, projects, artifacts, approvals, and share settings.

---

## Project

A specific engagement.

Examples:

* `Website Redesign 2026`
* `Brand Refresh`
* `Research Sprint`
* `Investor Pitch`
* `Product Prototype`

---

## Dataset

A collection of related knowledge.

Examples:

* `Interview Transcripts`
* `Brand Guidelines`
* `Pricing Rules`
* `Competitor Websites`
* `Past Proposals`
* `Legal Constraints`

---

## Context Pack

A curated, versioned bundle of datasets and rules.

Examples:

* `Northstar Website Redesign Context v1`
* `Agency Proposal System v3`
* `Fintech Website References v2`

This should become the product’s most important abstraction.

---

## Pipeline

A repeatable workflow that transforms context into output.

Examples:

* `Generate Website Proposal`
* `Create Pitch Deck`
* `Create Homepage Wireframe`
* `Synthesize Interviews`
* `Generate Prototype`

---

## Run

A single execution of a pipeline.

A run records:

* Inputs
* Context versions
* Agent steps
* Generated files
* Errors
* Human interventions
* Costs
* Output versions

---

## Artifact

The final deliverable.

Examples:

* Proposal
* Deck
* Prototype
* Wireframe
* Report
* Codebase
* Preview deployment

---

# 6. Immutable vs mutable data

This part is important.

You probably need three knowledge layers:

## 1. Raw source layer — immutable by default

Examples:

* Original interview transcript
* Uploaded brand PDF
* Signed-off client brief
* Original pricing spreadsheet
* Imported website snapshot

These should be treated as source evidence. Users should not edit them directly. They can supersede them with a new version, but the original remains intact.

Purpose:

* Trust
* Auditability
* Reproducibility
* Client accountability

---

## 2. Interpretation layer — mutable

Examples:

* AI-generated summaries
* Human notes
* Extracted themes
* Strategic assumptions
* Tags
* Personas
* Positioning hypotheses
* Opportunity areas

These can evolve over time.

A transcript is immutable.
The synthesis of that transcript is mutable.

---

## 3. Production layer — versioned artifacts

Examples:

* Proposal v1
* Proposal v2
* Homepage prototype v3
* Pitch deck client version
* Internal draft

These are editable, branchable, and reviewable.

This separation is crucial because creative teams constantly reinterpret information, but they still need to preserve the original source.

---

# 7. The killer workflow

Here is the flagship workflow I would design the entire MVP around.

## “New client to prototype”

### Step 1: Create client space

The agency creates:

> `Client: Northstar Bank`

Then chooses a template:

> “Website redesign engagement”

---

### Step 2: Upload and ingest data

They upload:

* Brand guidelines
* Existing website URL
* Discovery call transcript
* Stakeholder interview transcripts
* Competitor links
* Past proposal template
* Internal pricing rules
* Agency design principles

The system classifies everything.

Example:

| File                   |              Type |        Mutability |   Scope |
| ---------------------- | ----------------: | ----------------: | ------: |
| Brand Guidelines.pdf   |      Brand source |         Immutable |  Client |
| Discovery Call.txt     |        Transcript |         Immutable | Project |
| Pricing Rules.xlsx     | Commercial policy | Mutable/versioned |  Agency |
| Proposal Template.docx |          Template | Mutable/versioned |  Agency |
| competitor-urls.csv    | Market references |           Mutable | Project |

---

### Step 3: Generate a Context Pack

The system proposes:

> `Northstar Website Redesign Context v1`

Containing:

* Client facts
* Brand constraints
* Stakeholder goals
* Business objectives
* Target audience
* Competitor patterns
* Agency pricing rules
* Recommended proposal template

The user can inspect, remove, or add sources.

---

### Step 4: Run a proposal pipeline

The user selects:

> “Create website redesign proposal”

The pipeline produces:

* Problem framing
* Objectives
* Scope
* Timeline
* Pricing tiers
* Risks
* Assumptions
* Proposal document
* Slide deck version

Every claim links back to source evidence.

---

### Step 5: Run a concept pipeline

The user selects:

> “Create 3 website concepts”

The system generates:

* Concept A: conservative trust-building direction
* Concept B: premium editorial direction
* Concept C: high-conversion SaaS-style direction

Each concept includes:

* Rationale
* Homepage structure
* Visual tone
* Messaging examples
* Sitemap
* Wireframe
* Prototype brief

---

### Step 6: Generate prototype

A coding/design agent creates a prototype in a controlled environment.

Possible output:

> `prototype-v1.northstar.acmestudio.com`

Or:

> `northstar-v1.acmestudio.prototypes.com`

The client can access it through:

* Password
* Magic link
* Workspace login
* Expiring link
* Domain allowlist

---

### Step 7: Review, comment, branch

The client says:

> “We like Concept B, but make it more enterprise and less editorial.”

The agency creates:

> `Prototype v1.1`

The system knows the full lineage:

> Context Pack v1 → Concept B → Prototype v1 → Client feedback → Prototype v1.1

That is powerful.

---

# 8. What the MVP should include

Do not build the whole platform first.

The MVP should prove one loop:

> **Messy inputs → managed context → AI-generated client artifact → shareable output → versioned iteration.**

## MVP feature set

### 1. Client/project workspaces

Basic hierarchy:

* Agency workspace
* Client
* Project

---

### 2. Upload and ingestion

Support only the most common formats at first:

* PDF
* DOCX
* TXT/Markdown
* CSV
* Website URL
* Transcript text
* Images/screenshots, maybe later

---

### 3. Dataset manager

Users can create datasets like:

* Client Discovery
* Brand Assets
* Competitor Research
* Agency Templates
* Pricing Guidelines

Each dataset should have:

* Description
* Owner
* Visibility
* Mutable/immutable flag
* Version history
* Tags

---

### 4. Context Packs

This is the MVP centerpiece.

Users can combine datasets into a context pack:

> `Client ABC Website Proposal Context v1`

They can freeze the pack before generating artifacts.

This gives reproducibility:

> “This proposal was generated from this exact context.”

---

### 5. Three pipeline templates

Start with three high-value outputs:

1. **Proposal generator**
2. **Website concept/wireframe generator**
3. **Prototype generator**

Do not start with an open-ended workflow builder. Templates are easier to trust, sell, and evaluate.

---

### 6. Artifact viewer

Artifacts should be displayed in a workspace, not just downloaded.

For example:

* Proposal document
* Slide outline
* Wireframe
* Prototype link
* Source evidence panel
* Comments
* Version history

---

### 7. Shareable previews

This is a major differentiator.

Users should be able to share:

* Proposal preview
* Prototype URL
* Deck preview
* Research report
* Wireframe board

With:

* Public link
* Password
* Expiry
* Client-specific portal
* View/comment permissions

---

### 8. Provenance and evidence

Every generated artifact should include an optional evidence panel:

> “This recommendation comes from: Interview with Sarah, Brand Guidelines p. 12, Competitor Scan v2.”

This is essential for trust.

---

# 9. What not to build first

Avoid these in the first version:

* Fully general no-code workflow builder
* Full sandbox platform from scratch
* Full Figma replacement
* Full deck editor
* Full CMS
* Full enterprise data governance suite
* Fully autonomous multi-agent system
* Arbitrary plugin marketplace
* Perfect internal knowledge graph
* Complex approval workflows

The first product should feel magical but narrow.

The wedge could be:

> “Upload client discovery and agency templates. Generate a proposal, deck outline, and interactive website prototype with source-backed rationale.”

That is enough to test demand.

---

# 10. Suggested technical architecture

## Data storage

Use a split model:

### Object storage

For raw files:

* PDFs
* DOCX
* transcripts
* images
* generated artifacts
* prototype bundles

### Relational database

For:

* Users
* Workspaces
* Clients
* Projects
* Datasets
* Permissions
* Versions
* Pipeline runs
* Artifact metadata
* Deployment records

### Vector index

For semantic retrieval over:

* Document chunks
* Summaries
* Interview quotes
* Guidelines
* Templates

### Optional graph layer

Useful later for:

* People
* Brands
* Competitors
* Projects
* Claims
* Sources
* Artifacts
* Relationships

But do not make graph infrastructure a dependency for the MVP. You can model lineage relationally first.

---

## Versioning model

Each dataset has versions.

Each context pack references fixed dataset versions.

Each pipeline run references one frozen context pack.

Each artifact references one pipeline run.

So the lineage is:

> Source documents → dataset version → context pack version → pipeline run → artifact version → shared deployment

This gives you reproducibility and auditability.

---

## Agent runtime

The agent system should have several roles:

### Retriever

Finds relevant evidence from the context pack.

### Planner

Breaks the task into steps.

### Generator

Creates the draft output.

### Critic/reviewer

Checks for consistency, missing evidence, contradictions, and style compliance.

### Builder

For prototypes, writes code or creates structured design artifacts.

### Publisher

Packages and deploys the artifact.

The user should not see all of this complexity. They should see:

> “Generating proposal…”
> “Checking against brand guidelines…”
> “Creating prototype…”
> “Preparing preview link…”

---

## Sandbox strategy

Do not build sandbox infrastructure yourself at the beginning unless the sandbox is your core moat.

Use an existing sandbox or deployment primitive for code execution and previews.

The long-term moat is not “we can run code in a sandbox.” Others can do that. The moat is:

> **The right context, permissions, lineage, and creative workflows around the sandbox.**

Your system’s value is knowing what the agent should build, with which data, for whom, under which constraints, and how to share it safely.

---

# 11. Permissions and governance

Magewa needs strong access controls from the beginning because agencies handle sensitive client data.

You need at least:

## Scope levels

* Personal
* Team
* Agency-wide
* Client-specific
* Project-specific
* External client viewer

## Data visibility

Each dataset should support:

* Private
* Team-visible
* Client-visible
* Restricted
* Internal-only
* Never expose to client
* Allowed for generated output
* Allowed for internal reasoning only

That last distinction matters.

Example:

An agency’s pricing strategy may be used to generate a proposal, but the raw pricing rules should not be visible to the client.

---

## Data-use policies

Each data object should answer:

* Can the model retrieve this?
* Can it quote this?
* Can it summarize this?
* Can it use this in generated artifacts?
* Can it expose this to external viewers?
* Can it be used across clients?
* Can it train future internal templates?
* Is it immutable?
* Is it deprecated?

This is one of the places where Magewa can feel enterprise-grade without becoming too complex.

---

# 12. UI concept

I would design the app around five main areas.

## 1. Library

Where all knowledge lives.

Views:

* By client
* By project
* By dataset
* By type
* By status
* By mutability
* By last used
* By artifact lineage

---

## 2. Context Builder

A visual interface for assembling context packs.

Think:

* Left side: available datasets
* Middle: selected context pack
* Right side: summary, warnings, coverage, permissions

Example warning:

> “Pricing Guidelines are internal-only. They can influence proposal pricing but cannot be quoted in client-facing output.”

---

## 3. Pipeline Studio

Not a complex workflow builder at first.

More like a template launcher:

* Create proposal
* Create pitch deck
* Create research synthesis
* Create website concept
* Create prototype

Each pipeline asks for a few structured inputs:

* Audience
* Tone
* Output type
* Required sections
* Context pack
* Deadline
* Fidelity level

---

## 4. Artifact Workspace

A place to review and edit outputs.

Features:

* Version history
* Comments
* Evidence sidebar
* Regenerate section
* Accept/reject changes
* Export
* Share
* Deploy

---

## 5. Client Portal

A clean external view.

Clients can see:

* Proposal
* Prototype
* Deck
* Research report
* Comments
* Approved versions

But not the internal corpus unless explicitly shared.

---

# 13. The main differentiator

Most AI tools answer questions.

Magewa should **produce client-ready work**.

Most knowledge-base products retrieve information.

Magewa should **turn knowledge into artifacts**.

Most agent tools execute tasks.

Magewa should **execute creative production pipelines with governed context**.

The differentiated primitive is:

> **Magewa's versioned context packs connected to artifact pipelines.**

That is the thing I would protect and polish.

---

# 14. Example product narrative

Here is how I would explain it to a design agency founder:

> Your team already has the ingredients: client interviews, brand docs, past proposals, pricing logic, design principles, and years of project knowledge. But every new project still starts with messy folders, scattered notes, and manual synthesis.
>
> Magewa turns that scattered knowledge into reusable context packs. For each client or project, you can combine source material, agency templates, pricing rules, and research into a governed knowledge bundle. Then you run production pipelines to create proposals, decks, wireframes, research summaries, and interactive prototypes.
>
> Every output is versioned, source-backed, editable, and shareable with the client. Your internal IP stays protected, client data stays separated, and your team can move from discovery to polished artifact much faster.

That story is clear.

---

# 15. Concrete MVP demo

The demo should be extremely specific.

## Demo title

> “From client discovery to website prototype in 20 minutes.”

## Demo flow

1. Create new client: `Northstar Bank`
2. Upload:

   * Brand guidelines
   * Three interview transcripts
   * Existing website URL
   * Competitor links
   * Agency proposal template
   * Pricing rules
3. System creates:

   * `Northstar Discovery Dataset`
   * `Northstar Brand Dataset`
   * `Agency Pricing Dataset`
4. User creates:

   * `Northstar Website Context v1`
5. User runs:

   * `Website Proposal Pipeline`
6. System outputs:

   * Proposal
   * Timeline
   * Pricing options
   * Slide outline
7. User runs:

   * `Website Concept Pipeline`
8. System outputs:

   * Three creative directions
   * Sitemap
   * Homepage wireframes
9. User chooses Concept B.
10. System creates:

* Interactive prototype
* Share link

11. Client comments.
12. Agency branches:

* `Prototype v1.1`

This is the product.

---

# 16. Business model

A likely pricing structure:

## Agency plan

* Seats
* Client spaces
* Storage
* Artifact generation credits
* Prototype deployments

## Usage-based add-ons

* AI runs
* Sandbox compute
* Long-running agent tasks
* External share portals
* Custom domains

## Enterprise plan

* SSO
* Advanced permissions
* Audit logs
* Private model routing
* Data residency
* On-prem or VPC option
* Custom pipeline templates

The pricing should map to agency value:

> “How many client deliverables did this help you produce?”

Not merely:

> “How many tokens did you use?”

---

# 17. Important risks

## Risk 1: It becomes too generic

The biggest strategic risk is building an abstract AI workflow platform.

Avoid that.

Be specific:

> “We help agencies turn client knowledge into proposals, decks, and prototypes.”

You can expand later.

---

## Risk 2: Context quality is hard

If the system retrieves the wrong document or mixes outdated and current facts, trust collapses.

Solution:

* Strong context-pack UX
* Clear source status
* Immutable raw evidence
* Deprecation markers
* Evidence sidebar
* Conflict detection

---

## Risk 3: Client data leakage

This is existential for agencies.

Solution:

* Strict client boundaries
* Internal-only flags
* Cross-client reuse controls
* Audit logs
* Permission-aware retrieval
* Output scanning before sharing

---

## Risk 4: Generated artifacts are not polished enough

Creative teams have high standards.

Solution:

* Start with structured artifacts where AI is already useful
* Let humans edit
* Make regeneration granular
* Use agency templates
* Do not pretend AI replaces designers
* Focus on acceleration from 0 to 60, not final perfection

---

## Risk 5: Sandbox costs and complexity

Interactive prototypes are exciting but can become expensive.

Solution:

* Start with constrained prototype templates
* Use short-lived preview environments
* Limit runtime
* Cache dependencies
* Auto-sleep deployments
* Offer paid tiers for persistent previews

---

# 18. Expansion path

## Phase 1: Knowledge-to-proposal

Start with proposals, briefs, and decks.

Why?

* Easy to understand
* High business value
* Lower technical complexity
* Agencies already have templates
* Outputs can be reviewed quickly

---

## Phase 2: Knowledge-to-wireframe

Add structured wireframes and concept boards.

Outputs:

* Sitemap
* Section hierarchy
* Homepage layout
* Messaging
* Design direction

---

## Phase 3: Knowledge-to-prototype

Add coding/design agents that generate interactive previews.

Outputs:

* Landing pages
* Microsites
* Web app prototypes
* Campaign pages
* Concept demos

---

## Phase 4: Client collaboration portal

Clients can review, comment, approve, and compare versions.

---

## Phase 5: Agency memory and benchmarking

The platform starts learning patterns across projects:

* Which proposal structures win?
* Which pricing tiers convert?
* Which design directions get approved?
* Which client objections repeat?
* Which internal templates perform best?

This becomes the long-term strategic value.

---

# 19. Name

**Magewa** (曲輪) — the Japanese craft of making bentwood hoops, the structural rings that bind individual staves into a unified vessel.

Context packs are the rings that bind fragmented knowledge into coherent client deliverables. See `BRAND.md` for the full brand rationale and story.

Previous candidates that were considered:

* ContextForge, ContextOS, Corpus, Sourceboard, Knowledge Foundry, ContextStack
* Draftworks, ConceptFoundry, StudioOS, AgencyOS, Artifact Studio, Briefly, Pitchworks
* Launchroom, PreviewLab, ClientPreview, Shipdraft, ConceptCloud

---

# 20. The clean final plan

Here is the distilled plan.

## Product

Magewa — a platform where creative teams can manage versioned internal/client knowledge, assemble context packs, run AI production pipelines, and generate shareable artifacts such as proposals, decks, wireframes, and prototypes.

## Initial market

Design, strategy, and web agencies working on client projects.

## Core primitive

Versioned **Context Packs** that combine client data, internal IP, templates, pricing rules, and project-specific research.

## Core workflow

Upload client/project inputs → classify and version data → assemble context pack → run artifact pipeline → review source-backed output → share or deploy → iterate with version history.

## MVP

Build:

1. Client/project workspaces
2. File and URL ingestion
3. Dataset manager
4. Context Pack builder
5. Proposal pipeline
6. Website concept pipeline
7. Simple prototype pipeline
8. Artifact viewer
9. Shareable preview links
10. Source/evidence panel

## Do not build yet

Avoid a fully general workflow builder, full design editor, full sandbox platform, or broad agent marketplace.

## Long-term moat

The moat is not the model or the sandbox. The moat is:

> Magewa's structured, permission-aware, versioned creative memory of the team, plus the artifact lineage that connects knowledge to shipped client work.

## One-sentence pitch

> **Magewa — a versioned AI workspace that turns client knowledge and agency IP into proposals, decks, wireframes, and prototypes with governed context, source-backed outputs, and shareable previews.**

[1]: https://vercel.com/docs/vercel-sandbox?utm_source=chatgpt.com "Vercel Sandbox"
[2]: https://e2b.dev/?utm_source=chatgpt.com "E2B | The Enterprise AI Agent Cloud"
[3]: https://www.daytona.io/?utm_source=chatgpt.com "Daytona - Secure Infrastructure for Running AI-Generated Code"
[4]: https://openai.com/index/introducing-codex/?utm_source=chatgpt.com "Introducing Codex"
[5]: https://dify.ai/?utm_source=chatgpt.com "Dify: Leading Agentic Workflow Builder"
[6]: https://humanloop.com/platform/prompt-management?utm_source=chatgpt.com "Prompt Management Tool for Building LLM Apps"

