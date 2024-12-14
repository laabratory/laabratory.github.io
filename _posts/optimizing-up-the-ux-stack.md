Here's the complete revised version, maintaining the same structure but with the edits incorporated:

---
title: "Optimizing up the UX stack"
date: 2024-11-11
tags:
  - product-management
  - ux
  - adaptive-ui
---

> Much of the work in AI has been moving up the stack, from models to products. In this post, we explore AI interaction patterns that can deepen our understanding of user experience. Try a limited version using the accompanying [End User Modifiable Website](/self-modifying-website.html) app - Aagam

What if product teams could think about optimizing for user satisfaction in the same way we think about reinforcement learning with human feedback (RLHF) for products, moving optimization up a layer in the stack to focus on **user experience**?

There are hints of this in the types of fine-tuning and online learning that companies already employ. This approach aligns with the "flywheel thesis"—you collect feedback from users, integrate it into your model, and make it a source of competitive advantage. But this feedback loop primarily impacts the machine learning layer, not the UX built around it.

Currently, UX optimization happens largely through product managers, who (1) gather feedback from users, (2) draw on their own product experience, and (3) devise product plans for the next cycle. Product managers essentially act as optimizers.

However, there are bottlenecks in this process:
* User feedback collection is challenging - users struggle to articulate needs and are typically time-constrained
* Software creation costs drive conservative product roadmaps that rely heavily on product intuition
* Traditional data-driven methods like A/B testing are expensive and often yield ambiguous results

<details>
	<summary>Caveat</summary>
	There are definite benefits here—product managers filter out impractical ideas, ensuring only the most viable ones move forward. The goal is not to diminish the value of product managers.
</details>

Perhaps there's a new approach to optimization. One that leverages recent advances in software creation to implement user feedback as it's received and test it immediately on new users.

# Optimizing UX

![](/images/optimizing-up-the-ux-stack/initial-diagram.excalidraw.svg)

In the traditional approach, there's often a disconnect between the user's intent and what is communicated back to the product manager (hence why product managers refer to "proxies" since direct understanding of user intent is challenging). With a new approach, the user could express their intent more directly because the **application adapts to their needs** (let's call it *Adaptive UX*).

By shortening the feedback loop between user needs and solutions, users could communicate their needs more clearly. If these solutions benefit other users as well, they can be fully integrated into the product.

# Limitations and Open Questions

First, there are technical limitations:
1. Few robust examples of Adaptive UX exist currently
2. Current models may lack required sophistication
3. Scaling and deploying self-modifying software presents engineering challenges

These challenges seem manageable. In fact, I believe this can be build today by a solo dev -- maybe with the exception of scaling up the software engineering.

Next, there are questions about the balance of this approach with traditional product management:
1. What's the optimal balance between direct user feedback and product intuition, given users may not always know exactly what they want?
   - This limitation could be a feature: adaptive UX empowers users to solve their own problems rather than relying solely on product teams
2. How does this approach align with revenue and bottom-line metrics, considering that product development often balances user satisfaction with monetization and engagement?
   - One solution: monetize by converting beta features into fully productionized software

I think this is an area for deeper, more thoughtful exploration.

# Try it

To build this vision, we need to address three key challenges:

1. Allowing end users to modify a tool (in this case, a website) to make it better fit their purpose
    1. Allowing rich integration with APIs so that modification can happen automatically
2. Persisting and productionizing these changes
    1. Allowing users to continue using their modified versions (you now have thousands of "versions" of your app - how do you cope with the load? How do you bring these users back into the fold?)
3. Making the changes actionable for development teams

Towards 1, I wrote a self-modifying website. It doesn't currently have rich integrations or a mechanism for persisting the changes made. But it accomplishes a lot of what we hope to achieve with adaptive UI in the first pass.

Try it out here: [End User Modifiable Website](/self-modifying-website.html). You can view the source code here: [aadalal/self-modifying-website](https://github.com/AaDalal/self-modifying-website). You can also just download this page -- it's a single HTML file.