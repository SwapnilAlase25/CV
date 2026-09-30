---
title: "From Bluetooth stacks to neural nets: why an embedded engineer moved into AI"
description: "Years of shipping automotive embedded software taught me lessons that most AI tutorials skip. Here's why I made the move, and what I'm carrying with me."
date: 2026-09-29
tags: ["career", "embedded", "ai", "genai"]
---

For years my world was measured in bytes and milliseconds. I wrote Embedded C for car infotainment systems,
debugged Bluetooth links between head units and phones, and learned that a car doesn't care how clever your
code is. It only cares whether it works every single time.

Then I moved into AI. This post explains why, and why I think embedded engineers make surprisingly good
AI engineers.

## Why I moved

Embedded systems generate enormous amounts of data: sensor readings, CAN messages, logs and user interactions.
For most of my career that data was something to *transport* correctly. I got more and more curious about what
it could *tell* us, and about systems that learn from it instead of just following rules.

So I started an MS in Artificial Intelligence & Machine Learning and moved into Forvia's AI team.

## What embedded taught me that AI needs

1. **Constraints are features.** Memory, latency and power budgets force clarity. The same thinking applies to
   model size, inference cost and data quality.
2. **Measure, don't guess.** In embedded you don't trust anything you haven't seen on the oscilloscope or in a trace.
   In ML you don't trust anything you haven't validated on held-out data.
3. **Reliability is the product.** A model that is 95% accurate in a notebook and crashes in production is worth nothing.
4. **Know the whole stack.** Understanding where data is born, on the device, helps you design better features and pipelines.

## Where I'm heading: Generative AI and ML

The most exciting place for me right now is **Generative AI and machine learning**: building AI systems that
are not just impressive in a demo, but reliable, measurable and useful in the real world. That is exactly where
an embedded engineer's habits (test everything, respect constraints, never ship a flaky system) pay off.

I'll document everything I build on this blog, including the failures.

```python
# The journey, in one line
career = ["Embedded C", "Bluetooth", "Infotainment"] + ["Python", "ML", "Generative AI"]
```

Thanks for reading. If you're making a similar move, [reach out](https://www.linkedin.com/in/swapnilalase/).
