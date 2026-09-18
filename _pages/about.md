---
layout: home
title: about
permalink: /
description: Seoyeong Jang — ultra-low-power mixed-signal IC designer, EECE Ph.D. applicant at KAIST.

# ---------------------------------------------------------------------------
# Quick-action buttons (top right on desktop, full-width row on phones)
# ---------------------------------------------------------------------------
quick_actions:
  - label: CV
    icon: fa-solid fa-file-pdf
    url: /assets/pdf/cv.pdf
    external: true
  - label: Email
    icon: fa-solid fa-envelope
    url: mailto:seoyoung_jang@kaist.ac.kr

# ---------------------------------------------------------------------------
# Hero  ("Hello, 대제목")
# ---------------------------------------------------------------------------
hero:
  greeting: Hello, I'm
  name: Seoyeong Jang
  headline: I design ultra-low-power mixed-signal ICs that measure the world without a reference.
  subline: M.S. student, KAIST Graduate School of AI Semiconductor · EECE Ph.D. applicant

# ---------------------------------------------------------------------------
# Video stage with four orbit badges
#   - put your clip at assets/video/intro.mp4 (it is picked up automatically), or
#   - set `embed` to a YouTube/Vimeo embed URL, or
#   - leave both empty to show the poster only.
# ---------------------------------------------------------------------------
video:
  file: assets/video/intro.mp4
  embed:
  poster: assets/img/video-poster.svg
  caption: A short walk-through of my supply-locked ring-oscillator temperature sensor.
badges:
  - value: ±0.1 °C
    label: target inaccuracy
  - value: 14 nm
    label: FinFET tape-out
  - value: PLL
    label: digital feedback
  - value: KAIST
    label: M.S. 2025 –

# ---------------------------------------------------------------------------
# Two research cards (연구제목 + Figure)
# ---------------------------------------------------------------------------
research:
  - eyebrow: Main research · M.S. thesis
    title: Reference-Free Supply-Locked Ring-Oscillator Temperature Sensor
    img: assets/img/research/temp-sensor.svg
    summary: A fully standard-cell temperature sensor that needs no crystal and no bandgap. A PLL-based loop locks the shared supply of an LVT and an HVT ring oscillator, and temperature is read from their frequency ratio.
    points:
      - Custom 2-stack LVT ring oscillator built from standard cells serves as the on-chip reference clock.
      - Target ±0.1 °C over −40 to 125 °C; end-to-end design from transistor level to DRC/LVS-clean layout and loop/noise analysis.
      - Samsung 14nm FinFET tape-out in progress (GDS Nov. 2026); first-author paper in preparation (ISSCC 2028).
    tags: [ring oscillator, PLL, digital-assisted analog, 14nm FinFET]
    url: /projects/temp-sensor/
  - eyebrow: Sub-project · research automation
    title: Research Plugin & Skills for Circuit-Paper Analysis
    img: assets/img/research/paper-rag.svg
    summary: A lab-wide Codex plugin for paper discovery, structured analysis, evidence extraction and workspace management. I own the retrieval side.
    points:
      - Retrieval over keyword, semantic, schematic-topology, functional and behavioral representations of circuit techniques.
      - Finds the same idea across papers even when figures, names and notation differ.
      - Feeds structured evidence back into the design workflow.
    tags: [RAG, retrieval, circuit taxonomy, design automation]
    url: /projects/paper-analysis-plugin/

# ---------------------------------------------------------------------------
# Process & appeal points ("과정연구? 어필요소?")
# ---------------------------------------------------------------------------
process:
  title: How I take a chip from idea to silicon
  steps:
    - icon: fa-solid fa-lightbulb
      title: Spec & architecture
      text: Choose the loop topology and budget power, area and noise.
    - icon: fa-solid fa-microchip
      title: Transistor-level design
      text: Custom standard cells, ring oscillators and the analog front end in Virtuoso.
    - icon: fa-solid fa-layer-group
      title: Layout
      text: DRC/LVS-clean layout with parasitic-aware re-simulation.
    - icon: fa-solid fa-wave-square
      title: Loop & noise analysis
      text: System-level stability, phase noise and settling of the PLL feedback.
    - icon: fa-solid fa-rocket
      title: Tape-out & measurement
      text: Full Cadence digital flow, GDS sign-off and silicon characterization.
strengths:
  - icon: fa-solid fa-circle-nodes
    title: End-to-end ownership
    text: One person, both analog and digital sides. I have carried a sensor from architecture to GDS.
  - icon: fa-solid fa-toolbox
    title: Two full tool flows
    text: Cadence (Genus, Innovus, Xcelium, Tempus, Voltus, Pegasus) and Synopsys (Design Compiler, VCS, ICC II, PrimeTime, Calibre).
  - icon: fa-solid fa-dna
    title: Bio → analog background
    text: Started in biotechnology and biomedical devices, which is why my sensors are built around real-world signals and constraints.
  - icon: fa-solid fa-robot
    title: Automation mindset
    text: I build the tools that speed up research, from retrieval plugins for circuit papers to synthesizable, reference-free sensor blocks.

# ---------------------------------------------------------------------------
# Education bar (학력)
# ---------------------------------------------------------------------------
education:
  - period: 2021 – 2023
    school: Duksung Women's University
    degree: Biotechnology
    note: Dean's scholarship, ranked 1st in first year
  - period: 2023 – Aug. 2025
    school: Hanyang University
    degree: B.S. Electrical Biomedical Engineering
    note: GPA 4.25 / 4.5 · Summa Cum Laude
  - period: Sep. 2025 – present
    school: KAIST
    degree: M.S. Graduate School of AI Semiconductor
    note: Advisor Prof. Wanyeong Jung · GPA 3.84 / 4.3
    current: true

# ---------------------------------------------------------------------------
# Album of projects (이런 프로젝트, 앨범형) — pulled from _projects with this category
# ---------------------------------------------------------------------------
album:
  title: Projects
  category: project
  limit: 6

# ---------------------------------------------------------------------------
# Extra tiles (extra project, 이미지형) — pulled from _data/extras.yml
# ---------------------------------------------------------------------------
extras:
  title: Beyond the lab
---

I am an M.S. student at KAIST working with Prof. Wanyeong Jung on ultra-low-power, reference-free sensors and PLL-based digital feedback. I like circuits that are small enough to synthesize, precise enough to trust, and simple enough to explain on one whiteboard. I am applying to EECE Ph.D. programs.
