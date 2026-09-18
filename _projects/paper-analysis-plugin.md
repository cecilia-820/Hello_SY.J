---
layout: page
title: Research Plugin & Skills for Circuit-Paper Analysis
description: Lab-wide Codex plugin for paper discovery and structured analysis. I own the multi-representation retrieval (RAG) component.
img: assets/img/research/paper-rag.svg
period: 2026 – present
importance: 2
category: research
---

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/paper-rag.svg" title="Circuit-paper analysis pipeline" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Pipeline. Papers are decomposed into text and figures, represented in several complementary ways, indexed, and retrieved to support structured analysis.
</div>

## The problem

Circuit papers describe the same technique under different names, with different notation and different schematics. Keyword search alone misses most of the relevant prior art, which slows down literature review and design-space exploration.

## What the plugin does

A lab-wide Codex research plugin with skills for **paper discovery**, **structured analysis**, **evidence extraction** and **research-workspace management**.

## My part: retrieval

I design the **RAG (retrieval-augmented generation)** and retrieval component. Each paper is represented in five complementary views so that related circuit techniques can be found across different figures and terminology:

- **Keyword** — classic lexical matching.
- **Semantic** — dense embeddings of text passages.
- **Schematic topology** — the structure of the circuit graph itself.
- **Functional** — what the block does (e.g. supply-noise cancellation, loop-gain boosting).
- **Behavioral** — how it behaves (transfer characteristics, loop dynamics).

Retrieval fuses these views so that, for example, a "supply-locked" loop and a "voltage-regulated oscillator" surface together even when their figures look nothing alike.
