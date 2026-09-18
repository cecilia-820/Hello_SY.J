---
layout: page
title: Reference-Free Supply-Locked Ring-Oscillator Temperature Sensor
description: M.S. thesis. A standard-cell temperature sensor with no crystal and no bandgap, locked by a PLL-based supply loop.
img: assets/img/research/temp-sensor.svg
period: 2025 – present
importance: 1
category: research
---

<div class="row justify-content-center">
  <div class="col-sm-10 mt-3 mt-md-0">
    {% include figure.liquid loading="eager" path="assets/img/research/temp-sensor.svg" title="Supply-locked ring-oscillator temperature sensor" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
<div class="caption">
  Block diagram. A digital PLL-style loop regulates the shared supply of the two ring oscillators; the temperature code is derived from the frequency ratio.
</div>

## Why reference-free?

Conventional on-chip temperature sensors lean on a bandgap reference or an external crystal. Both cost area and power, and neither is synthesizable.
This sensor removes both: a custom **2-stack LVT ring oscillator built only from standard cells** becomes the reference clock, and everything else is digital or digital-assisted.

## How it works

- A **PLL-based feedback loop** measures the LVT ring-oscillator frequency and adjusts a **shared supply voltage** so that the oscillator stays locked. The supply is therefore _locked_ rather than _regulated_, which is why the design needs no separate reference.
- An **HVT ring oscillator** runs from the same supply. Because the two threshold voltages have different temperature dependence, the **ratio of the two frequencies** tracks temperature and rejects the common supply term.
- Target specs: **±0.1 °C** inaccuracy over **−40 to 125 °C**. Power and area will be reported after measurement.

## What I did

- End-to-end analog and digital IC design: transistor-level design of the ring oscillators and loop blocks, **DRC/LVS-clean layout**, and system-level **loop stability and noise analysis**.
- Full digital implementation with the Cadence flow (Genus, Innovus, Xcelium, SimVision, Tempus, Voltus, Pegasus).

## Status

- **Samsung 14nm FinFET tape-out in progress**, GDS scheduled for Nov. 2026.
- First-author paper in preparation (ISSCC 2028).
