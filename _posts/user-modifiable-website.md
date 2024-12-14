---
title: "Optimizing UX: End-User Modifiable Website"
date: 2024-12-13
tags:
  - product-management
  - ux
  - adaptive-ui
---

> If you haven't already, read [Optimizing up the UX Stack](/p/optimizing-up-the-ux-stack), which this post is based on.

There are three hurdles to overcome to build the vision outlined in "Optimizing Up the UX Stack":

1. Allowing end users to modify a tool (in this case, a website) to make it better fit their purpose
    1. Allowing rich integration with APIs so that modification can happen automatically
2. Persisting and productionizing these changes
    1. Allowing users to continue using their modified versions (you now have thousands of "versions" of your app - how do you cope with the load? How do you bring these users back into the fold?)
3. Making the changes actionable for development teams

Towards 1, I wrote a self-modifying website. It doesn't currently have rich integrations or a mechanism for persisting the changes made. But it accomplishes a lot of what we hope to achieve with adaptive UI in the first pass.

Try it out here: [End User Modifiable Website](/self-modifying-website.html). You can view the source code here: [aadalal/self-modifying-website](https://github.com/AaDalal/self-modifying-website)
