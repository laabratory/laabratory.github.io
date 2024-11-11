---
title: Optimization all the way up
date: 2024-11-07
tags: []
---
> A lot of the work that we've seen around AI has been moving up the stack, from models to products. In this series, we explore AI interaction patterns that can help us understand the UX better.

What if product teams could think about optimizing for user joy in the same way we think about RLHFing a product, moving the optimization a layer up in the stack to the **user experience**.

There are shades of this in the types of fine-tuning and online learning that companies do. This is the flywheel thesis -- you get feedback from your users and then integrate into the your model thus making it a source of competitive advantage. But this is only really true for the ML layer, not the UX build around it.

Right now, optimization on the UX level happens via product managers, who (1) take in feedback from users, (2) their own product experience, and (3) produce product plans for what to build over the next cycle. Product managers are essentially optimizers. 

There are some bottlenecks in this process:
* Getting user feedback is non-trivial. People often can't elaborate on what they need, and they are often busy.
* The optimization that's happen is predicated on the idea that producing new software is expensive and time-consuming. Product roadmaps need to be conservative, and so you lean heavily on product sense and other tools to convert user feedback into action.
* The data-driven optimization we do -- AB testing -- is expensive, and difficult to gain concrete insights for ("Stat Significance" is an important but annoying word for PMs).

<details>
	<summary>Caveat</summary>
	There are also certainly benefits -- product managers act as a filter removing the things that don't make sense). The goal is not to say that product managers are not useful. They are!
</details>

Maybe there's a new way of doing this optimization. One that relies on the step change in the ease of producing software to implement feedback immediately as it is received and test it on new users.

# Optimizing UX
![](/images/optimization-all-the-way-up/initial-diagram.excalidraw.svg)

In the old way, there's a lot of fuzziness between the user's intent and what actually gets communicated back to the product manager (many product managers talk about "proxies" because user intent/need is difficult to understand directly). In the new way, the user more clearly states their intent because the **application will adapt to what the user intends** (let's all it *Adaptive UX*).

By tightening the feedback between a users need and solving it we can get users to more directly communicate what they want. Then, if that thing is useful for other users, we can build it in full.
# Limitations and Open Questions

First there are technical limitations:
1. We haven't really seen many great examples of this *Adaptive UX* yet.
2. Maybe models aren't smart enough
3. There might be software engineering challenges around software that modifies itself (e..g, how do you deploy and scale these things)
These seem easy to overcome

Then there are open questions about the idea and product management
1. What is the right balance between this kind of direct user feedback and "product sense"? Some product people would argue that users often don't know what they want.
	1. I would argue that these is a key benefit to this kind of adaptive UX which is that it returns control to the user -- allowing them to be more deeply creative to solve their problems rather than outsourcing that creativity to product teams
2. How can this drive revenue and other bottom line metrics? There are often considerations other than just user joy driving product development -- namely monetization, engagement etc.
