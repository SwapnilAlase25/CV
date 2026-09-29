---
title: "Edge AI Lab — ML on the device"
summary: "My next flagship: taking models from a Jupyter notebook down to resource-constrained hardware — quantisation, latency budgets and real sensor data. Combines both halves of my career."
category: ai
status: building
tags: ["Python", "PyTorch", "TinyML", "Quantization", "Raspberry Pi"]
metrics: ["In progress"]
featured: true
spotlight: true
playground: true
order: 1
roadmap:
  - { label: "Pick a sensor problem & collect data", status: active }
  - { label: "Train a baseline model in Python", status: todo }
  - { label: "Quantise & prune for the edge", status: todo }
  - { label: "Deploy & benchmark on device", status: todo }
  - { label: "Write it up on the blog", status: todo }
---

## Why this project

Most ML portfolios stop at a notebook. Most embedded portfolios never touch a model.
This project is where both meet: train a model, compress it, and make it run on real hardware
within real latency and memory budgets.

## Plan

1. Pick a sensor-driven problem (e.g. audio keyword spotting or vibration anomaly detection).
2. Train a baseline in Python and document the metrics.
3. Quantise / prune it and measure accuracy vs. size vs. latency.
4. Deploy on-device and write up everything on the blog.

*This page will be updated as the project progresses.*
