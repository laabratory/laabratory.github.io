---
title: Optimization All the Way Up
date: 2024-11-11
tags:
  - product-management
  - ux
  - adaptive-ui
---

> Much of the work we've seen in AI has been moving up the stack, from models to products. In this post, the first in a series, we explore AI interaction patterns that can deepen our understanding of user experience. - Aagam

What if product teams could think about optimizing for user satisfaction in the same way we think about reinforcement learning with human feedback (RLHF) for products, moving optimization up a layer in the stack to focus on **user experience**?

There are hints of this in the types of fine-tuning and online learning that companies already employ. This approach aligns with the "flywheel thesis"—you collect feedback from users, integrate it into your model, and make it a source of competitive advantage. But this feedback loop primarily impacts the machine learning layer, not the UX built around it.

Currently, UX optimization happens largely through product managers, who (1) gather feedback from users, (2) draw on their own product experience, and (3) devise product plans for the next cycle. Product managers essentially act as optimizers.

However, there are bottlenecks in this process:
* Collecting user feedback is challenging. Users often find it difficult to articulate their needs, and they are usually busy.
* The optimization process relies on the idea that creating new software is costly and time-consuming. Product roadmaps tend to be conservative, leaning heavily on product intuition and various tools to turn feedback into action.
* The data-driven optimizations we use—such as A/B testing—are costly and often yield unclear insights (PMs often find "statistical significance" both essential and frustrating).

<details>
	<summary>Caveat</summary>
	There are definite benefits here—product managers filter out impractical ideas, ensuring only the most viable ones move forward. The goal is not to diminish the value of product managers.
</details>

Perhaps there’s a new approach to optimization. One that leverages recent advances in software creation to implement user feedback as it’s received and test it immediately on new users.

# Optimizing UX

![](/images/optimization-all-the-way-up/initial-diagram.excalidraw.svg)

In the traditional approach, there's often a disconnect between the user's intent and what is communicated back to the product manager (hence why product managers refer to "proxies" since direct understanding of user intent is challenging). With a new approach, the user could express their intent more directly because the **application adapts to their needs** (let's call it *Adaptive UX*).

By shortening the feedback loop between user needs and solutions, users could communicate their needs more clearly. If these solutions benefit other users as well, they can be fully integrated into the product.

# Limitations and Open Questions

First, there are technical limitations:
1. There are few strong examples of Adaptive UX currently.
2. Models may not yet be sophisticated enough.
3. There may be software engineering challenges with deploying and scaling self-modifying software.

These challenges seem manageable in the long term.

Next, there are questions about the balance of this approach with traditional product management:
1. What is the right balance between direct user feedback and "product sense"? Some argue that users often don’t know exactly what they want.
	- This might be a good thing. A key benefit of adaptive UX is that it empowers users to creatively solve their own problems rather than relying solely on product teams to make decisions on their behalf.
2. How can this contribute to revenue and other bottom-line metrics? Product development often considers factors beyond user satisfaction, including monetization, engagement, and other metrics.